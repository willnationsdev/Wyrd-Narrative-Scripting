/*
 * Author: Will Nations
 * Date Created: 03/12/2017
 */
#include "tslex.hpp"

namespace ts {
}

/*

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
					std::cout << prefix;

					std::string output = "";
					for (auto iWord = words.cbegin(); iWord != words.cend(); ++iWord) {
						output.append(std::string(iWord->cbegin, iWord->cend)
							+ iWord->delim);

					}
					output.pop_back();
					std::cout << output << iSentence->delim << std::endl;
				}
				std::cout << "-----" << std::endl;
			}
			return results;
		}
*/
