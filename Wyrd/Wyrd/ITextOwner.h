/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include <string>

class ITextOwner
{
    // Get the text of this node as a string
    virtual std::string getText() = 0;

    // Set the string text of this node
    virtual void setText(std::string) = 0;
};
