/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
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

    std::string line;
    std::getline(std::cin, line);
    while (line != "quit") {

        std::cout << "Parsing...";
        wyrd::Tags tags = 
            wyrd::WyrdParser::parse<>(line, "syntax.json");
        std::cout << tags.size() << " tags found:" << std::endl;
        for (size_t i = 0; i < tags.size(); ++i) {
            std::cout << i << ": " << tags[i] << std::endl;
        }
        std::cout << "Awaiting new input..." << std::endl;
        std::getline(std::cin, line);
    }


    std::cin.get();
    return 0;
}
