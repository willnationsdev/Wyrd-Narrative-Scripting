extends preload("TokawajeNode.gd")

var TWParser = preload("TokawajeParser.gd")

# The first array gives a list of each individual element that falls into that category.
# Expressions and middle-punctuation do not require any more than this.
# The second array provides the list of tags that are associated with the individual element.
# Each element in the second list contains the text of the tag as well as a list of lists (similarly)
#     of any modifiers that are to be applied to the associated term.
# One can assume that modifiers for terms NOT at the end of the second list are intermediate
#     modifiers. Compare the following: the first is intermediate, the second isn't...
#     uhuma ifamo ukumofama.                --> "The foreign person in native politics."
#     uhumakumo ifamo.                      --> "The foreign politician."

# MIGHT NOT EVEN NEED THE "POS" VARIABLE?

# akosa isysa, ;e omino?                    --> "(X) ate a lot, eh buddy?"
# 0     1    2 3  4    5 
# 
# expr =[ {text="e",pos=3} ]
# u    =[[ ]]
# a    =[[ {text="kosa",mods=[[ {text="sysa",pos=1} ]]} ]]
# e    =[[ ]]
# o    =[[ {text="mino",mods=[[ ]]} ]]
# mpunc=[ {pos=2} ]
# epunc="?"

# umini ixa anisa esovoxo avela etivaza.    --> "Those within the sky are extremely divine."
# 0     1   1-0   1-1     2     3      4
# 
# expr =[  ]
# u    =[[ {text="mini",mods=[[CONTEXT( a=[[ {text="nisa",mods=[[ ]]} ]] e=[[ {text="sovo",mods=[[]]}, {text="xo",mods=[[ ]]} ]] ) ]]} ]]
# a    =[[ {text="vela",mods=[[ ]]} ]]
# e    =[[ {text="tiva",mods=[[ ]]}, {text="za",mods=[[ ]]} ]]
# o    =[[ ]]
# mpunc=[  ]

# uminaba uhumo awanabi akosa.              --> "I and the beasts want to eat."
# 0       1     2       3    4
# 
# expr =[ ]
# u    =[[ {text="mina",mods=[[ ]]}, {text="ba",mods=[[ ]]} ], [ {text="humo",mods=[[ ]]} ]]
# a    =[[ {text="wana",mods=[[ ]]}, {text="bi",mods=[[ ]]} ], [ {text="kosa",mods=[[ ]]} ]]
# e    =[[ ]]
# o    =[[ ]]
# mpunc=[ ]

# Stores each element in sequential order
var text = []

# Stores the content of each element of a given type.
# Given that each element is usually at most 4 characters,
# it's not terribly expensive to store them separately.
# A C++ implementation in GDNative would be more efficient later.
var expr = []
var tags = {
    u = [],
    a = [],
    e = [],
    o = []
}
var mpunc = []
var epunc = null

# Keeps track of the overall state of the context
var logic_state = TW_CONTEXT_LOGIC_NULL
var name_state = TW_CONTEXT_NAME_NULL
var context_state = TW_CONTEXT_CONTEXT_NULL
var mode_state = TW_CONTEXT_MODE_NULL

# For logic states, when given a word with particle starting with "b"
# Multiples can be maintained simultaneously, ergo, they are flags.
enum {
    TW_CONTEXT_LOGIC_NULL = 0,
    TW_CONTEXT_LOGIC_AND =  1,
    TW_CONTEXT_LOGIC_OR  =  2,
    TW_CONTEXT_LOGIC_XOR =  4,
    TW_CONTEXT_LOGIC_NOT =  8,
    TW_CONTEXT_LOGIC_TO  = 16
}

# For name states, when given a word with particle starting with "f"
enum {
    TW_CONTEXT_NAME_NULL,
    TW_CONTEXT_NAME_PROPER,
    TW_CONTEXT_NAME_GENERIC
}

# For context states, when given a word with particle starting with "x"
enum {
    TW_CONTEXT_CONTEXT_NULL,
    TW_CONTEXT_CONTEXT_OPEN,
    TW_CONTEXT_CONTEXT_CLOSE,
    TW_CONTEXT_CONTEXT_CLOSE_CASCADE
}

# For mode states, runnable once is_sentence == true
enum {
    TW_CONTEXT_MODE_NULL,
    TW_CONTEXT_MODE_EXECUTABLE
}

# Recursively gather text content from child contexts and return text
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
        if t is String:
            # If it is, add it to our output.
            ret += t
        elif t is TWContext:
            # Otherwise, add the inner context's text content.
            ret += t.get_text()

    return ret

# Insert a RegExMatch into the context
func insert(p_match):
    if !(p_match is RegExMatch):
        print("Error: TokawajeContext::insertMatch(): p_match is not a RegExMatch")
        return null
    
    # Get the captured content from the match
    var captures = p_match.get_name_dict()

    # If anything is out of bounds, notify of syntax error
    if captures["out_of_bounds"] != "":
        _error_out_of_bounds(captures["out_of_bounds"])
        return null

    # In all remaining cases, we will want to be appending content to our text.

    # If we have a mode, then set the mode_state
    var m = captures["mode"]
    if m != "":
        text.append(m)
        if m == ":":
            mode_state = TW_CONTEXT_MODE_EXECUTABLE

    # If we have an expression, then just add the expression to our 
    var e = captures["expression"]
    if e != "":
        text.append(e)
        expr.append(e)
        return self

    # Will need to compile the full word before adding it to the text
    var word = ""

    # Get the prefix
    var p = captures["prefix"]
    # If it's valid...
    if p != "":
        var valid_tags = []
        # Prepare insertion elements by cycling through each tag
        for tag_no in range(10):
            var tag = captures["tag"+tag_no]
            if tag != "":
                valid_tags.append(tag)

            else:
                break
        
        # Add the word to our text
        word += p                   # prefix
        for i in valid_tags:
            word += valid_text[i]
        if captures["comma"] != "":
            word += captures["comma"]
        elif captures["punctuation"] != "":
            word += captures["punctuation"]

        var elements = []
        for tag in tags:
            elements.append({
                text=tag,
                pos=text.size(),
                mods=[]
            })

            # TODO: double check this, need to check for i, etc.
        if logic_state & (TW_CONTEXT_LOGIC_AND | TW_CONTEXT_LOGIC_OR | TW_CONTEXT_LOGIC_XOR):
        # Add the tags to the appropriate member list
            data[p].append([elements])
        else:
            data[p].back().append(elements)
        if p == "u":
            if add_word:
                u.append([elements])
            else:
                u.back().append(elements)

# Return whether this context encompasses a complete sentence, i.e. 
# has a valid ending punctuation
func is_sentence():
    return epunc != null || (epunc is String && epunc.size() > 0)

func _error_out_of_bounds(p_out_of_bounds):
    print("Error: TokawajeContext-SyntaxError: more than "+str(TWParser.NUM_TAGS)+" tags detected: "+p_out_of_bounds)