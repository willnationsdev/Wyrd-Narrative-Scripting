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

#include <boost/spirit/include/qi.hpp>
#include <boost/variant.hpp>
#include <boost/optional.hpp>
#include <boost/spirit/include/lex_lexertl.hpp>
#include <boost/spirit/include/phoenix_operator.hpp>
#include <boost/spirit/include/phoenix_statement.hpp>
#include <boost/spirit/include/phoenix_container.hpp>

#define BOOST_SPIRIT_NO_REGEX_LIB

namespace ts {

    namespace data {
        typedef std::vector<char> Remaining;
        typedef Remaining UnknownSentence;
        typedef Remaining UnknownConcept;
        typedef Remaining UnknownRootOrTag;
        typedef Remaining BadGrammarPrefixWord;
        typedef char TagConsonant;
        typedef char Vowel;
        typedef char RootConsonant;
        typedef char Precision;
        typedef char Tag;
        typedef std::tuple<char> Root;
        typedef boost::variant<boost::variant<Root,Tag>,UnknownRootOrTag> PartialConcept;
        typedef boost::variant<std::pair<PartialConcept,Precision>,UnknownConcept> FullConcept;
        typedef std::vector<FullConcept> Word;
        typedef char GrammarPrefix;
        typedef boost::optional<char> Comma;
        typedef std::vector<Vowel> Expression;
        typedef boost::variant<std::tuple<GrammarPrefix,Word,Comma>,Expression,BadGrammarPrefixWord> GrammarWord;
        typedef std::vector<GrammarWord> Context;
        typedef char EndOfSentence;
        typedef boost::variant<std::pair<Context,std::vector<EndOfSentence>>,UnknownSentence> Sentence;
    }

    using namespace boost::spirit;
    using namespace boost::spirit::ascii;

    template <typename Iterator>
    struct TokawajeGrammar : qi::grammar<Iterator, data::Sentence> {
        template <typename TokenDef>
        TokawajeGrammar(TokenDef const& tok)
            : TokawajeGrammar::base_type(start) {

            sentence =
                context >> *endOfSentence |
                unknownSentence;

            endOfSentence = 
                '.' | '?' | '!' | ':' | ',' | ';' | '|';

            context = 
                *grammarWord;

            grammarWord =
                (grammarPrefix >> word >> ?comma) |
                expression |
                badGrammarPrefixWord;

            expression =
                +vowel;

            comma =
                ',';

            grammarPrefix =
                'u' | 'a' | 'i' | 'e' | 'o';

            word =
                +(fullConcept);

            fullConcept =
                partialConcept >> precision | 
                unknownConcept;

            partialConcept =
                (root | tag) | 
                unknownRootOrTag;

            root =
                rootConsonant >> Vowel >> rootConsonant;

            tag =
                tagConsonant;

            rootConsonant =
                'm' | 'n' | 'p' | 't' | 'k' | 'v' | 's' | 'h' | 'w' | 'l' |
                'j';

            vowel =
                'e' | 'a' | 'i' | 'o' | 'u' | 'y' | 'q';

            tagConsonant =
                'x' | 'f' | 'z' | 'c' | 'b';

            unknownSentence = 
                remaining;

            unknownConcept = 
                remaining;

            badGrammarPrefixWord = 
                remaining;

            remaining =
                *qi::char_("*");
        }

        qi::rule<Iterator, qi::space_type, data::Sentence> sentence;
        qi::rule<Iterator, data::EndOfSentence> endOfSentence;
        qi::rule<Iterator, qi::space_type, data::Context> context;
        qi::rule<Iterator, data::GrammarWord> grammarWord;
        qi::rule<Iterator, data::Expression> expression;
        qi::rule<Iterator, data::Comma> comma;
        qi::rule<Iterator, data::GrammarPrefix> grammarPrefix;
        qi::rule<Iterator, data::Word> word;
        qi::rule<Iterator, data::FullConcept> fullConcept;
        qi::rule<Iterator, data::PartialConcept> partialConcept;
        qi::rule<Iterator, data::Root> root;
        qi::rule<Iterator, data::Tag> tag;
        qi::rule<Iterator, data::Precision> precision;
        qi::rule<Iterator, data::RootConsonant> rootConsonant;
        qi::rule<Iterator, data::Vowel> vowel;
        qi::rule<Iterator, data::TagConsonant> tagConsonant;
        qi::rule<Iterator, data::UnknownSentence> unknownSentence;
        qi::rule<Iterator, data::UnknownConcept> unknownConcept;
        qi::rule<Iterator, data::UnknownRootOrTag> unknownRootOrTag;
        qi::rule<Iterator, data::BadGrammarPrefixWord> badGrammarPrefixWord;
    };

}