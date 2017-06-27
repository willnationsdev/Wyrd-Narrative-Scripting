extends Reference

var mode = ":"
var prefix = "aeiou"
var root = "mnptkshlvwj"
var particle = "zxcfb"
var vowel = "aeiouyq"
var endPunc = ":;"
var endPuncMult = "\\.\\?!"
var expressionPrefix = ";"
var expr = "(?P<mode>"+mode+")?(?P<expression>"+expressionPrefix+"["+vowel+"]+)|\\b(?P<prefix>["+prefix+"])?(?P<tag0>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag1>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag2>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag3>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag4>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag5>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag6>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag7>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag8>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag9>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<outOfBounds>[^\\s"+endPunc+endPuncMult+"]+)?(?P<punctuation>["+endPunc+"]|["+endPuncMult+"]+)?"
var regex

var path_to_json
var TWTree = preload("TokawajeTree.gd")

func init(p_path_to_json):
    # not using pathToJson for now. Hardcoding.
    regex = RegEx.new()
    regex.compile(expr)
    print(expr)

    path_to_json = p_path_to_json

# Not to be used by TokawajeTree
func parse(p_content):

    var tree = TWTree.new()
    TWTree.init(null)
    var cur = "u"
    var prev = "u"
    
    for line in pContent.split("\n"):
        for word in lines.split(" "):
            tree.insert(prev, cur, word)

    return tree

