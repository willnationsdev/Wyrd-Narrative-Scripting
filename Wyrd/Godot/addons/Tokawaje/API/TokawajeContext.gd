extends preload("TokawajeNode")

const TW_INSERT_STRAT_TEXT      = 0
const TW_INSERT_STRAT_POSITION  = 1

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

# akosa isysa, 'e omino?                    --> "(X) ate a lot, eh buddy?"
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

# Stores the positions of each element of a given type.
var expr = []
var u = []
var a = []
var e = []
var o = []
var mpunc = []
var epunc = null

func get_text():
    var t = ""

func insert(p_text, p_strategy = ""):
    # Retrieve the index at which this was added (if doesn't return index, then get size()-1)
    var v_pos = text.append(p_text)
    # Retrieve the first character
    var v_char = p_text.substr(0,1)
    if v_char == "u":
        _insertIntoContext(v_pos, u)

func _insertIntoContext(p_pos, p_syntax_group):
    p_syntax_group.append({
        pos=v_pos
    })

func is_sentence():
