/*
 * Author: Will Nations, @willnations
 * Date Created: 11/17/2016
 * 
 * Tools for verifying and interpreting a custom lexicon & syntax.
 * 
 * Variable Prefix Guide:
 * Tier 1, ownership (pick one):
 * - m: M-ember: belongs to a class.
 * - a: p-A-rameter: belongs to a function's parameter list.
 * - s: S-tack: belongs to the stack.
 * Tier 2, features (listed after tier 1, in the listed order)
 * - s: Static: var is static
 * - c: Const: var is constant
 * - v: Volatile: var is volatile
 * Tier 3, type of variable - not type of data, (pick one)
 * -  : [Blank]: var is a value representation
 * - p: Pointer: var is a pointer, (multiple p's for pointer to pointer, etc.)
 * - r: Reference: var is a reference type, i.e. typename &var
 * - a: Array: var is a statically-defined array, i.e. typename var[];
 *
 * Prefixing Examples:
 * - acrVar  => variable Var passed into function as const reference.
 * - mpVar   => variable Var is a member variable and pointer value.
 * - scppVar => variable Var is allocated on the stack, a const pointer to 
 *              another pointer.
 */

#pragma once
#include <fstream>
#include <exception>
#include <vector>
#include "Syntax.h"

#define LEX_STR_LENGTH 24

namespace wyrd
{
#pragma region Exceptions

    /*
     * A base class for all TokiPona-related exceptions.
     * They each have a base message stating the type of exception they are,
     * and then a more detailed follow-up message that explains what was
     * happening when the error occurred. The follow-up message is provided
     * to the constructor.
     */
    class WyrdException : std::exception
    {
    public:
        /*
         * Custom Constructor for string literals
         * 
         * @params acpMessage
         *      - the follow-up message to accompany the base message
         */
        WyrdException(const char* acpMessage) : mcpMessage(acpMessage) {}

        /*
         * Custom Constructor for string objects
         * 
         * @params acMessage
         *      - the follow-up message to accompany the base message
         */
        WyrdException(const std::string &acMessage) : 
            mcpMessage(acMessage.c_str()) {}

        /*
         * Reports to standard output the type of error that occurred and what
         * specific information about the error can be provided.
         * 
         * Preconditions:
         *      - getBaseMessage() does not return nullptr
         *      - mcpMessage is not a nullptr
         * Postconditions:
         *      - None
         * Return: a string containing an error report.
         */
        const char* what() const override;

        /*
         * Returns the name of the current exception.
         */
        virtual const std::string& getName() const;

    protected:
        //Do not make a default constructor publicly available.
        WyrdException() {}

        /*
         * Provides a Base Message stating the type of error that occurred.
         * Expected format is "An error of type [class name] occurred."
         */
        const std::string& getBaseMessage() const
            { return "An error of type " + getName() + " occurred."; }

        /*
         * Simple setter for the mcpMessage member variable.
         */
        void setMessage(const char* acMessage) { mcpMessage = acMessage; }

    private:
        /*
         * The logging message to be displayed for debugging purposes.
         */
        const char* mcpMessage;
    };

    /*
     * Notifies users that a null pointer was evaluated.
     */
    class NullPointerException : public WyrdException
    {
    public:
        //Inherits constructors
        WyrdException::WyrdException;

        /*
         * Provides name access
         */
        virtual const std::string& getName() const override
        {
            return "NullPointerException";
        }
    };

#pragma endregion

    class Lexicon
    {
    public:

        /*
         * Empty Default Constructor
         */
        Lexicon() {}

        /*
         * Custom Constructor
         * The Core dictionary will only be read from while the custom 
         * dictionary will be read and possibly written to (in the case that
         * new information about a custom term is developed during execution).
         * 
         * @params acpCoreDictionaryFileName
         *     - A file name for the dictionary detailing the core Lexicon
         *     - language and syntax.
         * @params acpCustomDictionaryFileName
         *     - A file name for the dictionary detailing Custom terms and
         *     - their meanings as described by the Core terms.
         * @throws Lexicon::DictionaryNotFoundException
         *     - If a dictionary file is not found locally.
         */
        Lexicon(const char* acpCoreDictionaryFileName, 
            const char* acpCustomDictionaryFileName);

        /*
         * Default Destructor
         */
        ~Lexicon();

        /*
         * Verifies that the words and punctuation used in a sentence conform
         * to the proper lexical structure. Verifies these points of data:
         * - Morphology: The Core words are known words in the Core dictionary.
         * - Syntax: The full sentence conforms to approved grammatical forms.
         * 
         * @params arTextStream
         *      - The text to be verified as Toki Pona.
         * @throws Lexicon::UnrecognizedCoreTextException
         *      - if a scanned word is not marked as a custom word and is not
         *        found in the dictionary reference
         */
        void verify(std::istream &arTextStream) const;

#pragma region Exceptions
#define DefineException(Derived, Base) \
        class Derived : public Base\
        {\
        public:\
            Base::Base;\
\
        protected:\
            virtual const std::string& getName() const override\
                { return "Derived"; }\
        };

        DefineException(LexicalException, WyrdException)
        DefineException(CoreDictionaryNotFoundException, LexicalException)
        DefineException(CustomDictionaryNotFoundException, LexicalException)
        DefineException(UnrecognizedCoreTextException, LexicalException)
        DefineException(BadNotationException, LexicalException)
        DefineException(BadSyntaxException, LexicalException)

#pragma endregion


    protected:

        /*
         * Confirms that the content of arTextStream is composed solely of 
         * TokiPona vocabulary.
         * 
         * @param arTextStream
         *      - The stream supplying the text to be evaluated.
         */
        void checkMorphology(std::istream &arTextStream) const;

    private:
        /* 
         * The stream reading information from the Core dictionary.
         * Informs the Lexicon which words are permitted during morphological
         * analysis.
         */
        std::ifstream mCoreDictionaryFile;

        /* 
         * The stream providing read and write access to the Custom dictionary.
         * Informs the Lexicon which words are known during morphological
         * analysis. Words marked as custom that are NOT known are added
         * to the Custom dictionary.
         */
        std::fstream mCustomDictionaryFile;

        /*
         * The stream providing read information about the list of grammar
         * rules that must be followed.
         */
        Syntax mGrammarFile;

        /*
         * The current line number, useful for error reporting.
         */
        int mCurrentLineNumber;

        /*
         * The full current line, useful for error reporting.
         */
        std::string mCurrentLine;

        /*
         * Tokenizes input with multiple delimeters using a bitset. Therefore,
         * it only works effectively with char values 0-255.
         * Used to avoid inefficiencies with algorithms that would otherwise
         * rely on multiple getline operations.
         * 
         * @param acrInput
         *      - The text to be tokenized
         * @param acpDelims
         *      - A string containing the individual characters to scan for
         * @param arData
         *      - The data structure that will be used to store the tokens.
         *        Assumed to implement the .push_back(typename StorageType) 
         *        method (for example, std::vector).
         */
        template<typename IPushBackable>
        void tokenize(string const& acrInput, char const* acpDelims,
            IPushBackable& arData);

#pragma region Constants

        struct MorphologyStrings {
            //The set of characters encompassing a period
            static const char const mscaPeriod[LEX_STR_LENGTH];
            //The set of characters that involve a colon and an accent/apostrophe
            static const char const mscaColonAccent[LEX_STR_LENGTH];
            //The set of characters that involve a '?' and '!'
            static const char const mscaQuestionExclamation[LEX_STR_LENGTH];
            //The set of characters that must be paired with a vowel
            static const char const mscaPairedLetters[LEX_STR_LENGTH];
            //The set of valid vowel char constacters
            static const char const mscaVowels[LEX_STR_LENGTH];
            //The set of characters that involve a single 'n'
            static const char const mscaN[LEX_STR_LENGTH];
            //The set of characters that involve whitespace
            static const char const mscaWhitespace[LEX_STR_LENGTH];
            //The set of characters permitted to appear after '.'
            static const char const mscaAfterPeriod[LEX_STR_LENGTH];
            //The set of characters permitted to appear after ':' and '\''
            static const char const mscaAfterColorAccent[LEX_STR_LENGTH];
            //The set of characters permitted to appear after '?' and '!'
            static const char const mscaAfterQuestionExclamation[LEX_STR_LENGTH];
            //The set of characters permitted to appear after paired letters
            static const char const mscaAfterPairedLetters[LEX_STR_LENGTH];
            //The set of characters permitted to appear after vowel letters
            static const char const mscaAfterVowels[LEX_STR_LENGTH];
            //The set of characters permitted to appear after 'n'
            static const char const mscaAfterN[LEX_STR_LENGTH];
            //The set of characters permitted to appear after any whitespace
            static const char const mscaAfterWhitespace[LEX_STR_LENGTH];
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
        static const MorphologyStrings mscMorphologyStrings;

        /*
         * The rate at which the Lexicon will read from its input streams.
         */
        static const unsigned int mscReadRate = BUFSIZ;
#pragma endregion

    };
}