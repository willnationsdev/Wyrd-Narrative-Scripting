/*
 * Author: Will Nations
 * Date Created: 03/12/2017
 */
#pragma once
#include <string>
#include <sstream>
#include <vector>
//#include <bitset>
#include <cctype>
#include <utility>

#include <boost/phoenix/object/static_cast.hpp>
#include <boost/spirit/include/qi.hpp>
#include <boost/variant.hpp>
#include <boost/optional.hpp>
#include <boost/spirit/include/lex_lexertl.hpp>
#include <boost/spirit/include/phoenix_operator.hpp>
#include <boost/spirit/include/phoenix_statement.hpp>
#include <boost/spirit/include/phoenix_container.hpp>

#define BOOST_SPIRIT_NO_REGEX_LIB

namespace tokawaje {
    namespace grammar {

        /*
        namespace data {
            enum class Vowel {
                a = 'a', e = 'e', i = 'i', o = 'o', u = 'u', y = 'y', q = 'q'
            };
            enum class RootConsonant {
                m = 'm', n = 'n', p = 'p', k = 'k', t = 't', s = 's', v = 'v',
                l = 'l', w = 'w', j = 'j'
            };
            enum class TagConsonant {
                x = 'x', f = 'f', z = 'z', c = 'c', b = 'b'
            };
            enum class EndOfSentence {
                period = '.', exclamation = '!', question = '?', colon = ':',
                comma = ','
            };
            enum class Splice {
                comma = ','
            };

            struct Root {
                RootConsonant first;
                Vowel second;
                RootConsonant third;
            };

            BOOST_FUSION_ADAPT_STRUCT(Root,
            (boost::phoenix::static_cast_<RootConsonant>(_1), first)
            (boost::phoenix::static_cast_<Vowel>(_2), second)
            (boost::phoenix::static_cast_<RootConsonant>(_3), third)
            )

            typedef std::vector<std::string> Remaining;
            typedef Remaining UnknownSentence;
            typedef Remaining UnknownConcept;
            typedef Remaining UnknownRootOrTag;
            typedef Remaining BadGrammarPrefixWord;
            typedef std::vector<Vowel> Expression;
            typedef TagConsonant Tag;
            typedef boost::variant<Root, Tag> Spectrum;
            typedef std::tuple<Spectrum, Vowel> Concept;
            typedef std::tuple<Vowel, std::vector<Concept>> Word;
            typedef std::tuple<std::vector<Word>, std::vector<EndOfSentence>> Sentence;

        }
        */

        using namespace boost::spirit;
        using namespace boost::spirit::ascii;

        //using namespace boost::spirit::qi::symbols;
        //using namespace boost::spirit::qi::tst;
        //using namespace boost::spirit::qi::tst_map;

        //symbols<char, int>

/*
struct Dog
{
std::string Name;
bool Barks;
bool HasATail;
std::string Address;
};

dog_ = qi::lit("DOG") >> '|' >> "Name=" >> lit_   >> '|'
>> "Barks="       >> yesno_ >> '|'
>> "Has a Tail="  >> yesno_ >> '|'
>> "Address="     >> lit_
;

BOOST_FUSION_ADAPT_STRUCT(Dog,
(std::string, Name)(bool, Barks)(bool, HasATail)(std::string, Address))
*/


        /*
        template <typename Iterator>
        struct RootTagGrammar : qi::grammar<Iterator, data::Sentence> {

            RootTagGrammar() : RootTagGrammar::base_type(sentence) {

                //sentence = +word >> *endOfSentence;

                //word = vowel >> +concept;

                //concept = spectrum >> vowel;

                //spectrum = (root | tag);

                //expression = +vowel;

                root = (rootConsonant >> vowel >> rootConsonant);

                //tag = (tagConsonant >> vowel);

                rootConsonant = qi::char_("mnptkvshwlj") [ _val = 
                    boost::phoenix::static_cast_<data::RootConsonant>(_1)
                ];

                vowel = qi::char_("eaiouyq") [ _val = 
                    boost::phoenix::static_cast_<data::Vowel>(_1)
                ];

                tagConsonant = qi::char_("xfzcb") [ _val = 
                    boost::phoenix::static_cast_<data::TagConsonant>(_1)
                ];
                
                //unknownSentence = remaining;

                //unknownConcept = remaining;

                //badGrammarPrefixWord = remaining;

                //remaining = *qi::char_("*");
            }

            qi::rule<Iterator, qi::space_type, data::Sentence> sentence;
            qi::rule<Iterator, data::EndOfSentence> endOfSentence;
            //qi::rule<Iterator, qi::space_type, data::Contexts> contexts;
            //qi::rule<Iterator, qi::space_type, data::Context> context;
            qi::rule<Iterator, data::Word> word;
            //qi::rule<Iterator, data::Concepts> concepts;
            qi::rule<Iterator, data::Concept> concept;
            qi::rule<Iterator, data::Spectrum> spectrum;
            qi::rule<Iterator, data::Expression> expression;
            qi::rule<Iterator, data::Splice> splice;
            qi::rule<Iterator, data::Root> root;
            qi::rule<Iterator, data::Tag> tag;
            qi::rule<Iterator, data::RootConsonant> rootConsonant;
            qi::rule<Iterator, data::Vowel> vowel;
            qi::rule<Iterator, data::TagConsonant> tagConsonant;
            /*qi::rule<Iterator, qi::space_type, data::UnknownSentence> 
                unknownSentence;
            qi::rule<Iterator, qi::space_type, data::UnknownConcept> 
                unknownConcept;
            qi::rule<Iterator, qi::space_type, data::UnknownRootOrTag> 
                unknownRootOrTag;
            qi::rule<Iterator, qi::space_type, data::BadGrammarPrefixWord> 
                badGrammarPrefixWord;
            qi::rule<Iterator, qi::space_type, data::Remaining> remaining;*/
        //};
    }

}