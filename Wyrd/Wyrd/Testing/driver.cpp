/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
#include "tslex.hpp"
#include <boost/spirit/include/qi_symbols.hpp>

using boost::spirit::qi::symbols;

int main()
{
    std::string input = "m";

    symbols<char, int> sym;

    sym.add("min");

    
    //tokawaje::grammar::RootTagGrammar<std::string::iterator> grammar;
    //tokawaje::grammar::data::Sentence sentence;
    //boost::spirit::qi::parse(input.begin(), input.end(), grammar, sentence);
    std::cin.get();
    return 0;
}