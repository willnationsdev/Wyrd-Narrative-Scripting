/*
 * Author: Will Nations
 * Date Created: 03/12/2017
 */
#pragma once
#include <string>
#include <sstream>
#include <vector>
#include <bitset>
#include <cctype>

#include <boost/spirit/include/qi.hpp>
#include <boost/spirit/include/lex_lexertl.hpp>
#include <boost/spirit/include/phoenix_operator.hpp>
#include <boost/spirit/include/phoenix_statement.hpp>
#include <boost/spirit/include/phoenix_container.hpp>

#define BOOST_SPIRIT_NO_REGEX_LIB

namespace ts {

	//TODO: functionalize these two classes
	class GrammarNode {
	public:
		GrammarNode() {}
		virtual ~GrammarNode() {}
		std::vector<const GrammarNode*> getChildren() const {
			return children;
		}

	private:
		std::vector<const GrammarNode*> children;
	};

	class GrammarTree : public GrammarNode {
	public:
		GrammarTree() : top(new GrammarNode()) {}
		~GrammarTree() { GrammarTree::kill(this); }
		GrammarNode* getTop() { return top; }

	private:
		GrammarNode *top;

		static GrammarNode* kill(const GrammarNode *treeToKill) {
			if (!treeToKill) return nullptr;
			for (auto node : treeToKill->getChildren()) {
				GrammarTree::kill(node);
			}
			if (treeToKill->getChildren().empty()) {
				delete treeToKill;
			}
			return nullptr;
		}
	};

	using namespace boost::spirit;
	using namespace boost::spirit::ascii;

	
	//template <typename Lexer>
	//struct TokiSonaTokens : lex::lexer<Lexer> {
	//	TokiSonaTokens()
	//		: eol("[\r\n]")
	//		, component("[a-zA-Z]+")
	//		, compDelim("-")
	//		, eos("[\\.\\?!:]")
	//		, any(".") {

	//		this->self.add
	//			(eol)
	//			(component)
	//			(compDelim)
	//			(eos)
	//			(any)
	//		;
	//	}

	//	lex::token_def<std::string> eol, component, compDelim, eos, any;
	//};

	template <typename Iterator>
	struct TokiSonaGrammar : qi::grammar<Iterator, GrammarTree()> {
		template <typename TokenDef>
		TokiSonaGrammar(TokenDef const& tok)
			: TokiSonaGrammar::base_type(start) {

			start = interjection | vocativeSentence | Sentence | yesNoAnswer;

			//using boost::phoenix::ref;
			/*
			start = *(	tok.eol			[++ref(i_eol)]
					 |	tok.component	[++ref(i_component)]
					 |  tok.compDelim	[++ref(i_compDelim)]
					 |  tok.eos			[++ref(i_eos)]
					 |  tok.any			[++ref(i_any)]
					 )
				;*/
		}
		qi::rule<Iterator, GrammarTree()> start;
		qi::rule<Iterator, GrammarTree()> interjection;
		qi::rule<Iterator, GrammarTree()> vocativeSentence;
		qi::rule<Iterator, GrammarTree()> sentence;
		qi::rule<Iterator, GrammarTree()> yesNoAnswer;

		//int i_eol, i_component, i_compDelim, i_eos, i_any;
	};

	inline static bool parse(const std::string &input) {
		typedef lex::lexertl::token<char const*, boost::mpl::vector<std::string>> token_type;

		typedef lex::lexertl::lexer<token_type> lexer_type;

		//typedef TokiSonaTokens<lexer_type>::iterator_type iterator_type;
		typedef std::string::iterator iterator_type;

		//TokiSonaTokens<lexer_type> tslex;
		//TokiSonaGrammar<iterator_type> tsgram;
		char const *first = input.c_str();
		char const *last = &first[input.size()];

		//bool result = lex::tokenize_and_parse(first, last, tslex, tsgram);
		//return result;
		return true;
	}

	/*
	class tslex {
	public:

		struct TokenSpan {

			TokenSpan(std::string::const_iterator cbegin,
				std::string::const_iterator cend, char delim = '\0') :
				cbegin(cbegin), cend(cend), delim(delim) {}

			std::string::const_iterator cbegin;
			std::string::const_iterator cend;
			char delim;
		};

		typedef std::vector<TokenSpan> ComponentList;
		typedef std::vector<ComponentList> WordList;
		typedef std::vector<WordList> SentenceList;
		typedef std::vector<WordList> SentenceList;
		typedef std::vector<std::vector<std::vector<std::vector<TokenSpan>>>> TSDocument;
		

		static const std::string paragraphDelimiters;
		static const std::string sentenceDelimiters;
		static const std::string wordDelimiters;
		static const std::string tsConsonants;
		static const std::string tsVowels;
		static const std::string tsPunctuation;
		
		// tokenize
		//
		// Code partially derived from the following URL:
		// http://stackoverflow.com/questions/5505965/fast-string-splitting-with-multiple-delimiters
		//
		// @param aInput std::string const& The string to take as input
		// @param aDelims char const* The string of characters
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

			// iteration marker for the start of a token
			std::string::const_iterator begin;
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

		template <typename OuterType>
		inline static OuterType tokenize_recursive(
			std::string const& aInput, std::string const& aDelims) {


		}

		template <typename OuterType, typename... InnerType>
		inline static OuterType tokenize_recursive(
			std::string const& aInput, std::string const& aDelims) {
			
			// Return an empty result set if there is nothing to do
			if (aInput == "" || aDelims == "") {
				return OuterType();
			}

			// For keeping a temporary list of tokens
			OuterType tokens;
			// For maintaining a list of the delimited characters as fast RAM
			std::bitset<255> delimSet;

			//Identify each character we are delimiting on
			for (auto c : aDelims) {
				delimSet[c] = true;
			}

			// iteration marker for the start of a token
			std::string::const_iterator begin;
			// flag that a token is prepared
			bool tokenReady = false;

			// Cycle through all characters in the input
			for (auto iInput = aInput.begin(), end = aInput.end();
				iInput != end; ++iInput) {

				// If it's a delimited character and there is a token to grab
				if (delimSet[*iInput]) {
					if (tokenReady) {
						InnerType innerTokens = tokenize_recursive<InnerType...>(begin, iInput, *iInput);
						// Add the token to our character storage
						tokens.push_back(innerTokens);
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
		inline static TSDocument parse(std::string input) {

			std::vector<TokenSpan> paragraphs = tokenize(input, paragraphDelimiters);
			std::vector<TokenSpan> sentences;
			std::vector<TokenSpan> words;
			std::vector<TokenSpan> components;
			TSDocument results;

			//For each paragraph...
			for (auto iParagraph = paragraphs.cbegin(); iParagraph !=
				paragraphs.cend(); ++iParagraph) {

				//Collect the sentences
				sentences = tokenize(std::string(iParagraph->cbegin,
					iParagraph->cend), sentenceDelimiters);

				//For each sentence...
				for (auto iSentence = sentences.cbegin(); iSentence !=
					sentences.cend(); ++iSentence) {

					//Collect the words
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

					//For each word...
					for (auto iWord = words.cbegin(); iWord != words.cend();
						++iWord) {

						//Note: no need to delimit on the individual components. We are delimiting words all the same.
						//just need to alter the behavior based on which delimeter shows up
					}
				}
			}
			return results;
		}

	protected:
		
		//isValidTokiSonaSpelling
		//
		//Will check whether the given string conforms to appropriate Toki Sona spelling restrictions.
		//1. All characters lowercase.
		//2. Only valid Toki Sona letterings and punctuation are used.
		//
		//@param input std::string A string of text to analyze.
		//@throws std::exception if a non-lowercase letter is used
		//
		//@return Valid or Invalid.
		//
		inline bool isValidTokiSonaCore(std::string input) {
			for (std::string::size_type iChar = 0; iChar < input.size(); ++iChar) {
				if (std::isalpha(iChar)) {
					//Anything interpreted as core must be in all lowercase
					if (!std::islower(iChar)) {
						throw std::exception("Toki Sona Core is lowercase-only.");
					}
					if (tslex::tsConsonants.find(iChar) == std::string::npos) {
						
					}
					else if (iChar == 'n') { //special case

					}
					else if (tslex::tsVowels.find(iChar) == std::string::npos) {

					}
				}
				else if (std::ispunct(iChar)) {
					if (tslex::tsPunctuation.find(iChar) == std::string::npos) {

					}
				}
			}
		}

		inline bool isValidTokiSonaPunctuation(std::string input) {
			bool result = true;
			//Each character must be part of the valid set of punctuation
			for (auto iChar : input) {
				result &= tslex::tsPunctuation.find(iChar) == std::string::npos;
			}
			return result;
		}

		inline bool isValidTokiSonaCustom(std::string input) {
			bool result = true;
			//Must be at least 1 character.
			result &= input.size() > 0;
			//All characters must be alphabetic.
			for (auto iChar : input) {
				result &= std::isalpha(iChar);
			}
			//The first character must be uppercase.
			result &= std::isupper(input[0]);
			return result;
		}

	};*/
}