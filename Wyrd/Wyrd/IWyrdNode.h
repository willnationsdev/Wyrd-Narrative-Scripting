/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include "Common.h"
#include <string>
#include <vector>

namespace wyrd
{

    template <DocumentSection>
    class IWyrdNode
    {
    public:

        // Get the first node at the level below
        virtual const std::vector<IWyrdNode<DocumentSection>> &getChildren() const = 0;

        // Get the containing node at the level above
        virtual IWyrdNode<DocumentSection>* getParent() const = 0;

        virtual DocumentSection getSection() const = 0;

        virtual std::string toString() const = 0;

        virtual std::string getContent() const = 0;

        virtual ~IWyrdNode<DocumentSection>() = 0;
    };
}