/*
 * Author: Will Nations
 */
#pragma once
#include <assert.h>

template <typename VerifyType>
class IVerifier
{
public:

    virtual bool verify(VerifyType* toVerify) = 0;

    virtual ~IVerifier() = 0;
};