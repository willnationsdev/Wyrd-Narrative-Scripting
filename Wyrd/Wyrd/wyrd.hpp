/*
 * Author: Will Nations
 * Date Created: 03/12/2017
 */

#ifndef WYRD_HPP
#define WYRD_HPP

#include <string>   //std::string
#include <fstream>  //std::ifstream
#include <vector>   //std::vector
#include <unordered_map> //std::unordered_map
#include "json.hpp" //json

using nlohmann::basic_json;
using nlohmann::json;

namespace wyrd {

/*
enum class PartOfSpeech {
    LEFT_ENTITY = 'u',
    RELATION = 'a',
    RIGHT_ENTITY = 'e',
    MODIFIER = 'i',
    VOCATIVE = 'o'
};

template <typename T>
class IContentNode {
public:
    std::string getContent() { return T.getContent(); }
    void setContent(const std::string& s) { T.setContent(s); }
    void setContent(std::string&& s) { T.setContent(s); }
    std::vector<IContentNode*> getChildren() { return T.getChildren(); }
};

class WyrdNode : public IContentNode<WyrdNode> {
public:
    WyrdNode(const std::string& content = "", WyrdNode* parent = nullptr)
        : _content(content), _parent(parent) {}
    std::string getContent() { return _content; }
    void setContent(const std::string& s) { _content = s; }
    void setContent(std::string&& s) { _content = s; }
    std::vector<WyrdNode*> getChildren() { return _children; }
    const WyrdNode* getParent() { return _parent; }
private:
    std::string _content;
    std::vector<WyrdNode*> _children;
    const WyrdNode* _parent;
};

class WyrdTree {
public:
    WyrdNode* getTop() { return _top; }

private:
    WyrdNode* _top;
};*/

typedef std::string::const_iterator CIter;
typedef std::vector<std::string> Tags;

struct JsonUtility {

    /**
     * findWhere
     *
     * Searches through an array-based JSON object "data" contains an
     * object with key "key" equal to value "val".
     *
     * @param data The JSON object to search through. Must be an array of
     *             objects.
     * @param key The string key name to check against in each object.
     * @param val The value to compare against each object's key-value.
     * @param The json object in the array that contains the key with the
     *        given value.
     */
    template <typename T>
    static json findWhere(json data, std::string key, T& val) {
        if (!data.is_array()) {
            return json({});
        }
        for (auto item : data) {
            T v = item[key];
            if (v == val) {
                return item;
            }
        }
        return json({});
    }

};

struct WyrdSyntax {

    typedef std::vector<std::string> Path;
    typedef std::string Characters;
    typedef std::vector<Characters> CharacterSets;
    typedef unsigned char condition_t;

    /**
     * ParseResponse
     *
     * A linked-list of results associated with a Rule or RuleRef (RuleOrRef)
     * Rules by definition should return a list with one item.
     * RuleRefs should return a list with one item for each reference. In this
     * way, each reference individually reports its success rate / progress
     * while a set of nested references as a whole can be identified at the
     * top level by whether they have an empty _next or not.
     *
     * Note: If there ever comes a time when ParseResponses actually need more
     *       distinction beyond ref- and non-ref-generated, then we can shift
     *       to a type based method. For now, I'd prefer to avoid dynamic
     *       casting and/or virtual pointers.
     */
    struct ParseResponse {
        /**
         * Custom Default Constructor
         *
         * Initializes a ParseResponse.
         *
         * @param deltaPosition The position this response should assume to be.
         * @param success The initial success state of this response.
         * @param isFromRef Whether this response is built from a reference.
         * @return An initialized ParseResponse object.
         */
        ParseResponse(unsigned int deltaPosition = 0,
            bool isSuccessful = false, bool isFromRef = false) noexcept
            : deltaPosition(deltaPosition), isSuccessful(isSuccessful),
            isFromRef(isFromRef) {}

        // The amount the parsing process advanced during rule confirmation.
        unsigned int deltaPosition;
        // Whether the rule was confirmed successfully.
        bool isSuccessful : 1;
        // Whether the response was generated from a rule reference.
        bool isFromRef : 1;
    };

    /*template <typename T>
    class Condition {
    public:
        ParseResponse advance(CIter start, CIter end) {
            return T.advance(start, end);
        }

        /**
         * itrAdvanceChar
         *
         * Advances as far into the (start, end) string as it can, checking
         * that characters are contained within characterList at each step.
         * It will continue until it encounters a character NOT in the list
         * or until it has encountered "occurrences" number of characters.
         *
         * @param characterList The list of characters to check against.
         * @param start The starting string iterator.
         * @param end The ending string iterator.
         * @param occurrences The number of characters to read before 
         *                    stopping.
         * @return The number of characters that were read.
         */
        /*int itrAdvanceChar(const std::string& characterList, CIter start, 
            const CIter& end, uint8_t occurrences = -1) {

            CIter current = start;
            int result = 0;
            while (current != end && occurrences != 0 &&
                characterList.find(*current++) != std::string::npos) {
                result++;
                occurrences--;
            }
            return result;
        }

        int itrAdvanceRule(const std::string& ruleName, CIter start,
            const CIter& end, uint8_t occurrences = -1) {

            CIter current = start;
            int result = 0;
        }
    };*/

    class Rule {
    public:

        /**
         * Custom Constructor
         *
         * Initializes variables that the Rule will need.
         *
         * @param characterSet The string of characters this Rule will
         *                     expect to encounter.
         * @param condition The conditions in which this Rule will expect
         *                  to encounter the characters.
         */
        Rule(std::string characters = "", condition_t condition = '1')
            noexcept
            : _characters(characters), _condition(condition) {}

        /**
         * function call operator()
         *
         * Checks whether the string starting at start has characters in
         * _characterSet in the sequence described by _condition.
         *
         * @param start The iterator marking our start position
         * @param end The iterator marking the end of the data.
         * @return A RuleResponse containing information regarding the
         *         success/failure and new position for future reading.
         */
        std::vector<ParseResponse>&& operator()(CIter start, CIter end) {

            //If we have nothing to parse, then there's no reason to say
            //we AREN'T looking at this language's syntax. For all we know,
            //it could be.
            if (start == end) {
                return { ParseResponse(0,true) };
            }

            //If we were unable to locate the valid character list,
            //then don't even bother continuing.
            if (!_characters.length()) {
                assert(0 &&
                    "The character sets were not found in the JSON file.");
            }

            //The amount we have advanced in the current parse.
            unsigned int delta = 0;

            //The full response of our parse that we will return at the end.
            ParseResponse result;

            //Evaluate the content differently based on what
            //condition has been set for the rule.
            switch (_condition) {
            case '?':
                //Attempt to advance once.
                delta = advance(_characters, start+delta, end, 1);
                break;
            case '*':
                //Attempt to advance as much as possible.
                delta = advance(_characters, start+delta, end);
                break;
            case '+':
                //Attempt to advance as much as possible, but check
                //to make sure that we at least moved once.
                delta = advance(_characters, start+delta, end);
                if (delta <= 0) {
                    return { ParseResponse(0, false) };
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                //Attempt to advance exactly "condition" times.
                delta =
                    advance(_characters, start+delta, end, _condition);

                //If advancement was not precise, then this string does
                //not conform to this rule.
                if (delta != _condition) {
                    return { ParseResponse(0, false) };
                }
                break;
            case '!':
                //If we DON'T want to find it, but we DO, report failure.
                if (_characters.find(*(start+delta)) !=
                    std::string::npos) {

                    return { ParseResponse(0, false) };
                }
            default:
                return { ParseResponse(0, false) };
            }
            result = ParseResponse(delta, true);

            //Notify the calling context of where we stopped, i.e. the
            //start of the NEXT segment.
            return { result };
        }

    private:
        /**
         * advance
         *
         * Advances as far into the (start, end) string as it can, checking
         * that characters are contained within characterList at each step.
         * It will continue until it encounters a character NOT in the list
         * or until it has encountered "occurrences" number of characters.
         *
         * @param characterList The list of characters to check against.
         * @param start The starting string iterator.
         * @param end The ending string iterator.
         * @param occurrences The number of characters to read before
         *                    stopping.
         * @return The number of characters that were read.
         */
        int advance(const std::string& characterList, CIter start,
            const CIter& end, uint8_t occurrences = -1) {

            CIter current = start;
            int result = 0;
            while (current != end && occurrences != 0 &&
                characterList.find(*current++) != std::string::npos) {
                result++;
                occurrences--;
            }
            return result;
        }

        std::string _characters;
        condition_t _condition;
    };

    class RuleSet;
    typedef std::unordered_map<std::string, RuleSet> RuleSetMap;

    /**
     * RuleRef
     *
     * A class that allows one to reference an existing rule for a RuleSet.
     */
    class RuleRef {
    public:
        RuleRef(std::string ruleName = "", condition_t condition = 0,
            const RuleSetMap* rules = nullptr)
            : _ruleName(ruleName), _condition(condition), _rules(rules) {}

        /**
         * call operator
         *
         * Searches through the RuleSetMap for the RuleSet with its
         * _ruleName and calls the call operator on each rule in that
         * RuleSet. Must also take into account the "type" of the RuleSet
         * so that logic is applied to the relationships between the rules.
         */
        std::vector<ParseResponse>&& operator()(CIter start, CIter end) {

            std::vector<ParseResponse> result;
            RuleSet currentRuleSet = _rules->at(_ruleName);
            for (RuleOrRef ror : currentRuleSet.getRules()) {
                std::vector<ParseResponse> v = ror(start,end);
                result.insert(result.end(), v.begin(), v.end());
            }

            //Return the end state after checking all of the rules.
            return std::move(result);
        }

    private:
        const RuleSetMap* _rules;
        std::string _ruleName;
        condition_t _condition;
    };

    class RuleOrRef {
    public:
        RuleOrRef() : _rule() {

        }
        RuleOrRef(const Rule& rule) noexcept : _isRef(false), _rule(rule) {}
        RuleOrRef(const RuleRef& ref) noexcept : _isRef(true), _ref(ref) {}
        RuleOrRef(const RuleOrRef& ror) noexcept {
            if (ror.getIsRef()) {
                _isRef = true;
                _ref = ror.getRef();
            }
            else {
                _isRef = false;
                _rule = ror.getRule();
            }
        }
        RuleOrRef& operator=(const RuleOrRef& ror) noexcept {
            if (ror.getIsRef()) {
                _isRef = true;
                _ref = ror.getRef();
            }
            else {
                _isRef = false;
                _rule = ror.getRule();
            }
            return *this;
        }
        ~RuleOrRef() {}

        bool getIsRef() const noexcept { return _isRef; }
        Rule getRule() const noexcept { return !_isRef ? _rule : Rule(); }
        RuleRef getRef() const noexcept
            { return _isRef ? _ref : RuleRef(); }
        std::vector<ParseResponse>&& operator()(CIter start, CIter end) {
            return _isRef ? _ref(start, end) : _rule(start, end);
        }
    private:
        bool _isRef = false;
        union {
            Rule _rule;
            RuleRef _ref;
        };
    };

    typedef std::string RuleSetType;
    class RuleSetSyntax;

    class RuleSet {
    public:
        /**
         * Custom Default Constructor
         *
         * RuleSets can be initialized with a set of rules and/or with
         * a RuleSet "type" indicating the manner in which it relates
         * the various responses from the rules and rule-references
         * associated with it.
         *
         * @param rules A beginning list of rules, if needed.
         * @param type A string flagging how rules are to be interpreted.
         * @return An initialized RuleSet object.
         */
        RuleSet(std::vector<RuleOrRef>&& rules = {}, std::string type =
            "sequence")
            : _rules(std::move(rules)), _type(type) {}

        /**
         * Call Operator
         *
         * Aggregates the ParseResponses of Rules and RuleRefs managed
         * by the RuleSet given a string's start and end positions.
         *
         * @param start The string iterator noting from where to start reading.
         * @param end The string iterator noting the last possible read
         *            position.
         * @return The final ParseResponse summarizing the results of whichever
         *         single set of rules correspond to the given string.
         */
        ParseResponse&& operator()(CIter start, CIter end) {

            //Move in order through each of the rules we know about, testing
            //them to see if they match the current substring. Return the
            //first one that matches.
            for (RuleOrRef ror : _rules) {
                //The single call for ror will result in nested calls to
                //additional rors for each reference in the chain of rules.
                //Each of those responses is aggregated into a slowly built
                //up vector of responses that is passed to each preceding
                //call as the process moves down the call stack. The resulting
                //vector is a reverse-order sequence of references to a rule.
                std::vector<ParseResponse> responses = ror(start, end);

                ParseResponse response;
                if (_type == "sequence") {
                    response = aggregateSequence(responses);
                }
                else if (_type == "any") {
                    response = aggregateAny(responses);
                }
                else {
                    assert(0 && "Unknown rule set type from JSON");
                }

                if (response.isSuccessful) {
                    return std::move(response);
                }
            }

            //If none of the rules match, then return a failure state.
            return ParseResponse();
        }

        const RuleSetType& getType() const noexcept { return _type; }
        const std::vector<RuleOrRef>& getRules() const noexcept
            { return _rules; }

    private:
        friend RuleSetSyntax;
        static ParseResponse&& aggregateSequence(
            const std::vector<ParseResponse>& responses) {

            ParseResponse pr(0, true);
            for (ParseResponse current : responses) {
                pr.deltaPosition += current.deltaPosition;
                pr.isSuccessful &= current.isSuccessful;
            }
            return std::move(pr);
        }

        static ParseResponse&& aggregateAny(
            const std::vector<ParseResponse>& responses) {

            ParseResponse pr(0, false);
            for (ParseResponse current : responses) {
                pr.deltaPosition += current.deltaPosition;
                pr.isSuccessful |= current.isSuccessful;
            }
            return std::move(pr);
        }

        RuleSetType _type;
        std::vector<RuleOrRef> _rules;
    };

    class RuleSetSyntax {
    public:

        /**
         * RuleSet Custom Constructor
         *
         * Initializes the RuleSet from JSON syntax data.
         *
         * @param syntax The JSON data representing the syntax content.
         * @return an initialized RuleSet object.
         */
        RuleSetSyntax(json syntax) {
            //? This complicated set of temporaries appears
            //? necessary since json.hpp seems to not allow
            //? static casting of return values. I'll get compiler
            //? errors or a runtime assert when I try simpler
            //? one-liner methods. Would prefer to get rid of them.
            for (json characterSet : syntax["characterSets"]) {
                std::string name = characterSet["name"];
                std::string characters = characterSet["characters"];
                _characterMap[name] = characters;
            }
            for (json ruleSetJson : syntax["ruleSets"]) {
                std::string ruleSetType = ruleSetJson["type"];
                RuleSet currentRuleSet({},ruleSetType);
                for (json rule : ruleSetJson["set"]) {
                    std::string s = rule["condition"];
                    condition_t c = s[0];
                    std::string name;
                    //iterator to "characters" reference for the rule.
                    json::iterator ruleDef;
                    if ((ruleDef = rule.find("characterSet"))
                        != rule.end()) {

                        //get character set name
                        std::string name = *ruleDef;

                        //Add the rule
                        currentRuleSet._rules.push_back(
                            RuleOrRef( Rule(_characterMap.at(name),c) )
                        );
                    }
                    else if ((ruleDef = rule.find("rule"))
                        != rule.end()) {

                        //get rule name
                        std::string name = *ruleDef;

                        //Add the rule reference
                        currentRuleSet._rules.push_back(
                            RuleOrRef( RuleRef(_characterMap.at(name),c,
                                &_ruleSetMap) )
                        );
                    }
                    else {
                        assert(0 &&
                            "Failed to get rule definition from json");
                    }
                }
                std::string ruleSetName = ruleSetJson["name"];
                _ruleSetMap[ruleSetName] = currentRuleSet;
            }
        }

        const std::unordered_map<std::string, RuleSet>& getRuleSetMap()
            const noexcept {

            return _ruleSetMap;
        }

        friend RuleRef;

    private:
        std::unordered_map<std::string, std::string> _characterMap;
        std::unordered_map<std::string, RuleSet> _ruleSetMap;
    };
};

struct WyrdParser {

    /**
     * parse
     *
     * Parses a string based on the rules given from the syntax JSON data.
     * Produces any object that can store string-like objects with a
     * push_back interface.
     *
     * @param toParse The string content to parse.
     * @param syntaxFileName The name of the file containing syntax JSON.
     * @return The DataOutput type resulting from the parse.
     */
    template <typename DataOutput = Tags>
    static DataOutput parse(std::string toParse,
        std::string syntaxFileName) {

        std::ifstream syntaxFile(syntaxFileName.c_str());

        if (!syntaxFile.is_open()) {
            assert(0 && "Could not open syntax file");
        }

        json syntax;
        syntaxFile >> syntax;

        WyrdSyntax::RuleSetSyntax syntaxRules(syntax["syntax"]);
        CIter start = toParse.cbegin();
        CIter current = start;
        CIter end = toParse.cend();
        DataOutput toReturnData;

        for (auto ruleSet : syntaxRules.getRuleSetMap()) {
            std::vector<WyrdSyntax::ParseResponse> responses;
            for (auto rule : ruleSet.second.getRules()) {
                auto response = rule(current, end);
                if (!response._success) {
                    break;
                }
                else {
                    toReturnData.push_back(DataOutput::value_type(current,
                        start+response._deltaPosition));
                    current = start + response._deltaPosition;
                }
                responses.push_back(response);
            }
            for (auto iResponse = responses.crbegin();
                iResponse != responses.crend(); ++iResponse) {


            }
        }

        return toReturnData;
    }
};

}

#endif // !WYRD_HPP