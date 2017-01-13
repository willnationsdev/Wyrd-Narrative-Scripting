/*
 * Author: Will Nations
 * Date Created: 1/1/2017
 * Description: The Syntax class is responsible for reading in a syntax file 
 * containing a list of syntax rules, storing them as data, and then performing
 * checks on input strings to determine if the composition of words in those
 * strings matches the expected composition of sentences derived from the given
 * syntax rules.
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
#include <string>
#include <vector>
#include <fstream>

namespace wyrd {

    /*
     * The struct that encompasses all information regarding a particular word
     * in the Wyrd language
     */
    struct Word {

        /* 
         * Initializes the elements of an individual word (including compound
         * words). Uses a vector to receive word components.
         */
        Word(const std::vector<std::string> &aWordComponents, bool aIsCustom) : 
            mWordComponents(aWordComponents), mIsCustom(aIsCustom) {}

        /*
         * The strings that embody the word. Multiple strings imply a compound
         * word.
         */
        std::vector<std::string> mWordComponents;

        /*
         * This will let us know if the term is meant to compose a term not yet
         * associated with the existing dictionary.
         */
        const bool mIsCustom;
    };

    /*
     * A named class for referring to a particular set of Words. May eventually
     * begin attaching semantic associations with genres of sentences or
     * something.
     */
    struct Sentence {
        std::vector<Word> mWords;
    };

    /*
     * A named class for referring to a particular set of Sentences. May
     * eventually begin attaching semantic associations with genres of 
     * paragraphs or something. Leading to a logical flow of statements / 
     * thoughts when characters are talking in dialogue.
     */
    struct Paragraph {
        std::vector<Sentence> mSentences;
    };

    /*
     * So the system can recognize the meaning of a word in a sentence and
     * therefore identify a proper interpretive meaning.
     */
    enum class ESyntaxRole {
        NOUN, VERB, ADJECTIVE, ADVERB, PREPOSITION, PARTICLE, CONJUNCTION, 
        INTERJECTION
    };

    /*
     * So that the system can recognize different types of nouns and therefore
     * match them with different contexts to grasp different meanings.
     */
    enum class ENounRole {
        SUBJECT, DIRECT_OBJECT, INDIRECT_OBJECT, OBJECT_OF_PREPOSITION
    };

    /*
     * A class responsible for reading in a set of syntax rules. Given a
     * Sentence object, it can return whether that particular Sentence has
     * proper syntax or not.
     */
    class Syntax {
        std::ifstream mSyntaxFile;
    };
}