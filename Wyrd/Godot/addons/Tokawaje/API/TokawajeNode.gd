extends Object

enum {
    TW_TREE,
    TW_EXPR,
    TW_PUNC,
    TW_U,
    TW_A,
    TW_E,
    TW_O,
    TW_UI,
    TW_AI,
    TW_EI,
    TW_OI
}

var parent = null
var children = []
var type = TW_TREE
var text = ""
