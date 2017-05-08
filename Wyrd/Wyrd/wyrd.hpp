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

        struct RuleResponse {
            RuleResponse(CIter ep = CIter(), bool s = false)
                noexcept : endingPosition(ep), success(s) {}
            CIter endingPosition;
            bool success;
        };

        struct Rule {

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
            Rule(CharacterSets characterSets, condition_t condition) noexcept
                : _characterSets(characterSets), _condition(condition) {}

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
            RuleResponse operator()(CIter start, CIter end) {

                if (start == end) {
                    return RuleResponse(start,false);
                }

                CIter current = start;
                //If we were unable to locate the valid character list,
                //then don't even bother continuing.
                if (!_characterSets.size()) {
                    assert(0 && 
                        "The character sets were not found in the JSON file.");
                }

                RuleResponse result(start, false);

                //Cycle through each of the character sets associated with
                //this Rule. Construct a RuleResponse that represents the
                //first one that actually works.
                for (Characters characters : _characterSets) {
                    //Keep track of the original position, for 
                    //minimum-length Rules.
                    auto original = current;

                    //Evaluate the content differently based on what 
                    //condition has been set for the rule.
                    switch (_condition) {
                    case '?':
                        //Attempt to advance once.
                        current += advance(characters, current, end, 1);
                        break;
                    case '*':
                        //Attempt to advance as much as possible.
                        current += advance(characters, current, end);
                        break;
                    case '+':
                        //Attempt to advance as much as possible, but check
                        //to make sure that we at least moved once.
                        original = current;
                        current += advance(characters, current, end);
                        if (original == current) {
                            continue;
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
                        current += 
                            advance(characters, current, end, _condition);

                        //If advancement was not precise, then this string does
                        //not conform to this rule.
                        if (current != current + (_condition-'1'+1)) {
                            continue;
                        }
                        break;
                    case '!':
                        //If we DON'T want to find it, but we DO, report failure.
                        if (characters.find(*current) != std::string::npos) {
                            continue;
                        }
                    default:
                        continue;
                    }
                    result = RuleResponse(current, true);
                    break;
                }


                //Notify the calling context of where we stopped, i.e. the
                //start of the NEXT segment.
                return result;
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

            CharacterSets _characterSets;
            condition_t _condition;
        };

        struct RuleSequence {
            RuleSequence(const std::vector<Rule>& rules) : rules(rules) {}

            RuleResponse operator()(CIter start, CIter end) {

            }

            std::vector<Rule> rules;
        };

        typedef std::vector<Rule> RuleSequence;
        typedef std::vector<RuleSequence> RuleSequences;
        typedef std::string TypeOrName;
        typedef std::unordered_map<TypeOrName, CharacterSets> CharacterMap;

        class RuleSet {
        public:

            /**
             * RuleSet Custom Constructor
             *
             * Initializes the RuleSet from JSON syntax data.
             *
             * @param syntax The JSON data representing the syntax content.
             * @return an initialized RuleSet object.
             */
            RuleSet(json syntax) {
                for (json characterSet : syntax["characterSets"]) {
                    std::string name = characterSet["name"];
                    std::string characters = characterSet["characters"];
                    _characterMap[name] = { characters };
                    for (std::string type : characterSet["types"]) {
                        _characterMap[type].push_back(characters);
                    }
                }
                for (json ruleSequence : syntax["ruleSequences"]) {
                    RuleSequence rules;
                    for (json rule : ruleSequence) {
                        //? These variables have to be constructed(?)
                        //? because simply casting triggers assertions in 
                        //? the json.hpp code.
                        TypeOrName tn = rule["characterSet"];
                        std::string s = rule["condition"];
                        condition_t c = s[0];
                        CharacterSets cs = _characterMap.at(tn);
                        rules.push_back(Rule(cs, c));
                    }
                    _ruleSequences.push_back(rules);
                }
            }

            const RuleSequences& getRuleSequences() 
                const noexcept {

                return _ruleSequences;
            }

        private:
            CharacterMap _characterMap;
            RuleSequences _ruleSequences;
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

            WyrdSyntax::RuleSet ruleSet(syntax["syntax"]);
            CIter current = toParse.cbegin();
            CIter end = toParse.cend();
            DataOutput toReturnData;

            for (auto ruleSequence : ruleSet.getRuleSequences()) {
                std::vector<WyrdSyntax::RuleResponse> responses;
                for (auto rule : ruleSequence) {
                    auto response = rule(current, end);
                    if (!response.success) {
                        break;
                    }
                    else {
                        toReturnData.push_back(DataOutput::value_type(current, 
                            response.endingPosition));
                        current = response.endingPosition;
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