extends preload("TokawajeNode")

func init(p_parent):
    parent = p_parent

func insert(p_type = TW_TREE, p_text = "", p_is_custom = false):
    # Double check that we have a String
    if !(p_text is String):
        print("Warning: TokawajeTree::insert(): p_text is not String! Returning null!")
        return null
    if !(p_text == ""):
        print("Warning: TokawajeTree::insert(): p_text is empty!")
    if !(p_is_custom is bool):
        print("Warning: TokawajeNode::insert(): p_is_custom is not bool! Returning null!")
        return null
    
    var node = preload("TokawajeNode.gd").new()
    node.type = p_type
    node.text = p_text
    node.parent = self

    if p_type == TW_EXPR || p_type == TW_PUNC:
        children.append(node)

    return self

# Recursive algorithm to provide the root tree
func get_root():
    if parent != null:
        return parent.get_root()
    else:
        return self

# Recursive algorithm to acquire printable text of the entire tree's content
func get_text():
    # non-leaf tree
    if children.size != 0:
        var text
        for child in children:
            text += child.get_text()
        return text

    # leaf tree
    else:
        var word = current
        if type == TW_TREE:
            return ""
        if type == TW_EXPR:
            return expr
        if type == TW_PUNC:
            return punc
        if type == TW_U:
            for tag in u.tags:
                word += tag
            return 
        if type == TW_A:
            return 
        if type == TW_E:
            return 
        if type == TW_O:
            return 
        if type == TW_UI:
            return 
        if type == TW_AI:
            return 
        if type == TW_EI:
            return 
        if type == TW_OI:
            return 
func 