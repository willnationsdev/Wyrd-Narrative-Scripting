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

    typedef uint32_t concept_t;
    typedef uint8_t phoneme_t;
    typedef std::string hieroglyph_t;

    static const uint8_t NUM_VOWELS = 7;
    static const uint8_t ROOT_LENGTH = 4;
    static const uint8_t TAG_LENGTH = 2;

    typedef uint8_t Symbol;
    typedef std::vector<Symbol> Collection;
    typedef std::string::const_iterator CIter;
    typedef std::vector<std::string> Tags;

    struct JsonUtility {
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

        struct Rule {

            Rule(json syntax, json form)
                : _syntax(syntax), _form(form) {}

            /**
             * function call operator()
             * 
             * 1) Extracts rules for what should be consumed from JSON
             * 2) Acquires a list of characters permitted for each type of
             *    "following" item.
             * 3) checks whether the rules are fulfilled such that the proper
             *    sequence of each character type is encountered.
             * 4) Returns an iterator to the position of the character AFTER
             *    a successful validation; therefore, returning the START
             *    position indicates a FAILURE to verify the rule.
             *
             * @param start The iterator marking our start position
             * @param end The iterator marking the end of the data.
             * @param outSuccess a flag to notify the calling context of
             *        success or failure since there is no way to do so from
             *        just the iterator return value and it's MORE messy to
             *        invent a struct to return simply for this one function.
             * @return An iterator to either the next location if we 
             *         successfully "ate" any elements or an iterator to the 
             *         start location if we failed to "eat" anything.
             * @sideeffect tags The tags object will be updated with a new
             *         element containing the value of anything "eaten".
             */
            CIter operator()(CIter start, CIter end, bool& outSuccess) {
                outSuccess = true;

                if (start == end) {
                    return start;
                }

                CIter current = start;
                auto originalCharacters = (_form)["prefixes"];
                std::string s(&*current++);
                if (originalCharacters.find(s) == originalCharacters.end()) {
                    outSuccess = false;
                    return start; //not even in this category. Report failure.
                }

                for (auto jsonRule : (_form)["followedBy"]) {

                    std::vector<std::string> path = jsonRule["path"];
                    json validChars;

                    if (path.size() >= 1) {

                        std::string key = path[0];
                        validChars = (_syntax)[key]["forms"];
                        std::string subgroup = "default";

                        if (path.size() >= 2) {
                            subgroup = path[1];
                        } //ignore everything beyond the first two entries

                        validChars = validChars[subgroup]["prefixes"];
                    }
                    else {
                        outSuccess = false;
                        return start; //Done. Rules exist, but can't get group.
                    }
                    //Assuming we found the first character...
                    Symbol condition = (int)jsonRule["condition"];
                    auto original = current;

                    //Evaluate the content differently based on what condition
                    //has been set for the rule.
                    switch (condition) {
                    case '?':
                        //Attempt to advance once
                        current += advance(validChars, current, end, 1);
                        break;
                    case '*':
                        //Attempt to advance as much as possible
                        current += advance(validChars, current, end);
                        break;
                    case '+':
                        //Attempt to advance at least once
                        original = current;
                        current += advance(validChars, current, end, 1);
                        current += advance(validChars, current, end);
                        if (original == current) {
                            outSuccess = false;
                            return start;
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
                        current += advance(validChars, current, end, condition);
                        //current MUST advance exactly c times, otherwise fail
                        if (current != current + (condition-'1'+1)) {
                            outSuccess = false;
                            return start;
                        }
                        break;
                    default:
                        break;
                    }

                } //end for each follow-up rule

                return current;
            }

        private:
            uint8_t advance(const Collection& characterList, CIter start, 
                const CIter& end, uint8_t occurrences = -1) {

                CIter current = start;
                uint8_t result = 0;
                while (current != end && occurrences != 0 &&
                    find(characterList, *current++) != characterList.cend()) {
                    result++;
                    occurrences--;
                }
                return result;
            }

            json _syntax;
            json _form;
        };

        typedef std::vector<Rule> RuleList;

        template <typename Rules = RuleList>
        static Rules generateRules(json syntaxForms) {

            Rules rules;

            for (json category : syntaxForms) {
                for (json form : category["forms"]) {
                
                    Rule rule(syntaxForms, form);
                    rules.push_back(rule);
                }
            }

            return rules;
        }

        //Don't want to have to #include <algorithm>, so just writing my
        //own quick find method
        //? Didn't work as a template for some reason?
        static Collection::const_iterator find(const Collection& type, 
            Symbol val) {

            auto first = type.cbegin();
            auto last = type.cend();
            while (first != last) {
                if (*first == val) return first;
                ++first;
            }
            return last;
        }
    };

    struct WyrdParser {

        template <typename DataOutput = Tags,
            typename Rules = WyrdSyntax::RuleList>
            static DataOutput parse(std::string toParse, json syntax) {

            Rules rules = WyrdSyntax::generateRules<Rules>(syntaxJson);
            return parse<DataOutput, Rules>(toParse, rules);
        }

        template <typename DataOutput = Tags,
            typename Rules = WyrdSyntax::RuleList>
            static DataOutput parse(std::string toParse, Rules rules) {

            CIter start = toParse.cbegin();
            CIter end = toParse.cend();
            CIter current = start;
            DataOutput toReturnData;

            bool outSuccess = false;
            for (auto rule : rules) {
                auto endOfSegment = rule(current, end, outSuccess);
                if (!outSuccess) break; //stop early
                else {
                    toReturnData.push_back(
                        DataOutput::value_type(current, endOfSegment));
                }
            }

            return outSuccess ? toReturnData : DataOutput();
        }
    };

            /*
            //Initializations
            std::string::const_iterator it = start;

            //TODO: make this a static array
            const Collection vowels = {
                'a', 'e', 'i', 'o', 'u', 'y', 'q'
            };
            const Collection roots = {
                'm', 'n', 'p', 'k', 't', 'l', 'h', 's', 'v', 'w', 'j'
            };
            const Collection tags = {
                'x', 'f', 'c', 'z', 'b'
            };
            const Collection endOfSentence = {
                '.', '!', '?', ':'
            };
            const Collection otherPunctuation = {
                ',', '\'', '"'
            };
            const Collection expressionPrecursor = {
                ';'
            };


            DataOutput data;
            uint8_t c;
            bool expectExpression = false;
            bool expectPunctuation = true;
            bool insideRoot = false;
            while (it != end) {
                c = *it++;
                std::string element;

                if (find(expressionPrecursor, c) != expressionPrecursor.cend()) {
                    //Expression Prefix
                    expectExpression = true;
                    element += c;
                    data.push_back(element);
                }
                else if (find(vowels, c) != vowels.cend()) {
                    //Vowel = Expression or GrammarPrefix
                    if (expectExpression) {
                        element = c;
                        //For each newly read in character...
                        do {
                            if (it == end) {
                                break;
                            }
                            c = *it++;
                            if (find(vowels, c) != vowels.cend()) {
                                element += c;
                            }
                            else {
                                //Otherwise, we are no longer in an expression
                                expectExpression = false;
                                //Ensure that the next pass doesn't skip
                                --it;
                            }
                        } while (expectExpression);
                        data.push_back(element);
                    }
                    else { //GrammarPrefix
                        element += c;
                        data.push_back(element);
                    }
                }
                else if (find(roots, c) != roots.cend()) {
                    element = c;
                    for (int iRootSlot = 0; iRootSlot < ROOT_LENGTH - 1; ++iRootSlot) {
                        if (it == end) {
                            throw std::exception("item interrupted");
                        }
                        c = *it++;
                        if (iRootSlot & 1) {
                            if (find(roots, c) == roots.cend()) {
                                throw std::exception("bad character");
                            }
                        }
                        else {
                            if (find(vowels, c) == vowels.cend()) {
                                throw std::exception("bad character");
                            }
                        }
                        element += c;
                    }
                    data.push_back(element);
                }
                else if (find(tags, c) != tags.cend()) {
                    element = c;
                    for (int iTagSlot = 0; iTagSlot < TAG_LENGTH - 1; ++iTagSlot) {
                        if (it == end) {
                            throw std::exception("item interrupted");
                        }
                        c = *it++;
                        if (iTagSlot & 1) {
                            if (find(vowels, c) == vowels.cend()) {
                                throw std::exception("bad character");
                            }
                        }
                        else {
                            if (find(roots, c) == roots.cend()) {
                                throw std::exception("bad character");
                            }
                        }
                        element += *it++;
                    }
                    data.push_back(element);
                }
                else if (find(endOfSentence, c) != endOfSentence.cend()) {
                    element = c;
                    expectPunctuation = true;
                    //For each newly read in character...
                    do {
                        if (it == end) {
                            break;
                        }
                        c = *it++;
                        if (find(endOfSentence, c) != endOfSentence.cend()) {
                            element += c;
                        }
                        else {
                            //Otherwise, we are no longer in an expression
                            expectPunctuation = false;
                            //Ensure that the next pass doesn't skip
                            --it;
                        }
                    } while (expectPunctuation);
                    data.push_back(element);
                }
                else if (find(otherPunctuation, c) != otherPunctuation.cend()) {
                    element = c;
                    data.push_back(element);
                }
            }

            return data;
            */

}

#endif // !WYRD_HPP