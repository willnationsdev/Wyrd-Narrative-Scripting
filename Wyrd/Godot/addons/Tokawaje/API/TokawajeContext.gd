# Author: Will Nations
# Date: 07/02/2017
# 
# TokawajeContext represents a grammar context in Tokawaje. It keeps track of the
# text content of a context and the syntactic relationships between words.
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

signal context_changed(p_context, p_change, p_part_of_speech)

# Overview of Parsing Structure
#
# expressions and m(iddle)punc(tuation) are arrays of strings.
#
# e(nd)punc(tuation) is a string.
# 
# "tags" is a dictionary. It has one entry for each non-modifier part of speech.
#
# In each case, the part of speech's prefix is used as a key to an array of
#     dictionaries where each dictionary represents the modifiers for a single word 
#     in that part of speech. Multiple dictionaries in the array means there is
#     some sort of compound subject/verb/object/etc. going on.
#
# Ex. u=[ {word}, {word}, {word} ]
#
# Each of the dictionaries in the list are structured with each tag being a key
#     and its value being an array of dictionaries for the modifiers on that individual
#     tag. That array of dictionaries is then identically structured, allowing for recursive
#     algorithms.
#
# Ex. u=[ {word0tag0=[ {word0tag0mod0=[]} ], word0tag1=[]}, {word1tag0=[]} ]
# 
# The splitting of words to allow for particular modifiers has special meaning in Tokawaje
#     grammar. Compare the following (notice these are both just subjects):
#     uhuma ifamo ukumofama.                --> "The foreign person in native politics."
#     uhumakumofama ifamo.                  --> "The native politician who is currently foreign."

# akosa isysa, ;e omino?                    --> "(X) ate a lot, eh buddy?"
# 0     1    2 3  4    5 
# 
# expr =[ "e" ]
# u    =[]
# a    =[ {kosa=[ {sysa=[]} ]} ]
# e    =[]
# o    =[ {mino=[]} ]
# mpunc=[ "," ]
# epunc="?"

# umini ixa anisa esovoxo avela etivaza.    --> "Those within the sky are extremely divine."
# 0     1   1-0   1-1     2     3      4
# 
# expr =[]
# u    =[ {mini=[ {xa=[], CONTEXT( a=[ {nisa=[]} ], e=[ {sovo=[]}, {xo=[]} ] )=[]} ]} ]
# a    =[ {vela=[]} ]
# e    =[ {tiva=[]}, {za=[]} ]
# o    =[]
# mpunc=[]
# epunc="."

# uminaba uhumo awanabi akosa.              --> "I and the beasts want to eat."
# 0       1     2       3    4
# 
# expr =[]
# u    =[ {mina=[], ba=[]}, {humo=[]} ]
# a    =[ {wana=[], bi=[]}, {kosa=[]} ]
# e    =[]
# o    =[]
# mpunc=[]
# epunc="."

# A reference to the text editor that will respond to any and all
# parsing errors and warnings.
var _text_editor = null

# Stores each element in sequential order
var text = []

# The list of expressions that are present in the context, in the order in which they appear
var expr = []

# Each entry contains an array of tag-mod dictionaries for each word. Example:
# [ {tag=[mods], another_tag=[its_mods]}, {different_word_tag=[mods]} ]
var tags = {
    u = [],
    a = [],
    e = [],
    o = []
}

# The list of middle punctuation (usually just commas)
var mpunc = []

# The ending punctuation for the context. Ending punctuation closes a context.
var epunc = null

# For name states, when given a word with particle starting with "f"
enum {
    TW_NAME_NULL,
    TW_NAME_SPECIFIC,
    TW_NAME_GENERIC
}

var name_mappings = {
    a=TW_NAME_SPECIFIC,
    o=TW_NAME_GENERIC
}

# Tracks whether a custom name (and what kind) is expected in the next input.
var name_state = TW_NAME_NULL

# The list of names this context has encountered, divided by specificity.
var custom_names = {
    TW_NAME_SPECIFIC=[],
    TW_NAME_GENERIC=[]
}

# For context states, when given a word with particle starting with "x"
enum {
    TW_NULL,
    TW_OPEN,
    TW_CLOSE,
    TW_CLOSE_CASCADE
}

# Tracks whether the next content is to be added to a previous or new context.
var context_state = TW_NULL

var context_mappings = {
    a=TW_OPEN,
    o=TW_CLOSE,
    u=TW_CLOSE_CASCADE
}

# For logic states, when given a particle-word starting with "b"
enum {
    TW_LOGIC_NULL,
    TW_LOGIC_AND,
    TW_LOGIC_OR,
    TW_LOGIC_XOR,
    TW_LOGIC_TO
}

# For fast assignment from "b" particles
var logic_particles = {
    a=TW_LOGIC_AND,
    o=TW_LOGIC_OR,
    u=TW_LOGIC_XOR,
    i=TW_LOGIC_TO
}

# Tracks the logical state of each POS for the current TokawajeContext
var logic_states = {
    u = TW_LOGIC_NULL,
    a = TW_LOGIC_NULL,
    e = TW_LOGIC_NULL,
    o = TW_LOGIC_NULL,
    i = TW_LOGIC_NULL
}

# For having reversible NOT's applied to the logic_state
var logic_not = false

func init(p_text_editor):
    _text_editor = p_text_editor

# Recursively gather text content from child contexts and return text
# Would just use .join(), but some array contents could be TWContext instances.
func get_text():
    var start = true
    var ret = ""

    # for each element of this context
    for t in text:

        # Append spaces as necessary for readability.
        if !start:
            ret += " "
        start = false

        # Check if it's a string
        if typeof(t) == TYPE_STRING:
            # If it is, add it to our output.
            ret += t
        elif t is TWContext:
            # Otherwise, add the inner context's text content.
            ret += t.get_text()

    return ret

func insert_mode(p_mode):
    text.append(p_mode)
    mode_state = mode_mappings[p_mode]
    return self

func insert_expression(p_expression):
    text.append(p_expression)
    expr.append(p_expression)
    return self

# insert_concept()
# 
# Insert a concept's tags into the context's appropriate part of speech
# 
# p_prefix: The part of speech to associate the concept tags with
# p_tags:   
func insert_concept(p_prefix, p_tags):

    # Officially add the word to our text
    text.append( p_prefix + p_tags.join(" ") )

    # Preserve the original logic state in case of changes during this iteration
    var original_logic_states = {}
    for logic in logic_states:
        original_logic_states[logic] = logic_states[logic]

    # Evaluate particles in the tags to change context state
    for tag in p_tags:
        # get the first character
        var start = tag.substr(0,1)
        # Grab the particle's particular position on the spectrum.
        var end = tag.substr(1,1)

        # Check for any state-change tags just beforehand so that we can save it for the next iteration
        if start == "b":
            handle_particle_logic(p_prefix, end)
        elif start == "x":
            handle_particle_context(p_prefix, end)
        elif start == "f":
            handle_particle_name(p_prefix, end)

    # Create elements for insertion into our tags
    var elements = _build_tags()

    # If one of the logic states that relates different words to each other is used...
    # Add these tags separately and then reset the logic state
    if original_logic_state != TW_CONTEXT_LOGIC_NULL:
        _add_tags(p,elements,true)
        # Clear the logic state
        logic_state = TW_CONTEXT_LOGIC_NULL
    else:
        _add_tags(p,elements,false)

# is_sentence()
# 
# return: whether this context encompasses a complete sentence, i.e. 
#         has a valid ending punctuation
func is_sentence():
    return typeof(epunc) == TYPE_STRING && epunc.size() > 0

# _add_tags()
# 
# Adds a list of tags to the corresponding tag-word dictionary
# 
# p_prefix:      Which section to put the tags under: u/a/e/o/i
# p_tags:        The tags that need to be added
# p_is_new_word: Whether we are creating a new word (true) or adding these tags to the latest word (false)
func _add_tags(p_prefix, p_tags, p_is_new_word = false):
    # Validate input
    if typeof(p_prefix) != TYPE_STRING && typeof(p_tags) != TYPE_ARRAY && typeof(p_is_new_word) != TYPE_BOOL:
        return null
    # If one of the logic states that relates different words to each other is used...
    # Add these tags separately.
    if p_is_new_word:
        # Create a new mapping of these tags to an empty list of modifiers.
        var dict = {}
        for tag in p_tags:
            dict[tag] = []
        # Add this mapping as another word-dictionary under this part of speech.
        tags[p_prefix].append(dict)
    else:
        # Add each tag, mapped to an empty list of modifiers,
        # to the latest word's dictionary in this part of speech.
        for tag in p_tags:
            tags[p_prefix].back()[tag] = []

func _build_tags(p_tags):
    # Create elements for insertion into our tags
    var v_tags = []
    for tag in p_tags:
        v_tags.append({
            text=tag,
            #pos=text.size(),
            mods=[]
        })
    return dumps

# Add another context's content to this one, except for mode_state
func absorb(p_context):
    assert(p_context is TWContext)

    for t in p_context.text:
        text.append(t)

    for e in p_context.expr:
        expr.append(e)

    for td in p_context.tags:
        tags[td] += p_context.tags[td]

    for p in p_context.mpunc:
        mpunc.append(p)
    
    if epunc == "":
        epunc = p_context.epunc
    
func _absorb_modifiers(p_keep_array, p_take_array):
    for take_word_dict in p_take_array:
        p_keep_array.append(take_word_dict)

func handle_particle_logic(p_prefix, p_suffix):
    # "NOT" is the only logic state that can exist simultaneously with the others
    # Multiple NOTs will simply reverse each other
    if end == "e":
        logic_not = !logic_not
    # If we are using a different logic particle...
    # and if a logic state has already been assigned to the current word...
    elif logic_states[p] != TW_CONTEXT_LOGIC_NULL:
        # notify that someone attempted to assign logic state logic_particles[end] to part of speech (prefix) p
        _text_editor.emit_signal("warning_multiple_logic_states", p_prefix, logic_particles[p_suffix])
    else:
        # we are encountering the first non-NOT logic particle for this word.
        # Set the logic_state using our mapping of particle suffix to logic value
        logic_states[p] = logic_particles[end]

# handle_particle_context()
# 
# Leaving p_prefix in here in case knowing which part of speech the tag is associated with
# ever becomes important
func handle_particle_context(p_prefix, p_suffix):
    context_state = context_mappings[p_suffix]
    emit_signal("context_changed", self, context_state, p_prefix)

# handle_particle_name()
# 
# Leaving p_prefix in here in case knowing which part of speech the tag is associated with
# ever becomes important
func handle_particle_name(p_prefix, p_suffix):
    name_state = name_mappings[p_suffix]

func register_name(p_name):
    # If we fail because TW_NAME_NULL is not a key in custom_names, then it means we are calling
    # register_name without having encountered an "f" that sets the name_state to a valid key.
    # Or that, for some reason, encountering an "f" ISN'T properly setting the name_state.
    custom_names[name_state].append(p_name)
    if name_state == TW_NAME_GENERIC:
        _text_editor.emit_signal("register_generic_name", p_name, self)
    elif name_state == TW_NAME_SPECIFIC:
        _text_editor.emit_signal("register_specific_name", p_name, self)
    return self