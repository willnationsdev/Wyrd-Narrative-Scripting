/*
 * Author: Will Nations
 * Date Created: 02/27/2017
 */
#include <iostream>
#include "tslex.hpp"

int main()
{
	std::string input = "o moku! mi moku kin.\nnimi-sina seme? nimi-mi li Will.";
	//ts::tslex::TSDocument doc = ts::tslex::analyze(input);
	ts::parse(input);
	std::cin.get();
	return 0;
}