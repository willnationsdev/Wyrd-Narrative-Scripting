extends Object

var expr = ""

var u = { tags=[], itags=[] }
var a = { tags=[], itags=[] }
var e = { tags=[], itags=[] }
var o = { tags=[], itags=[] }

var punc = ""

var parent
var children

func insert(previous, current, text):
    # Double check that we have a String
    if !(text is String):
        print("Warning: TokawajeTree insertion: text is not String!")
        return null
    if !(previous is String) && previous.length() != 1:
        print("Warning: TokawajeTree insertion: \"previous\" not single-letter String!")
        return null
    if !(current is String) && current.length() != 1:
        print("Warning: TokawajeTree insertion: \"current\" not single-letter String!")
        return null
    
    # parse into root variable
    if current == ";":
        expr = text
    elif current == "u":
        u.tags.append(text)
    elif current == "a":
        a.tags.append(text)
    elif current == "e":
        e.tags.append(text)
    elif current == "o":
        o.tags.append(text)
    elif current == "i":
        if previous == "u":
            u.itags.append(text)
        elif previous == "a":
            a.itags.append(text)
        elif previous == "e":
            e.itags.append(text)
        elif previous == "o":
            o.itags.append(text)
    else:
        # must be punctuation
        punc = text
    
    return self