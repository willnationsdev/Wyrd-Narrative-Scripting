/*
 * Author: Will Nations
 * 
 * A Compile-Time storage interface for aggregating verification procedures.
 * Unable to dynamically add and remove Verifier types by design.
 */
#pragma once
#include "IVerifier.h"
#include "BaseCommon\EnableDownCast.h"

template <typename Implementation, typename VerifyType, typename... Verifiers>
class IAggregateVerifier : public BaseCommon::EnableDownCast<Implementation>
{
public:
    bool verify() { return self()->do_verify(); }

protected:
    template <typename VSingle, typename... VRemaining>
    void createVerifier() 
    { return self()->do_createVerifier<VSingle, VRemaining>(); }

    template <typename VSingle>
    void createVerifier() 
    { return self()->do_createVerifier<VSingle>(); }

    ~IAggregateVerifier<Implementation,VerifyType,Verifiers...>() = default;

private:
    using EnableDownCast<Implementation>::self;
};