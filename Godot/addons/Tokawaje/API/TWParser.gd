extends Reference

# variables for the acquisition of data
var SyntaxPath = "../data/syntax.json"
var SyntaxFile
var syntax = {}

# variables for defining content
var expression
var prefix
var root
var particle
var vowel
var endPunc
var endPuncMult
var midPunc
var mode

# variables for evaluation
var expr
const NUM_TAGS = 10

func initialize(path = SyntaxPath):
	expr = RegEx.new()
	SyntaxFile = File.new()
	
	# Attempt to open the syntax file
	var error = SyntaxFile.open(path, File.READ)
	if error != OK:
		print("TWParser failed to load syntax file at "  + path)
		return
	
	# Check that the syntax JSON was imported correctly.
	syntax = parse_json(SyntaxFile.get_as_text())
	if syntax.has("characterSets") && syntax.has("ruleSets"):
		print("Syntax file contained invalid content: " + path)
		return
	
	# Initialize forms
	expression = syntax["chars"]["expression"]
	prefix = syntax["chars"]["prefix"]
	root = syntax["chars"]["root"]
	particle = syntax["chars"]["particle"]
	vowel = syntax["chars"]["vowel"]
	endPuncMult = syntax["chars"]["endPunctuationMultiple"]
	endPunc = syntax["chars"]["endPunctuation"]
	midPunc = syntax["chars"]["midPunctuation"]
	mode = syntax["chars"]["mode"]
	
	# var regex = "("+mode+")?(;["+vowel+"]+|(\\b["+prefix+"])?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"])))(["+endPunc+"]|(["+endPuncMult+"])+)?"
	# var regex = "(:)?(;[aeiouyq]+|(\\b[aeiou])?(([mnpktlhsvwj][aeiouyq][mnpktlhsvw])([aeiouyq])|([zcfbx])([aeiouyq])))(([:;]|[\\.\\?!]+))?"
	var subTag = "((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?"
	var tag = "(:)?(;["+vowel+"]+|(\\b["+prefix+"])((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"])))"
	var punc = "((["+endPunc+"]|["+endPuncMult+"]+))?"
	var regex = tag
	for i in range(NUM_TAGS):
		regex += subTag
	regex += punc
	
	var lregex = "("+mode+")?(;["+vowel+"]+|(\\b["+prefix+"])((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"])))((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+root+"]["+vowel+"]["+root+"])(["+vowel+"])|(["+particle+"])(["+vowel+"]))?((["+endPunc+"]|["+endPuncMult+"]+))?"

	print(regex)
	print(lregex)

	regex = "(\\b[aeiou])([zxcfb])([aeiou])"
	regex = "((ab){1}(solve))"
	regex = "("+mode+")?(;["+vowel+"]+)+"

	return expr.compile(regex)

func parse(content):
	return expr.search(content)
#
#(:)?(;[aeiouyq]+|(\b[aeiou])?(([mnpktlhsvwj][aeiouyq][mnpktlhsvw])([aeiouyq])|([zcfbx])([aeiouyq])))(([:;]|[\.\?!]+))?
#;aaa! uhumasovi akosa elytaze.