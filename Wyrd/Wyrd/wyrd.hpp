/*
 * Author: Will Nations
 * Date Created: 03/12/2017
 */

#ifndef WYRD_HPP
#define WYRD_HPP

#include <string>   //std::string
#include <fstream>  //std::ifstream
#include <vector>   //std::vector
#include <algorithm> //std::find
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

        typedef std::vector<std::string> Tags;

        struct Reader {

            typedef std::string::const_iterator CIter;

            Reader(std::string name, json* syntax, json* form, Tags& tags) 
              : name(name), syntax(syntax), form(form), tags(tags) {

                if (!syntax) {
                    throw std::exception("bad syntax passed to reader");
                }

                if (!form) {
                    throw std::exception("bad form passed to reader");
                }

                *syntax = (*syntax)["syntax"];
            }

            /**
             * eat()
             * 
             * 1) Extracts rules for what should be consumed from JSON
             * 2) Acquires a list of characters permitted for each type of
             *    "following" item.
             * 3) checks whether the rules are fulfilled such that the proper
             *    sequence of each character type is encountered.
             *
             * @param start The iterator marking our start position
             * @param end The iterator marking the end of the data.
             * @return An iterator to either the next location if we 
             *         successfully "ate" any elements or an iterator to the 
             *         start location if we failed to "eat" anything.
             * @sideeffect tags The tags object will be updated with a new
             *         element containing the value of anything "eaten".
             */
            CIter eat(CIter start, CIter end) {

                if (start == end) {
                    return start;
                }

                CIter current = start;
                auto originalCharacters = (*form)["prefixes"];
                std::string element;
                std::string s(&*current++);

                if (originalCharacters.find(s) != originalCharacters.end()) {
                    element += s;
                }
                else {
                    return start; //not even in this category. Report failure.
                }
                //Don't check for "end" here since some forms will have no
                //follow-up rules and therefore would be perfectly fine
                //followed by the end of the data.

                for (auto rule : (*form)["followedBy"]) {

                    std::vector<std::string> path = rule["path"];
                    json characterList;

                    if (path.size() >= 1) {

                        std::string key = path[0];
                        characterList = (*syntax)[key]["forms"];
                        std::string subgroup = "default";

                        if (path.size() >= 2) {

                            subgroup = path[1];
                        }

                        characterList = characterList[subgroup]["prefixes"];
                    }
                    else {
                        return start; //Done. Rules exist, but can't get group.
                    }
                    //Assuming we found the first character...
                    char c = (uint64_t)rule["condition"];

                    //Evaluate the content differently based on what condition
                    //has been set for the rule.
                    switch (c) {
                    case '?':
                        //if there is nothing, then stop already
                        if (current != end) {

                            //Grab the character and increment the iterator
                            s = &*current++;

                            //If this is a character we are looking for
                            if (characterList.find(s) != characterList.end()) {

                                //add it to the segment
                                element += s;
                            }
                        }
                        //move forward even if we don't find anything
                        break;
                    case '*':

                        //if there is nothing, then stop already
                        if (current != end) {

                            //Grab the character and increment the iterator
                            s = &*current++;

                            //If this is a character we are looking for
                            while (characterList.find(s) != 
                                    characterList.end()) {

                                //add it to the segment
                                element += s;

                                //check whether the current character is valid
                                if (current == end) {

                                    //if not, stop where we are
                                    break;
                                }
                                //if so, grab the character and increment
                                s = &*current++;
                            }
                        }
                        //move forward even if we don't find anything
                        break;
                    case '+':
                        //Check if a first character exists
                        if (current == end) {
                            return start;
                        }
                        //Grab the first character
                        s = &*current++;
                        //Ensure at least one is captured properly
                        if (characterList.find(s) != characterList.end()) {
                            //since it's there, add it to our segment
                            element += s;
                            //prep the next character
                            //don't increment yet to check next while condition
                            if (current != end) {
                                s = &*current++;
                            }
                            else {
                                break; //confirmed 1 character minimum. End.
                            }
                        }
                        else {
                            return start; //there isn't even one character
                        }
                        //
                        while (characterList.find(s) != characterList.end()) {
                            element += s;
                            if (current == end) {
                                break;
                            }
                            s = &*current++;
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
                        if (current == end) {
                            return start;
                        }
                        for (int i = 0; i < c && current != end; ++i) {
                            s = &*current++;
                            element += s;
                        }
                    }

                    tags.push_back(element);
                    return current;
                }
            }

            Tags tags;
            std::string name;
            json* syntax;
            json* form;
        };

        template <typename Reader = Reader>
        struct SyntaxReader {

            SyntaxReader() {

            }

            std::vector<Reader> readers;
        };

        template <typename SyntaxReader = SyntaxReader<>>
        SyntaxReader generate(const std::string& syntaxJsonFile = "syntax.json") {
            std::ifstream file(syntaxJsonFile);
            if (!file.is_open()) {
                return false;
            }

            json j;
            file >> j;

            SyntaxReader syntaxReader;

            for (auto category : j["syntax"]) {
                for (auto form : category["forms"]) {

                    std::string formName = 
                        form["name"] == "default" ? 
                        category["name"] : 
                        form["name"];
                    syntaxReader.addReader(formName, form);
                }
            }

            return syntaxReader;
        }
    };

    struct WyrdParser {

        template <typename DataOutput>
        static DataOutput parse(const std::string::const_iterator& start, 
                const std::string::const_iterator& end) {

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
        }

        private:
            //Don't want to have to #include <algorithm>, so just writing my
            //own quick find method
            static Collection::const_iterator find(const Collection& type, const Symbol& val)
            {
                auto first = type.cbegin();
                auto last = type.cend();
                while (first != last) {
                    if (*first == val) return first;
                    ++first;
                }
                return last;
            }
    };

}

#endif // !WYRD_HPP