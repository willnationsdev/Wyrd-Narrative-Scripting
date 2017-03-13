/*
 * Author: Will Nations
 * Date Created: 1/26/2017
 * Description: An implementation of the Syntax class
 */

#include "Syntax.h"

namespace wyrd
{
    Syntax::Syntax(const std::string& pSyntaxFileName)
    {
        mSyntaxFile.open(pSyntaxFileName);
        if (!mSyntaxFile.is_open())
        {
            throw SyntaxFileNotFoundException(
                "The Custom Dictionary with file name \"" + 
                std::string(pSyntaxFileName) +
                "\" could not be opened.");
        }
    }

    const char Syntax::DEFAULT_SYNTAX_FILENAME[] = { "syntax.txt" };
}
