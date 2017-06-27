/*
 * Author: Will Nations
 * 
 * Note: Derived from the work of TemplateRex from the URL:
 * http://stackoverflow.com/questions/14323595/best-way-to-declare-an-interface-in-c11
 * 
 * Date Created: 02/26/2017
 * Description: A base class CRTP template for C++ interfaces.
 */
#pragma once

namespace BaseCommon {

    template<typename Derived>
    class EnableDownCast
    {
    private:
        typedef EnableDownCast Base;
    public:
        Derived const* self() const
        {
            // casting "down" the inheritance hierarchy
            return static_cast<Derived const*>(this);
        }

        Derived* self()
        {
            return static_cast<Derived*>(this);
        }
    protected:
        // disable deletion of Derived* through Base*
        // enable deletion of Base* through Derived*
        ~EnableDownCast() = default; // C++11 only, use ~enable_down_cast() {} in C++98
    };
}