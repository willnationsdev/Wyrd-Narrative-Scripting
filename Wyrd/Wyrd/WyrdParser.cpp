/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#include "WyrdParser.h"

namespace wyrd
{
    std::map<DocumentSection,std::string> 
        WyrdParser::ParseDelimeters = {
        { DocumentSection::Document, "" },
        { DocumentSection::Paragraph, "\r\n" },
        { DocumentSection::Sentence, ".!?:" },
        { DocumentSection::Word, " " },
        { DocumentSection::WordComponent, "-" }
    };

    template <typename ParseMethodType>
    void WyrdParser::parse(std::istream* stream)
    {
        ParseMethodType
        method->parse(stream);
    }
}