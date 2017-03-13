/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include "Interfaces\ITSNode.h"
#include "TokiSonaInterpreter\TSCommon\TokiSonaExceptions.h"

namespace TokiSona
{
    /* 
     * BaseTokiSonaNode
     * 
     * A tree organization of TokiSona text content 
     * DocumentNode
     * - ParagraphNode
     * - - SentenceNode
     * - - - WordNode
     * - - - - WordComponentNode
     */
    template <DocumentSection Current, DocumentSection Parent, 
        DocumentSection Child>
    class BaseTSNode : public ITSNode<BaseTSNode,Current,Parent,Child>
    {
    public:
        BaseTSNode(ITSNode<BaseTSNode,Current,Parent,Child> *parent,
            const std::vector<ITSNode<BaseTSNode,Current,Parent,Child>> &children) :
            parent(parent), children(std::move(children)) {}

        const std::vector<ITSNode<BaseTSNode,Child>> &do_getChildren() const 
            { return children_; }

        ITSNode<BaseTSNode,Parent>* do_getParent() const 
            { return parent_; }

        DocumentSection do_getSection() const 
            { return Current; }

        template <DocumentSection>
        const std::string do_toString() const
            { return do_toString<Current>(); }

        template <>
        const std::string do_toString<DocumentSection::Document>() const 
            { return buildToStringFromChildren(PARAGRAPH_DELIMETER); }

        template <>
        const std::string toString<DocumentSection::Paragraph>() const 
            { return buildToStringFromChildren(SENTENCE_DELIMETER); }

        template <>
        const std::string toString<DocumentSection::Sentence>() const 
            { return buildToStringFromChildren(WORD_DELIMETER); }

        template <>
        const std::string toString<DocumentSection::Word>() const 
            { return buildToStringFromChildren(WORD_COMPONENT_DELIMETER); }

        template <>
        const std::string toString<DocumentSection::WordComponent>() const 
            { return getText(); }

        const std::string getText() const { return do_getText(); }

        virtual ~BaseTSaNode() = 0;

        DefineException(TokiSonaTreeException, TokiSonaException)
        DefineException(BadNodeTypeException, TokiSonaTreeException)

        static const char PARAGRAPH_DELIMETER = '\n';
        static const char SENTENCE_DELIMETER = ' ';
        static const char WORD_DELIMETER = ' ';
        static const char WORD_COMPONENT_DELIMETER = '-';

    protected:
        virtual const std::string do_getText() const { return ""; };
        virtual void do_setText(const std::string s) {}


    private:
        const std::string buildToStringFromChildren(const char delimeter) const
        {
            std::string toReturn = "";
            for (auto wordNode : getChildren())
            {
                toReturn += wordNode.toString();
                toReturn += delimeter;
            }
            toReturn.pop_back();
            return toReturn;
        }

        ITokiSonaNode<Parent>* parent_ = nullptr;
        std::vector<ITokiSonaNode<Child>> children_ = 
            std::vector<ITokiSonaNode<Child>>();

        std::string content = "";
    };

    /*
     * DocumentNode
     * 
     * TODO: 
     */
    class DocumentNode :
        public BaseTSNode<DocumentSection::Document, 
                            DocumentSection::null,
                            DocumentSection::Paragraph>
    {
    };

    /*
     * SentenceNode
     * 
     * TODO: 
     * Can identify sentiment
     */
    class ParagraphNode :
        public BaseTSNode<DocumentSection::Paragraph, 
                            DocumentSection::Document,
                            DocumentSection::Sentence>
    {
    };

    /*
     * SentenceNode
     * 
     * TODO:
     * Add ability to look up alternative phrasings
     * Can identify sentiment
     */
    class SentenceNode :
        public BaseTSNode<DocumentSection::Sentence, 
                            DocumentSection::Paragraph,
                            DocumentSection::Word>
    {
    private:
        const std::string getText() const {};
        void setText(const std::string s) {};
    };

    /*
     * WordComponentNode
     * 
     * TODO:
     * Add ability to look up alternative phrasings
     */
    class WordNode : 
        public BaseTSNode<DocumentSection::Word,
                            DocumentSection::Sentence,
                            DocumentSection::WordComponent>
    {
    protected:
        virtual const std::string do_getText() const override
        {
            return ""; //TODO: make this return the components' text
        }

        virtual void do_setText(std::string s) override
        {
            //TODO: make this set the components' text
            //ex. setText("toki-pona");
        }
    };

    /*
     * WordComponentNode
     * 
     * TODO:
     * Add ability to look up alternative phrasings
     * Can identify adjective and adverbial meanings somehow
     */
    class WordComponentNode : 
        public BaseTSNode<DocumentSection::WordComponent,
                            DocumentSection::Word,
                            DocumentSection::null>
    {
    protected:
        virtual const std::string do_getText() const override
        {
            return text;
        }

        virtual void do_setText(std::string s) override
        {
            text = s;
        }

    private:
        std::string text;
    };

}

