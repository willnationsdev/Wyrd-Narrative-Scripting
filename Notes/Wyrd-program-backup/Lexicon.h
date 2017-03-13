/*
 * Author: Will Nations, @willnations
 * Date Created: 11/17/2016
 * 
 * Tools for verifying and interpreting a custom lexicon & syntax.
 * 
 * Variable Prefix Guide:
 * - m: M-ember: belongs to a class.
 * - p: P-arameter: belongs to a function's parameter list.
 * - s: S-tack: belongs to the stack.
 * Specializations:
 * - i: I-teration: a Stack variable that is specifically used for iterations.
 * - t: T-emporary: a Stack variable that is specifically used for temp values.
 */

#pragma once
#include <fstream>
#include <exception>
#include <vector>
#include <atomic>
#include "Common.h"
#include "IVerifier.h"

#define LEX_STR_LENGTH 24

namespace wyrd
{
#pragma region Exceptions

#pragma endregion

    class Lexicon : public IVerifier<std::istream>
    {
    public:

        /*
         * Custom Constructor
         * The Core dictionary will only be read from while the custom 
         * dictionary will be read and possibly written to (in the case that
         * new information about a custom term is developed during execution).
         * 
         * TODO: Replace hard-coded dictionary paths with outsourcing from a
         *       config file parser.
         * 
         * @param pCoreDictionaryFileName
         *     - A file name for the dictionary detailing the core Lexicon
         *     - language and syntax.
         * @param pCustomDictionaryFileName
         *     - A file name for the dictionary detailing Custom terms and
         *     - their meanings as described by the Core terms.
         * @throws Lexicon::DictionaryNotFoundException
         *     - If a dictionary file is not found locally.
         */
        Lexicon(std::string pCoreDictionaryFileName = "core_dictionary.txt", 
            std::string pCustomDictionaryFileName = "custom_dictionary.txt");

        /*
         * Default Destructor
         */
        ~Lexicon();

        /*
         * Verifies that the words and punctuation used in a sentence conform
         * to the proper lexical structure. Verifies these points of data:
         * - Morphology:
         *      "Core"-marked words can be found in the Core dictionary.
         * 
         * @param pTextStream
         *      - The text to be verified as Toki Pona.
         * @throws Lexicon::UnrecognizedCoreTextException
         *      - if a scanned word is not marked as a custom word and is not
         *        found in the dictionary reference
         */
        bool verify(std::istream *pTextStream) override;

#pragma region Exceptions
        DefineException(LexicalException, WyrdException)
        DefineException(CoreDictionaryNotFoundException, LexicalException)
        DefineException(CustomDictionaryNotFoundException, LexicalException)
        DefineException(UnrecognizedCoreTextException, LexicalException)
        DefineException(BadNotationException, LexicalException)
        DefineException(BadSyntaxException, LexicalException)

#pragma endregion


    protected:

        /*
         * Confirms that the content of TextStream is composed solely of 
         * TokiSona vocabulary.
         * 
         * @param pTextStream
         *      - The stream supplying the text to be evaluated.
         */
        bool checkMorphology(std::istream *pTextStream);

    private:
        // Read-only stream for the Core dictionary.
        std::ifstream mCoreDictionaryFile;

        // Read-Write stream for the Custom dictionary.
        std::fstream mCustomDictionaryFile;

        /*
         * The current line number, useful for error reporting.
         */
        int mCurrentLineNumber = 0;

        /*
         * The full current line, useful for error reporting.
         */
        std::string mCurrentLine = "";

        /*
         * The buffer for reading from the input stream.
         */
        std::string mInputBuffer = "";

        /*
         * Tokenizes input with multiple delimeters using a bitset. Therefore,
         * it only works effectively with char values 0-255.
         * Used to avoid inefficiencies with algorithms that would otherwise
         * rely on multiple getline operations.
         * 
         * @param aInput
         *      - The text to be tokenized
         * @param aDelims
         *      - A string containing the individual characters to scan for
         * @param aData
         *      - The data structure that will be used to store the tokens.
         *        Assumed to implement the .push_back(typename StorageType) 
         *        method (for example, std::vector).
         */
        template<typename IPushBackable>
        void tokenize(const std::string& aInput, char const* aDelims,
            IPushBackable& aData);

#pragma region Constants

        struct MorphologyStrings {
            //The set of characters encompassing a period
            static const char PERIOD[LEX_STR_LENGTH];
            //The set of characters that involve a colon and an accent/apostrophe
            static const char COLON_ACCENT[LEX_STR_LENGTH];
            //The set of characters that involve a '?' and '!'
            static const char QUESTION_EXCLAMATION[LEX_STR_LENGTH];
            //The set of characters that must be paired with a vowel
            static const char PAIRED_LETTERS[LEX_STR_LENGTH];
            //The set of valid vowel char characters
            static const char VOWELS[LEX_STR_LENGTH];
            //The set of characters that involve a single 'n'
            static const char N[LEX_STR_LENGTH];
            //The set of characters that involve whitespace
            static const char WHITESPACE[LEX_STR_LENGTH];
            //The set of characters permitted to appear after '.'
            static const char AFTER_PERIOD[LEX_STR_LENGTH];
            //The set of characters permitted to appear after ':' and '\''
            static const char AFTER_COLON_ACCENT[LEX_STR_LENGTH];
            //The set of characters permitted to appear after '?' and '!'
            static const char AFTER_QUESTION_EXCLAMATION[LEX_STR_LENGTH];
            //The set of characters permitted to appear after paired letters
            static const char AFTER_PAIRED_LETTERS[LEX_STR_LENGTH];
            //The set of characters permitted to appear after vowel letters
            static const char AFTER_VOWELS[LEX_STR_LENGTH];
            //The set of characters permitted to appear after 'n'
            static const char AFTER_N[LEX_STR_LENGTH];
            //The set of characters permitted to appear after any whitespace
            static const char AFTER_WHITESPACE[LEX_STR_LENGTH];
        };

        /*
         * A centralized set of static constants associated with morphological
         * standards, grouped together for contiguous memory allocation and
         * faster read access.
         * 
         * This collection has predefined integer offsets between each entry
         * and between a given entry and its corresponding "after" set which
         * details what characters may come after it.
         */
        static const MorphologyStrings MORPHOLOGY_STRINGS;

        /*
         * The rate at which the Lexicon will read from its input streams.
         */
        static const unsigned int READ_RATE = BUFSIZ;

        /*
         *
         */
        static const char* DEFAULT_CORE_DICTIONARY_FILENAME;

        /*
         *
         */
        static const char* DEFAULT_CUSTOM_DICTIONARY_FILENAME;

#pragma endregion

    };
}