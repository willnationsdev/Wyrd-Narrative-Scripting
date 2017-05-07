/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
#include <fstream>
#include "json.hpp"
#include "wyrd.hpp"

using ParseData = std::vector<std::string>;

int main()
{
    /*
    std::string line;
    std::getline(std::cin, line);
    while (line != "quit") {

        try {
            ParseData d = wyrd::WyrdParser::parse<ParseData>(line.cbegin(), line.cend());
            for (auto item : d) {
                std::cout << item << std::endl;
            }
            std::getline(std::cin, line);
        }
        catch (std::exception e) {
            std::cout << e.what() << std::endl;
            return 0;
        }

    }
    */

    std::ifstream syntaxFile("syntax.json");

    if (!syntaxFile.is_open()) {
        assert(0 && "Could not open syntax file");
    }

    json syntax;
    syntaxFile >> syntax;
    json syntaxObject = syntax["syntax"];

    auto rules = wyrd::WyrdSyntax::generateRules(syntaxObject);
    std::string line;
    std::getline(std::cin, line);
    while (line != "quit") {

        wyrd::Tags tags = 
            wyrd::WyrdParser::parse<>(line, rules);
        for (size_t i = 0; i < tags.size(); ++i) {
            std::cout << i << ": " << tags[i] << std::endl;
        }
        std::getline(std::cin, line);
    }


    std::cin.get();
    return 0;
}
