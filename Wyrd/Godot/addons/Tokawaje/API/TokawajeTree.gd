# TokawajeTree is assumed to be a product of the TokawajeParser class in that 
# it does not attempt to parse the content provided to it.

# Derives from TokawajeNode
extends preload("TokawajeNode")

# Initializes the TokawajeTree.
# p_parent: The parent TokawajeTree that owns this one. The root has parent == null
func init(p_parent = null):
    parent = p_parent

# Inserts a new node into the TokawajeTree.
# p_text: The text containing the content of the node
# p_type: The syntactic type of the node content
# p_is_custom: 
func insert(p_text = "", p_type = TW_TREE, p_is_custom = false):
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

# Removes the Node with p_text from whichever context is defined by p_parent
# p_text: The text to look for within a child node
func remove(p_text = ""):
    # Immediately exit if there are no children here
    if children.empty():
        return false
    # If we've found the right parent...
    if parent == p_parent:
        # then look at each child.
        for child in children:
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
        for child in children:
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
    var t = ""
    for child in children:
        t += child.get_text()
    return t

func empty():
    return children.empty()

func delete():
    # queue_free every child throughout this tree
    pass