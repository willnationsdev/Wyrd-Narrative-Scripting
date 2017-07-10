# Author: Will Nations
# Date: 07/02/2017
# 
# TokawajeTree is assumed to be a product of the TokawajeParser class in that 
# it does not attempt to parse the content provided to it.
#
# Naming Convention:
# Classes / Script-type variables: UpperCamelCase
# Else: snake_case
# [name] = public member variable or method, Script variables
# _[name] = private member variable or method
# i_[name] = iteration variable
# p_[name] = parameter variable
# v_[name] = local variable
# r_[name] = local variable to return

extends Reference

var TWContext = preload("TokawajeContext.gd")

# A reference to the text editor that will respond to any and all
# parsing errors and warnings.
var _text_editor = null

# The root contexts
var _roots = []

# The current context
var _context = null

# For mode states, runnable once is_sentence == true # Tells the narrative engine how to execute the content defined by the TokawajeTree
enum {
    TW_MODE_NULL,
    TW_MODE_ACTION,
    TW_MODE_SAY,
    TW_MODE_SHOUT,
    TW_MODE_WHISPER,
    TW_MODE_THINK
}

# Tracks how subsequent inputs are to be interpreted by the Wyrd narrative engine.
var mode_state = TW_MODE_SAY

# Simplifies acquisition of the appropriate execution mode based on user input.
var mode_mappings = {}

# _ready()
# 
# Auto Initialization
# 
func _ready():
    mode_mappings[":"] = TW_MODE_ACTION
    mode_mappings["!"] = TW_MODE_SHOUT
    mode_mappings["@"] = TW_MODE_WHISPER
    mode_mappings["*"] = TW_MODE_THINK
    connect("warning_multiple_logic_states", self, "_echo_warning_multiple_logic_states")
    set_context(TWContext.new())

# init()
#
# Manual Initialization
#
# return: self
func init(p_text_editor):
    _text_editor = p_text_editor
    return self

# insert()
#
# Inserts a new context into the TokawajeTree.
#
# p_match: The RegExMatch to extract data from.
#
# return: self on success or null on failure
func insert(p_match = null):
    if !(p_match is RegExMatch):
        _text_editor.emit_signal("error_concept_insertion_failure", "Error: TokawajeTree::insert(): p_match is not a RegExMatch")
        return null
    
    # Work on a local copy in case of premature failure. Join with current context if all OK.
    var v_context = TWContext.new().init(_text_editor)
    
    # Get the captured content from the match
    var v_captures = p_match.get_name_dict()

    # If our name state informs us that we are expecting a subsequent word to be foreign,
    # then don't bother processing it as normal.
    if _context.name_state != TWContext.TW_NAME_NULL:
        _context.register_name(v_captures["foreign"])
        return self
    
    # Validation
    if !_validate_captures(v_captures):
        return null

    # If we have a mode specified, then update the context's mode
    var v_mode = v_captures["mode"]
    if v_mode != "":
        v_context.insert_mode(v_mode)
        mode_state = mode_mappings[v_mode]

    # If we have an expression, then update the context's expressions
    var v_expression = v_captures["expression"]
    if v_expression != "":
        v_context.insert_expression(v_expression)
    else:
        # Attempt to insert the concept
        v_context = v_context.insert_concept(v_captures["prefix"], _get_valid_tags(v_captures))

        if v_context == null:
            _text_editor.emit_signal("error_concept_insertion_failure", "Error: TokawajeTree::insert(): v_context.insert_concept() failed")
            return null

    # TODO: REVIEW
    if _context.context_state == TWContext.TW_OPEN:
        v_context.parent_context = _context
        if v_context.last_edited_part_of_speech == null:
            var section = _context.tags[v_context.last_edited_part_of_speech]
            if v_context.is_last_edited_modifier:
                pass
            return _context

    elif _context.context_state == TWContext.TW_CLOSE:
        _context.parent_context = v_context
        var v_placeholder = _context
        return _context

    elif _context.context_state == TWContext.TW_CLOSE_CASCADE:
        _context.parent_context = v_context
        pass
    else:
        # Save results
        _context.absorb(v_context)

    # Return
    return _context

# Removes the Node with p_text from whichever context is defined by p_parent
# p_text: The text to look for within a child node
func remove(p_text = ""):
    # Immediately exit if there are no contexts in the tree
    if _roots.empty():
        return false
    return false

#    for i_context in _roots:
#
#
#    # If we've found the right parent...
#    if parent == p_parent:
#        # then look at each child.
#        for i_context in roots:
#            # If it has text that is equivalent to the text we are looking for...
#            if child.get_text() == p_text:
#                # Erase that node from the children
#                children.erase(child)
#                # Report that we successfully erased it.
#                return true
#        # If we looked through them all and didn't find a match,
#        # then report that we failed to locate the child
#        return false
#    # If we are looking at a different tree...
#    else:
#        # then look at each child.
#        for i_context in roots:
#            # If an attempt at removing from THAT one is successful...
#            if child.remove(p_text, p_parent):
#                # then report a successful removal.
#                return true

# Recursive algorithm to acquire printable text of the entire tree's content
func get_text():
    var v_text = ""
    for i_context in _roots:
        # root contexts are those that form a complete idea
        v_text += i_context.get_text() + "\n"
    return v_text

func empty():
    return _roots.empty()

func _validate_captures(p_captures):
    # If anything shouldn't be here, notify of syntax error
    if p_captures["bad_mode"] != "":
        _text_editor.emit_signal("error_bad_mode", p_captures["mode"]+p_captures["bad_mode"])
        return false
    if p_captures["pre_out_of_bounds"] != "":
        _text_editor.emit_signal("error_pre_out_of_bounds", p_captures["pre_out_of_bounds"])
        return false
    if p_captures["post_out_of_bounds"] != "":
        _text_editor.emit_signal("error_post_out_of_bounds", p_captures["post_out_of_bounds"])
        return false
    if p_captures["prefix"] != "" && p_captures["tag0"] == "":
        _text_editor.emit_signal("error_no_prefix", p_captures)
        return false
    return true

func _get_valid_tags(p_captures):
    var v_tags = []
    for i_tag_no in range(10):
        var v_tag = p_captures["tag"+i_tag_no]
        if v_tag != "":
            v_tags.append(v_tag)
        else:
            break

func set_context(p_context):
    if _context != null:
        _context.disconnect("context_changed")
    _context = p_context
    _context.connect("context_changed", self, "on_context_changed")

func on_context_changed(p_context, p_change, p_part_of_speech, p_is_modifier):
    if p_change == TWContext.TW_OPEN:
        var v_word_tags = _context.tags[p_part_of_speech].back()

func _get_root_context():
    if _context.parent_context == null:
        return _context
    else:
        return _context.parent_context._get_root_context()


func get_name():
    return "TokawajeTree"

func debug_print():
    for i in range(_roots.size()):
        print("--- Context ", str(i), " ---")
        print("Expressions")
        print(_roots[i].expr.join(" "))
        print("Vocative Tags")
        print(_roots[i].tags.o)
        print("Subject Tags")
        print(_roots[i].tags.u)
        print("Relation Tags")
        print(_roots[i].tags.a)
        print("Object Tags")
        print(_roots[i].tags.e)
# func debug_string():
#     var v_debug_string = ""
#     for i_context in _roots:
#         #v_debug_string += i_context.debug_string(0) + "\n"
#     
#     return v_debug_string