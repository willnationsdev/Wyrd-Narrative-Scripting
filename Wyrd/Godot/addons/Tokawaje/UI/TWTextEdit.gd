extends TextEdit

var TWParser = preload("res://addons/Tokawaje/API/TokawajeParser.gd")
var parser
var json_syntax_path = ""

func _ready():
	parser = TWParser.new()
	parser.init(json_syntax_path)
	connect("text_changed", self, "on_text_changed")

func on_text_changed():
	var content = get_text()
	var obj = parser.parse(content)
	if obj != null:
		print(obj.get_name_dict())