/*
 * Author: Will Nations
 */
#include "AggregateStreamVerifier.h"

template <typename... Verifiers>
AggregateStreamVerifier::AggregateStreamVerifier()
{
    init<Verifiers>();
}

template <typename Last>
AggregateStreamVerifier* AggregateStreamVerifier::init()
{
    if (firstInitCall)
    {
        verifiers.clear();
    }
    verifiers.push_back(move(new Last()));
    return this;
}

template <typename Next, typename... Remaining>
AggregateStreamVerifier* AggregateStreamVerifier::init()
{
    if (firstInitCall)
    {
        verifiers.clear();
    }
    verifiers.push_back(move(new Next()));
    return init<Remaining>(stream);
}

bool AggregateStreamVerifier::verify(std::istream *stream)
{
    for (auto verifier : verifiers)
    {
        if (!verifier.verify(stream))
        {
            return false;
        }
    }
    return true;
}
