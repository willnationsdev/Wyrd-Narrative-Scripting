# Author: Will Nations
# Date: 07/02/2017
# 
# TokawajeTextEdit is a TextEdit node that is designed to perform syntax highlighting
# and error parsing  
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

extends TextEdit

# Error signals
signal error_pre_out_of_bounds(p_pre_out_of_bounds)
signal error_post_out_of_bounds(p_post_out_of_bounds)
signal error_multiple_modes(p_modes)
signal error_no_prefix(p_captures)
signal error_concept_insertion_failure(p_message)

# Warning signals
signal warning_multiple_logic_states(p_prefix, p_suffix)

# Notification signals
signal register_specific_name(p_specific_name, p_context)
signal register_generic_name(p_generic_name, p_context)
signal tokawaje_action(p_tree)
signal tokawaje_say(p_tree)
signal tokawaje_shout(p_tree)
signal tokawaje_whisper(p_tree)
signal tokawaje_think(p_tree)

# Whether to connect internal methods to error signals
export var native_error_reporting = true
# Whether to assert fail during an error with internal methods
export var fail_on_native_errors= true

var TWParser = preload("res://addons/Tokawaje/API/TokawajeParser.gd")
var _parser = null
var json_syntax_path = ""
var _timer = null

# The frequency of syntax highlighting updates
export var refresh_rate = 1.0

func _ready():
	initParser()
	initTimer()
	connect("text_changed", self, "on_text_changed")
	set_error_reporting_style(native_error_reporting, fail_on_native_errors)
	connect("register_specific_name", self, "on_register_specific_name")
	connect("register_generic_name", self, "on_register_generic_name")

func initParser():
	_parser = TWParser.new()
	_parser.init(json_syntax_path, self)

func initTimer():
	_timer = Timer.new()
	_timer.set_timer_process_mode(Timer.TIMER_PROCESS_FIXED)
	_timer.set_autostart(false)
	_timer.set_wait_time(refresh_rate)
	self.add_child(_timer)
	#connect("timeout", _timer, "on_timer_timeout")

func _gui_input(p_event):
    if p_event.is_action_pressed("ui_submit"):
        print("Starting Evaluation")
        var v_parsed = parse_text()
        if v_parsed == null:
            print("failed parse")
            return
        print(v_parsed.get_name())
        v_parsed.debug_print()
        #print(v_parsed.get_text())
        
        #_timer.stop()
        #highlight_text(parse_text())
        set_text("")
        cursor_set_line(0)
        cursor_set_column(0)

func on_text_changed():
	# Reset the timer whenever the user edits the text.
	_timer.start()

func on_timer_timeout():
	var v_parsed = parse_text()
	if v_parsed != null && v_parsed is RegExMatch:
		_print_regex_captures(v_parsed)
	highlight_text(v_parsed)

func _print_regex_captures(p_match):
	print(p_match.get_names_dict())

func parse_text():
	return _parser.parse(get_text()) if get_text() != "" else null

# Return true/false whether we were successfully able to do syntax highlighting
func highlight_text(p_tree):
	if p_tree == null:
		return false

func _highlight_context(p_context):
	pass

# Notifies the user of an error regarding a disallowed character
func _error_pre_out_of_bounds(p_pre_out_of_bounds):
    print("Error: TokawajeContext-SyntaxError: more than "+str(TWParser.NUM_TAGS)+" tags detected: "+p_pre_out_of_bounds)
    if fail_on_native_errors:
        assert(false)

# Notifies the user of an error regarding a disallowed character after punctuation
func _error_post_out_of_bounds(p_post_out_of_bounds):
    print("Error: TokawajeContext-SyntaxError: whitespace not present after punctuation: "+p_post_out_of_bounds)
    if fail_on_native_errors:
        assert(false)

# Notifies the user of an error regarding an invalid mode character
func _error_bad_mode(p_bad_mode):
    print("Error: TokawajeContext-SyntaxError: MODE character encountered after sentence start")
    if fail_on_native_errors:
        assert(false)

# Notifies the user of an error regarding a lack of a prefix
func _error_no_prefix():
    print("Error: TokawajeContext-SyntaxError: prefix missing from word! Please add an a/e/i/o/u before any tags.")
    if fail_on_native_errors:
        assert(false)

func _error_multiple_logic_states(p_prefix, p_new_logic_state):
    var v_logic_dict = {
        a="AND",
        o="OR",
        u="XOR",
        i="TO"
    }
    print("Error: TokawajeContext-SyntaxError: attempted to assign logic state "+v_logic_dict[p_prefix]+" to syntax category \""+p_prefix+"\", but it already has one!")
    if fail_on_native_errors:
        assert(false)

func _error_concept_insertion_failure(p_message):
    print(p_message)
    if fail_on_native_errors:
        assert(false)

func _echo_warning_multiple_logic_states(p_prefix, p_suffix):
    emit_signal("warning_multiple_logic_states", p_prefix, p_suffix)

func set_error_reporting_style(is_natively_reporting = false, is_failing_on_errors = false):
	native_error_reporting = is_natively_reporting
	if native_error_reporting == true:
		connect("error_pre_out_of_bounds",      self, "_error_pre_out_of_bounds")
		connect("error_post_out_of_bounds",     self, "_error_post_out_of_bounds")
		connect("error_multiple_modes",         self, "_error_multiple_modes")
		connect("error_no_prefix",              self, "_error_no_prefix")
		connect("error_concept_insertion_failure", self, "_error_concept_insertion_failure")
	else:
		disconnect("error_pre_out_of_bounds")
		disconnect("error_post_out_of_bounds")
		disconnect("error_multiple_modes")
		disconnect("error_no_prefix")
		disconnect("error_concept_insertion_failure")

func is_natively_reporting():
	return native_error_reporting

func on_register_specific_name(p_name, p_context, p_part_of_speech):
	print("Specific name '"+p_name+"' registered for part of speech '"+p_part_of_speech+"'")

func on_register_generic_name(p_name, p_context, p_part_of_speech):
	print("Generic name '"+p_name+"' registered for part of speech '"+p_part_of_speech+"'")
