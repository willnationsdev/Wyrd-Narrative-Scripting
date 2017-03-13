/*
 * Author: Will Nations
 * Date Created: 01/26/2017
 * A set of common types, macros, and constants for the Wyrd scripting 
 * language.
 */
#pragma once

namespace TokiSona {

#pragma region DocumentEnumerations

    enum class DocumentSection {
        null,
        Document,
        Paragraph,
        Sentence,
        Word,
        WordComponent
    };

#pragma endregion

}
