/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 */
#pragma once
#include "IWyrdNode.h"

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
        // Get the next node at this level. Parameter is offset to move.
        virtual IWyrdNode<Current>* next(unsigned int index = 1) override
        {
            IWyrdNode<Current>* current = this;
            for (int i = 0; i < index; ++i)
            {
                current = current->next;
            }
            return current;
        }

        // Get the previous node at this level. Parameter is offset to move.
        virtual IWyrdNode<Current>* previous(unsigned int index = 1) override
        {
            IWyrdNode<Current>* current = this;
            for (int i = 0; i < index; ++i)
            {
                current = current->previous;
            }
            return current;
        }

        // Get the first node at the level below
        virtual IWyrdNode<Child>* enter() override
        {
            return child;
        }

        // Get the containing node at the level above
        virtual IWyrdNode<Parent>* exit() override
        {
            return parent;
        }

        virtual DocumentSection getSection() override
        {
            return Current;
        }

        virtual ~BaseWyrdNode() {}

    private:
        IWyrdNode<Parent>* parent;
        IWyrdNode<Child>* child;
        IWyrdNode<Current>* next;
        IWyrdNode<Current>* previous;
    };

    class DocumentNode :
        public BaseWyrdNode<DocumentSection::Document, 
                            DocumentSection::null,
                            DocumentSection::Paragraph>
    {

    };

    class ParagraphNode :
        public BaseWyrdNode<DocumentSection::Paragraph, 
                            DocumentSection::Document,
                            DocumentSection::Sentence>
    {

    };

    class SentenceNode :
        public BaseWyrdNode<DocumentSection::Sentence, 
                            DocumentSection::Paragraph,
                            DocumentSection::Word>
    {

    };

    class WordNode : 
        public BaseWyrdNode<DocumentSection::Word,
                            DocumentSection::Sentence,
                            DocumentSection::WordComponent>
    {

    };

    class WordComponentNode : 
        public BaseWyrdNode<DocumentSection::WordComponent,
                            DocumentSection::Word,
                            DocumentSection::null>
    {

    };

}

