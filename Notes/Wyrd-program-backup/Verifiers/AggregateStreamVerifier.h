/*
 * Author: Will Nations
 */
#pragma once
#include "TokiSonaInterpreter\Verifiers\Interfaces\IAggregateVerifier.h"
#include <iostream>
#include <fstream>
#include <vector>

typedef IVerifier<std::istream> LexicalVerifier;
typedef IVerifier<std::istream> SyntacticVerifier;

class AggregateStreamVerifierFactory
{
public:

};

class AggregateStreamVerifier
{
public:
    template <typename... Verifiers>
    AggregateStreamVerifier();

    ~AggregateStreamVerifier() {}

    template <typename Last>
    AggregateStreamVerifier* init();

    template <typename Next, typename... Remaining>
    AggregateStreamVerifier* init();

    bool verify(std::istream *stream);

private:
    // Storage for the verifiers
    std::vector<IVerifier<std::istream>*> verifiers;

    bool firstInitCall = true;
};
