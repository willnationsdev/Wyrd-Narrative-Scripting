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
var mode_mappings = {
    ":"=TW_MODE_ACTION,
    "!"=TW_MODE_SHOUT,
    "@"=TW_MODE_WHISPER,
    "#"=TW_MODE_THINK
}

# _ready()
# 
# Auto Initialization
# 
func _ready():
    connect("warning_multiple_logic_states", self, "_echo_warning_multiple_logic_states")
    set_error_reporting_style(native_error_reporting, fail_on_native_errors)
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
    v_context = TWContext.new()
    
    # Get the captured content from the match
    var v_captures = p_match.get_name_dict()

    if context.name_state != TWContext.TW_NAME_NULL:
        context.register_name(v_captures["foreign"])
        return self
    
    # Validation
    if !_validate_captures(v_captures):
        return null

    # If we have a mode specified, then update the context's mode
    var v_m = v_captures["mode"]
    if v_m != "":
        v_context.insert_mode(v_m)

    # If we have an expression, then update the context's expressions
    var v_e = v_captures["expression"]
    if v_e != "":
        v_context.insert_expression(v_e)
    else:
        # Attempt to insert the concept
        v_context = v_context.insert_concept(v_captures["prefix"], _get_valid_tags(v_captures))

        if v_context == null:
            _text_editor.emit_signal("error_concept_insertion_failure", "Error: TokawajeTree::insert(): v_context.insert_concept() failed")
            return null

    if context.context_state == TWContext.TW_OPEN:
        pass

    if context.context_state == TWContext.TW_CLOSE:
        pass

    if context.context_state == TWContext.TW_CLOSE_CASCADE:
        pass
    
    # Save results
    context.absorb(v_context)

    var r_context = context



    # Return
    return r_context

# Removes the Node with p_text from whichever context is defined by p_parent
# p_text: The text to look for within a child node
func remove(p_text = ""):
    # Immediately exit if there are no children here
    if children.empty():
        return false
    # If we've found the right parent...
    if parent == p_parent:
        # then look at each child.
        for i_context in roots:
            # If it has text that is equivalent to the text we are looking for...
            if child.get_text() == p_text:
                # Erase that node from the children
                children.erase(child)
                # Report that we successfully erased it.
                return true
        # If we looked through them all and didn't find a match,
        # then report that we failed to locate the child
        return false
    # If we are looking at a different tree...
    else:
        # then look at each child.
        for i_context in roots:
            # If an attempt at removing from THAT one is successful...
            if child.remove(p_text, p_parent):
                # then report a successful removal.
                return true


# Recursive algorithm to provide the root tree
func get_root():
    if parent != null:
        return parent.get_root()
    else:
        return self

# Recursive algorithm to acquire printable text of the entire tree's content
func get_text():
    var v_t = ""
    for i_context in roots:
        # root contexts are those that form a complete idea
        v_t += i_context.get_text() + "\n"
    return v_t

func empty():
    return roots.empty()

func _validate_captures(p_captures):
    # If anything shouldn't be here, notify of syntax error
    if captures["bad_mode"] != "":
        _text_editor.emit_signal("error_bad_mode", captures["mode"]+captures["bad_mode"])
        return false
    if captures["pre_out_of_bounds"] != "":
        _text_editor.emit_signal("error_pre_out_of_bounds", captures["pre_out_of_bounds"])
        return false
    if captures["post_out_of_bounds"] != "":
        _text_editor.emit_signal("error_post_out_of_bounds", captures["post_out_of_bounds"])
        return false
    if captures["prefix"] != "" && captures["tag0"] == "":
        _text_editor.emit_signal("error_no_prefix", p_captures)
        return false
    return true

func _get_valid_tags(p_captures):
    var v_tags = []
    for i_tag_no in range(10):
        var v_tag = p_captures["tag"+i_tag_no]
        if v_tag != "":
            v_tags.append(tag)
        else:
            break

func set_context(p_context):
    if context != null:
        context.disconnect("context_changed")
    context = p_context
    context.connect("context_changed", self, "on_context_changed")

func on_context_changed(p_context, p_change, p_part_of_speech, p_is_modifier):
    if p_change == TWContext.TW_OPEN:
        var v_word_tags = context.tags[p_part_of_speech].back()
