/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include <iostream>

class IParser
{
public:
    virtual ~IParser() = 0;

    template <typename ParseMethodType>
    virtual void parse(std::istream* stream, ParseMethodType* method) = 0;
};