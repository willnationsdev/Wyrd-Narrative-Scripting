/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include <iostream>
#include "IVerifier.h"

class LexicalVerifier : public IVerifier<std::istream>
{
public:
    LexicalVerifier() {}
    virtual ~LexicalVerifier() override {}

    virtual bool verify(std::istream *stream) override;

private:
};