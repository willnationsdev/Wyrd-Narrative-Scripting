/*
 *
 */
#include <iostream>
#include "TokiPona.h"

namespace tp = tokipona;

namespace tokipona
{
    void printVerification(const wyrd::Lexicon &acrLexicon, std::istream& arInput)
    {
        try
        {
            acrLexicon.verify(arInput);
        }
        catch (const wyrd::Lexicon::LexicalException &acrException)
        {
            std::cout << acrException.what() << std::endl;
            std::exit(1);
        }
    }
}

int main(int argc, char** argv)
{
    wyrd::Lexicon *spLexicon = new wyrd::Lexicon("core_dictionary.txt", 
        "custom_dictionary.txt");
    const char* scpExitKeyword = "q";

    //For each argument
    char* spArg = nullptr;
    bool sHelpRequest = false;
    for (int iArg = 0; iArg < argc; ++iArg)
    {
        spArg = argv[iArg];

        //If the argument is the start of a new option
        if ( spArg[0] == '-')
        {
            if (spArg == "-help")
            {
                std::cout << "This program confirms whether text is "
                    "grammatically correct TokiPona content. Options are "
                    "listed below:\n"
                    "No options: supply a string enclosed with double-quotes "
                    "and the program will return PASS or FAIL to standard "
                    "output.\n\t"
                    "Example: tp \"mi long\"\n"
                    "-help: instructions for the program are printed to "
                    "standard output.\n"
                    "-t: The program will run in a loop accepting new double-"
                    "quote enclosed strings and returning a PASS or a FAIL on "
                    "a newline until the input \'q\' is given.";
                return 0;
            }
            else if (spArg == "-f" || spArg == "-file")
            {
                char* spInputFileName = argv[++iArg];
                //TODO
            }
        }
    }

    if (argc == 2)
    {
        if (argv[1] == "-help")
        {
        }
        else if (argv[1] == "t")
        {

        }
    }
    else if (argc > 1)
    {
        spLexicon = new wyrd::Lexicon(argv[1]);
    }
    
    //get input repeatedly until program termination
    while (true)
    {

    }

    if (spLexicon)
    {
        delete spLexicon;
    }
    
    return 0;
}

