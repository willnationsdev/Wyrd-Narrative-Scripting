/*
 * Author: Will Nations
 * Description: An implementation of the Lexicon class for the Toki Pona
 *              language, among other classes.
 */
#include <iostream>
#include <sstream>
#include <bitset>
#include <unordered_set>
#include <string>
#include "Lexicon.h"

#define AFTER_OFFSET 0xA8

namespace wyrd
{

#pragma region Exceptions

#pragma endregion

#pragma region Lexicon

#pragma region Lexicon Constants

	/* Need to move all of this into a config file or something? */
	const char Lexicon::MorphologyStrings::PERIOD[] = { "." };
	const char Lexicon::MorphologyStrings::COLON_ACCENT[] = { ":\'" };
	const char Lexicon::MorphologyStrings::QUESTION_EXCLAMATION[] = { "?!" };
	const char Lexicon::MorphologyStrings::PAIRED_LETTERS[] = { "ptksmljw" };
	const char Lexicon::MorphologyStrings::VOWELS[] = { "aeiou" };
	const char Lexicon::MorphologyStrings::N[] = { "n" };
	const char Lexicon::MorphologyStrings::WHITESPACE[] = { " \n\t" };
	const char Lexicon::MorphologyStrings::AFTER_PERIOD[] = { ".?! \n\t" };
	const char Lexicon::MorphologyStrings::AFTER_COLON_ACCENT[] = { " \n\t" };
	const char Lexicon::
		MorphologyStrings::AFTER_QUESTION_EXCLAMATION[] = { "?! \n\t" };
	const char Lexicon::
		MorphologyStrings::AFTER_PAIRED_LETTERS[] = { "aeiou" };
	const char Lexicon::
		MorphologyStrings::AFTER_VOWELS[] = { ",.!?\': \n\tptksmnljw" };
	const char Lexicon::
		MorphologyStrings::AFTER_N[] = { ",.!?\': \n\tptksmljwaeiou" };
	const char Lexicon::
		MorphologyStrings::AFTER_WHITESPACE[] = { " \n\t.!?ptksmnljwaeiou" };

#pragma endregion

#pragma region Lexicon Constructors

	Lexicon::Lexicon(std::string aCoreDictionaryFileName,
		std::string aCustomDictionaryFileName)
	{
		mCoreDictionaryFile.open(aCoreDictionaryFileName);
		if (!mCoreDictionaryFile.is_open())
		{
			throw CoreDictionaryNotFoundException(
				"The Core Dictionary with file name \"" +
				std::string(aCoreDictionaryFileName) +
				"\" could not be opened.");
		}

		mCustomDictionaryFile.open(aCustomDictionaryFileName);
		if (!mCustomDictionaryFile.is_open())
		{
			throw CustomDictionaryNotFoundException(
				"The Custom Dictionary with file name \"" +
				std::string(aCustomDictionaryFileName) +
				"\" could not be opened.");
		}

		mInputBuffer.resize(READ_RATE);
	}
#pragma endregion

#pragma region Lexicon Destructors
	Lexicon::~Lexicon()
	{

	}
#pragma endregion

#pragma region Lexical Analyzer Methods

	bool Lexicon::verify(std::istream *pTextStream)
	{
		//Confirm Morphology
		return checkMorphology(pTextStream);
	}

	/*
	 * TODO: ensure checking is present to only run the tokenize
	 *       method when the config'd text setting is ASCII, not utf-16, etc.
	 */
	bool Lexicon::checkMorphology(std::istream *pTextStream)
	{
		while (pTextStream->read(&mInputBuffer[0], READ_RATE))
		{
			//tokenize FROM ANOTHER CLASS
		}
	}

	/*
	 * tokenize
	 * TODO: outsource into another class
	 *
	 * @param acrInput const string&
	 */
	template<typename IPushBackable>
	void Lexicon::tokenize(std::string const& aInput, char const* aDelims,
		IPushBackable& aData)
	{
		/*
		 * The following code was excerpted from the following web link more
		 * or less, and details a highly efficient method of getting a multi-
		 * delimiter getline using ASCII characters only.
		 */

		 // For keeping a temporary list of tokens
		IPushBackable sTokens;
		// For maintaining a list of the delimited characters as fast RAM
		std::bitset<255> sDelims;
		while (*acpDelims) //while we aren't through scanning everything
		{
			// Tell the bitset which characters will need to be skipped
			unsigned char code = *acpDelims++;
			sDelims[code] = true;
		}
		typedef string::const_iterator iter; // iteration terminology shortcut
		iter sBegin; // iteration marker for the start of a token
		bool sTokenReady = false; // flag that a token is prepared
		// Cycle through all characters in the input
		for (auto iInput = acrInput.begin(),
			end = acrInput.end(); iInput != end; ++iInput)
		{
			// If it's a delimited character...
			if (sDelims[*iInput])
			{
				// And if there is a token to be grabbed...
				if (sTokenReady)
				{
					// Add the token to our IPushBackable character storage
					sTokens.push_back(
						typename IPushBackable::value_type(sBegin, iInput));
					// Notify that there is no more token to be grabbed
					sTokenReady = false;
				}
			}
			// else, if it's NOT a delimited character and we don't have a
			// token prepared yet, start preparing a token
			else if (!sTokenReady)
			{
				// Notify that the next token begins here
				sBegin = iInput;
				// Notify that there is now a token to be grabbed
				sTokenReady = true;
			}
		}

		// If we've read through all of the input and there is a token left
		// to be pushed, then push it.
		if (sTokenReady)
		{
			sTokens.push_back(
				typename IPushBackable::value_type(sBegin, acrInput.end()));
		}

		//Swap values directly with the passed in data storage
		sTokens.swap(arData);
	}

#pragma endregion

}