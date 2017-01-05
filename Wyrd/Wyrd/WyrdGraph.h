/*
 * Author: Will Nations, @willnations
 * Date Created: 12/05/2016
 * 
 * A graph that contains information about the syntax and semantics of Wyrd
 * terms, including both Core and Custom terms.
 * 
 * Variable Prefix Guide:
 * Tier 1, ownership (pick one):
 * - m: M-ember: belongs to a class.
 * - a: p-A-rameter: belongs to a function's parameter list.
 * - s: S-tack: belongs to the stack.
 * Tier 2, features (listed after tier 1, in the listed order)
 * - s: Static: var is static
 * - c: Const: var is constant
 * - v: Volatile: var is volatile
 * Tier 3, type of variable - not type of data, (pick one)
 * -  : [Blank]: var is a value representation
 * - p: Pointer: var is a pointer, (multiple p's for pointer to pointer, etc.)
 * - r: Reference: var is a reference type, i.e. typename &var
 * - a: Array: var is a statically-defined array, i.e. typename var[];
 *
 * Prefixing Examples:
 * - acrVar  => variable Var passed into function as const reference.
 * - mpVar   => variable Var is a member variable and pointer value.
 * - scppVar => variable Var is allocated on the stack, a const pointer to 
 *              another pointer.
 */
#pragma once

namespace wyrd
{

}
