/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
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

    //file
    std::ifstream file("syntax.json");
    if (!file.is_open()) {
        std::cout << "could not open file" << std::endl;
        std::cin.get();
        return 0;
    }

    json j;
    file >> j;
    for (auto item : j["syntaxConcepts"]) {
        auto value = item.size();
        std::cout << std::setw(4) << value << std::endl;
    }

    std::cin.get();
    return 0;
}