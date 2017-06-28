extends preload("TokawajeNode")

# akosa isysa, 'e omino?                    "(it) ate a lot, eh buddy?"
# 0     1    2 3  4    5

# umini ixa anisa esovoxo avela ativaza.    "Those within the sky are extremely divine."
# 0     1   1-0   1-1     2     3      4

# uminaba uhumo awana akosa.                "I and the beasts want to eat."
# 0       1     2     3    4

var text = []

var u = []
var a = []
var e = []
var o = []

var data = {
    expr=[],
    u=[],
    a=[],
    e=[],
    o=[],
    punc=[]
}

var types = {
    TW_EXPR=[]
    TW_PUNC=[]
    TW_U=[]
    TW_A=[]
    TW_E=[]
    TW_O=[]
    TW_UI=[]
    TW_AI=[]
    TW_EI=[]
    TW_OI=[]
}

func get_text():
    var t = ""

func insert(p_text):
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