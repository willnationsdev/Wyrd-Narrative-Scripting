/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
#include "tslex.hpp"

int main()
{
    std::string input = "umina avela.";
    ts::TokawajeGrammar<std::string::iterator> tg;
    ts::data::Sentence sentence = qi::parse(input.begin(), input.end(), tg);
    std::cin.get();
    return 0;
}