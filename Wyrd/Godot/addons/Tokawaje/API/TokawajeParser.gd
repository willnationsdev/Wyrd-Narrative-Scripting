# Author: Will Nations
# Date: 07/02/2017
# 
# TokawajeParser compiles and processes RegEx parsing on a given text segment.
# It hides the existence RegEx objects from the TokawajeTree so that it can 
# deal strictly with individual RegExMatch objects.
#
# Naming Convention:
# Classes / Script-type variables: UpperCamelCase
# Else: snake_case
# [name] = public member variable or method, Script variables
# _[name] = private member variable or method
# i_[name] = iteration variable
# p_[name] = parameter variable
# v_[name] = local variable
# r_[name] = local variable to return

extends Reference

var TWTree = preload("TokawajeTree.gd")

var mode = ":"
var prefix = "aeiou"
var root = "mnptkshlvwj"
var particle = "zxcfb"
var vowel = "aeiouyq"
var end_punc = ":;"
var end_punc_mult = "\\.\\?!"
var expression_prefix = ";"
var comma = ","
var _expr = ""
var _regex = null

var path_to_json

# A reference to the text editor that will respond to any and all
# parsing errors and warnings.
var _text_editor

func init(p_path_to_json, p_text_editor):
    # not using path_to_json for now. Hardcoding.
    _regex = RegEx.new()
    path_to_json = p_path_to_json
    _text_editor = p_text_editor
    print("Regex Compile: \n" + str(compile_regex()))
    print("Regex Expression: \n" + _expr)

func compile_regex():
    _expr = "(?P<mode>^["+mode+"])?(?P<bad_mode>["+mode+"]+)?(?P<expression>"+expression_prefix+"["+vowel+"]+)|\\b(?P<prefix>["+prefix+"])?(?P<tag0>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag1>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag2>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag3>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag4>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag5>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag6>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag7>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag8>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<tag9>(?:["+root+"]["+vowel+"]["+root+"]|["+particle+"])["+vowel+"])?(?P<pre_out_of_bounds>[^\\s"+comma+end_punc+end_punc_mult+"]+)?(?:(?P<comma>,)|(?P<punctuation>["+end_punc+"]|["+end_punc_mult+"]+))?(?P<post_out_of_bounds>[^\\s]+)?|(?P<foreign>(?:[A-Z][a-z]+)+)?"
    return _regex.compile(_expr)

# Parses a segment of text into a TokawajeTree using RegEx
func parse(p_content):

    # Insantiation and initialization of TokawajeTree instance
    var r_tree = TWTree.new().init(_text_editor)

    # Initial RegExMatch result
    var v_parsed = _regex.search(p_content)

    # Pass each RegExMatch to the tree in turn, until there's nothing left.
    while v_parsed != null:
        r_tree.insert(v_parsed)
        v_parsed = _regex.search(p_content, v_parsed.get_end())

    return r_tree

