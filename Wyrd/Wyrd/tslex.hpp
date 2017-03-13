/*
 * Author: Will Nations
 * Date Created: 03/12/2017
 */
#pragma once
#include <string>
#include <sstream>
#include <vector>
#include <bitset>
#include <memory>

namespace ts {
	class lex {
	public:

		struct TokenSpan {

			TokenSpan(std::string::const_iterator cbegin,
				std::string::const_iterator cend, char delim = '\0') :
				cbegin(cbegin), cend(cend), delim(delim) {}

			std::string::const_iterator cbegin;
			std::string::const_iterator cend;
			char delim;
		};

		typedef std::vector<std::vector<std::vector<std::vector<TokenSpan>>>> TSDocument;

		static const std::string paragraphDelimiters;
		static const std::string sentenceDelimiters;
		static const std::string wordDelimiters;

		/*
		 * tokenize
		 *
		 * Code partially derived from the following URL:
		 * http://stackoverflow.com/questions/5505965/fast-string-splitting-with-multiple-delimiters
		 *
		 * @param aInput std::string const& The string to take as input
		 * @param aDelims char const* The string of characters
		 */
		inline static std::vector<TokenSpan> tokenize(
			std::string const& aInput, std::string const& aDelims) {

			// Return an empty result set if there is nothing to do
			if (aInput == "" || aDelims == "") {
				return std::vector<TokenSpan>();
			}

			// For keeping a temporary list of tokens
			std::vector<TokenSpan> tokens;
			// For maintaining a list of the delimited characters as fast RAM
			std::bitset<255> delimSet;

			//Identify each character we are delimiting on
			for (auto c : aDelims) {
				delimSet[c] = true;
			}

			// terminology shortcut
			typedef std::string::const_iterator iter;
			// iteration marker for the start of a token
			iter begin;
			// flag that a token is prepared
			bool tokenReady = false;

			// Cycle through all characters in the input
			for (auto iInput = aInput.begin(), end = aInput.end();
				iInput != end; ++iInput) {

				// If it's a delimited character and there is a token to grab
				if (delimSet[*iInput]) {
					if (tokenReady) {
						// Add the token to our character storage
						tokens.push_back(TokenSpan(begin, iInput, *iInput));
						// Notify that there is no more token to be grabbed
						tokenReady = false;
					}
				}
				// else, if it's NOT a delimited character and we don't have a
				// token prepared yet, start preparing a token
				else if (!tokenReady) {
					// Record starting position of the token
					begin = iInput;
					// Notify that there is now a token to be grabbed
					tokenReady = true;
				}
			}

			// If we've read through all of the input and there is a token left
			// to be pushed, then push it.
			if (tokenReady) {
				char suffixChar(aInput.back());
				if (aDelims.find(aInput.back()) == std::string::npos) {
					suffixChar = aDelims[0];
				}
				tokens.push_back(TokenSpan(begin, aInput.end(), suffixChar));
			}

			//Return the tokens to the calling context
			return tokens;
		}



		//TODO: Need to add full usage of TSDocument type to store all parsed areas
		//TODO: Need to extract IO content and attach functions as parameters somehow
		//to be called when the given switch case is encountered.
		inline static TSDocument analyze(std::string input) {

			std::vector<TokenSpan> paragraphs = tokenize(input, paragraphDelimiters);
			std::vector<TokenSpan> sentences;
			std::vector<TokenSpan> words;
			std::vector<TokenSpan> components;
			TSDocument results;

			for (auto iParagraph = paragraphs.cbegin(); iParagraph !=
				paragraphs.cend(); ++iParagraph) {

				sentences = tokenize(std::string(iParagraph->cbegin,
					iParagraph->cend), sentenceDelimiters);

				for (auto iSentence = sentences.cbegin(); iSentence !=
					sentences.cend(); ++iSentence) {

					words = tokenize(std::string(iSentence->cbegin,
						iSentence->cend), wordDelimiters);

					std::string prefix;
					switch (iSentence->delim) {
					default:
					case '.': prefix = "Statement: "; break;
					case '!': prefix = "Exclamation: "; break;
					case '?': prefix = "Question: "; break;
					case ':': prefix = "Clarification"; break;
					}
					for (auto iWord = words.cbegin(); iWord != words.cend();
						++iWord) {

					}
				}
			}
			return results;
		}
	};
}