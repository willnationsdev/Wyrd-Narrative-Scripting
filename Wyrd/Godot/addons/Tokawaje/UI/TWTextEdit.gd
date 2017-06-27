extends TextEdit

var TWParser = preload("res://addons/Tokawaje/API/TokawajeParser.gd")
var parser

func _ready():
	parser = TWParser.new()
	parser.initialize("")
	connect("text_changed", self, "on_text_changed")

func on_text_changed():
	var content = get_text()
	var obj = parser.parse(content)
	if obj != null:
		print(obj.get_name_dict())