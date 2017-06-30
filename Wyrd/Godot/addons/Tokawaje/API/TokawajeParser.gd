extends Reference

const NUM_TAGS = 10

signal command_requested(text)

var mode = ":"
var prefix = "aeiou"
var root = "mnptkshlvwj"
var particle = "zxcfb"
var vowel = "aeiouyq"
var end_punc = ":;"
var end_punc_mult = "\\.\\?!"
var expression_prefix = ";"
var expr = "(?P<mode>"+mode+")?(?P<expression>"+expression_prefix+"["+vowel+"]+)|\\b(?P<prefix>["+prefix+"])?(?P<tag0>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag1>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag2>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag3>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag4>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag5>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag6>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag7>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag8>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag9>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<out_of_bounds>[^\\s"+end_punc+end_punc_mult+"]+)?(?P<punctuation>["+end_punc+"]|["+end_punc_mult+"]+)?"
var regex

var path_to_json
var TWTree = preload("TokawajeTree.gd")

func init(p_path_to_json):
    # not using pathToJson for now. Hardcoding.
    regex = RegEx.new()
    regex.compile(expr)
    print(expr)

    path_to_json = p_path_to_json

# Parses a segment of text into a TokawajeTree using RegEx
func parse(p_content, p_fail_on_syntax_error):
    # Insantiation and initialization of TokawajeTree instance
    var tree = TWTree.new()
    TWTree.init()
    # Initial RegExMatch result
    var parsed = regex.search(p_content)
    # Declaring now so as to avoid re-allocations in the loop. To store RegExMatch captures
    var captures = {}
    # For cases where the user has flagged a subsequent word/context as non-Tokawaje text
    var pass_on_syntax_check = false

    while (parsed != null):
        captures = parsed.get_names_dict()

        if p_fail_on_syntax_error && !pass_on_syntax_check:
            assert(captures["outOfBounds"] == "")
        
        if captures["prefix"] == "u":
        tree.insert(parsed, TWTree.TW_U, false)

        parsed = regex.search(p_content, parsed.get_end())

    return tree

