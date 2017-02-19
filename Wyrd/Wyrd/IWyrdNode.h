/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include "Common.h"
#include <string>

namespace wyrd
{

    template <DocumentSection>
    class IWyrdNode
    {
    public:

        // Get the next node at this level. Parameter is offset to move.
        virtual IWyrdNode<DocumentSection>* next(unsigned int) = 0;

        // Get the previous node at this level. Parameter is offset to move.
        virtual IWyrdNode<DocumentSection>* previous(unsigned int) = 0;

        // Get the first node at the level below
        virtual IWyrdNode<DocumentSection>* enter() = 0;

        // Get the containing node at the level above
        virtual IWyrdNode<DocumentSection>* exit() = 0;

        virtual DocumentSection getDocumentSection() = 0;

        virtual ~IWyrdNode<DocumentSection>() = 0;
    };
}