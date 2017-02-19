/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include "IWyrdNode.h"
#include "ITextOwner.h"

namespace wyrd
{
    /* 
     * BaseWyrdNode
     * 
     * A tree organization of a Wyrd text content 
     * Maintains constants for our current level, the level above, and the 
     * level below.
     */
    template <DocumentSection Current, DocumentSection Parent, 
        DocumentSection Child>
    class BaseWyrdNode : public IWyrdNode<DocumentSection>
    {
    public:
        BaseWyrdNode(IWyrdNode<Parent> *parent,
            const std::vector<IWyrdNode<Child>> &children) :
            parent(parent), children(std::move(children)) {}

        // Get the first node at the level below
        virtual const std::vector<IWyrdNode<Child>> &getChildren() const override
        {
            return children;
        }

        // Get the containing node at the level above
        virtual IWyrdNode<Parent>* getParent() const override
        {
            return parent;
        }

        virtual DocumentSection getSection() const override
        {
            return Current;
        }

        virtual std::string toString() const = 0;

        virtual ~BaseWyrdNode() = 0;

        DefineException(WyrdTreeException, WyrdException)
        DefineException(BadNodeTypeException, WyrdTreeException)

    private:
        IWyrdNode<Parent>* parent = nullptr;
        std::vector<IWyrdNode<Child>> children = 
            std::vector<IWyrdNode<Child>>();

        std::string content = "";

    };

    class DocumentNode :
        public BaseWyrdNode<DocumentSection::Document, 
                            DocumentSection::null,
                            DocumentSection::Paragraph>
    {

        virtual std::string toString() const override
        {
            return "";
        }
    };

    class ParagraphNode :
        public BaseWyrdNode<DocumentSection::Paragraph, 
                            DocumentSection::Document,
                            DocumentSection::Sentence>
    {

        virtual std::string toString() const override
        {
            return "";
        }
    };

    class SentenceNode :
        public BaseWyrdNode<DocumentSection::Sentence, 
                            DocumentSection::Paragraph,
                            DocumentSection::Word>
    {

        virtual std::string toString() const override
        {
            return "";
        }
    };

    /*
     * WordComponentNode
     * 
     * TODO: add ability to look up alternative phrasings
     */
    class WordNode : 
        public BaseWyrdNode<DocumentSection::Word,
                            DocumentSection::Sentence,
                            DocumentSection::WordComponent>
    {

        virtual std::string toString() const override
        {
            std::string toReturn = "";
            for (int i = 0; i < getChildren().size(); ++i)
            {
                toReturn += (i ? "" : "-") + getChildren()[i].toString();
            }
            return toReturn;
        }

    };

    /*
     * WordComponentNode
     * 
     * TODO: add ability to look up alternative phrasings
     * Can identify adjective and adverbial meanings somehow
     */
    class WordComponentNode : 
        public BaseWyrdNode<DocumentSection::WordComponent,
                            DocumentSection::Word,
                            DocumentSection::null>,
        public ITextOwner
    {

        virtual std::string toString() const override
        {
            return getText();
        }

        virtual std::string getText() const override
        {
            return text;
        }

        virtual void setText(std::string s) override
        {
            text = s;
        }

    private:
        std::string text;
    };

}

