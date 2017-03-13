/*
 * Author: Will Nations
 * Date Created: 01/26/2017
 * A set of base Exceptions for the Wyrd Narrative Engine
 */
#pragma once
#include <string>

namespace TokiSona
{

#pragma region Exceptions

#define DefineException(Derived, Base) \
        class Derived : public Base\
        {\
        public:\
            Base::Base;\
\
        protected:\
            virtual std::string getName() const override\
                { return "Derived"; }\
        };

    /*
     * A base class for all TokiSona-related exceptions.
     * They each have a base message stating the type of exception they are,
     * and then a more detailed follow-up message that explains what was
     * happening when the error occurred. The follow-up message is provided
     * to the constructor.
     */
    class TokiSonaException : std::exception
    {
    public:
        /*
         * Custom Constructor for string literals
         *
         * @params acpMessage
         *      - the follow-up message to accompany the base message
         */
        TokiSonaException(const char* acpMessage) : mcpMessage(acpMessage) {}

        /*
         * Custom Constructor for string objects
         *
         * @params acMessage
         *      - the follow-up message to accompany the base message
         */
        TokiSonaException(const std::string &acMessage) :
            mcpMessage(acMessage.c_str()) {}

        /*
         * Reports to standard output the type of error that occurred and what
         * specific information about the error can be provided.
         *
         * Preconditions:
         *      - getBaseMessage() does not return nullptr
         *      - mcpMessage is not a nullptr
         * Postconditions:
         *      - None
         * Return: a string containing an error report.
         */
        const char* what() const override
        {
            return (std::string(getBaseMessage()) + '\n' +
                mcpMessage).c_str();
        }

        /*
         * Returns the name of the current exception.
         */
        virtual std::string getName() const { return "TokiSonaException"; };

    protected:
        //Do not make a default constructor publicly available.
        TokiSonaException() {}

        /*
         * Provides a Base Message stating the type of error that occurred.
         * Expected format is "An error of type [class name] occurred."
         */
        std::string getBaseMessage() const
        {
            return "Error: " + getName() + " occurred.";
        }

        /*
         * Simple setter for the mcpMessage member variable.
         */
        void setMessage(const char* acMessage) { mcpMessage = acMessage; }

    private:
        /*
         * The logging message to be displayed for debugging purposes.
         */
        const char* mcpMessage;
    };

    /*
     * Notifies users that a null pointer was evaluated.
     */
    class NullPointerException : public TokiSonaException
    {
    public:
        //Inherits constructors
        TokiSonaException::TokiSonaException;

        /*
         * Provides name access
         */
        virtual std::string getName() const override
        {
            return "NullPointerException";
        }
    };
#pragma endregion
}
