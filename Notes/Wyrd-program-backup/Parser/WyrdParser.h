/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include <string>
#include <map>
#include "Parser\Interfaces\IParser.h"
#include "TSCommon\DocumentData.h"

namespace tokisona
{
    class TokiSonaParser : public IParser
    {
    public:
        /*
         * parse
         */
        template <typename ParseMethodType>
        void parse(std::istream* stream);

    private:
        static std::map<DocumentSection, std::string> ParseDelimeters;
    };
}