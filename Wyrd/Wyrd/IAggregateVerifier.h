/*
 * Author: Will Nations
 * 
 * A Compile-Time storage interface for aggregating verification procedures.
 * Unable to dynamically add and remove Verifier types by design.
 */
#pragma once
#include "IVerifier.h"

template <typename VerifyType, typename... Verifiers>
class IAggregateVerifier
{
public:
    virtual bool verify() = 0;

    virtual ~IAggregateVerifier() = 0;

protected:
    template <typename VSingle, typename... VRemaining>
    virtual void createVerifier() = 0;

    template <typename VSingle>
    virtual void createVerifier() = 0;
};