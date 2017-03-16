/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
#include "tslex.hpp"

int main()
{
	std::string input = "o moku! mi moku kin.\nnimi-sina seme? nimi-mi li Will.\n";
	int eol = 1;
	int component = 12;
	int compDelim = 2;
	int eos = 4;
	int any = 8;
	//ts::tslex::TSDocument doc = ts::tslex::parse(input);
	std::cout << ts::parse(input) << std::endl;
	std::cin.get();
	return 0;
}