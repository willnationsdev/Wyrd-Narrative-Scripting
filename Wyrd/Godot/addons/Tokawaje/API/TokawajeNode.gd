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

func init(p_parent = null, p_type = TW_TREE, p_text = "", p_children = []):
    parent = p_parent
    type = p_type
    text = p_text
    children = p_children

