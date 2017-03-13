/*
 * Author: Will Nations
 * Date Created: 02/18/2017
 * 
 * An interface for the 
 */
#pragma once
#include "TokiSonaInterpreter\TSCommon\DocumentData.h"
#include "BaseCommon\EnableDownCast.h"
#include <string>
#include <vector>

namespace TokiSona
{
    template <typename Implementation, DocumentSection Current>
    class ITSNode : public BaseCommon::EnableDownCast<Implementation>
    {
    public:
        typedef TSTreeNodeTypeDepth0 
            ITSNode<Implementation, DocumentSection::Document>;
        typedef TSTreeNodeTypeDepth1 
            ITSNode<Implementation, DocumentSection::Paragraph>;
        typedef TSTreeNodeTypeDepth2 
            ITSNode<Implementation, DocumentSection::Sentence>;
        typedef TSTreeNodeTypeDepth3 
            ITSNode<Implementation, DocumentSection::Word>;
        typedef TSTreeNodeTypeDepth4 
            ITSNode<Implementation, DocumentSection::WordComponent>;

        template <DocumentSection Section>
        const DocumentSection getParentSection() const 
        { return DocumentSection::null; }

        template <>
        const DocumentSection getParentSection<DocumentSection::null>() const
        { return DocumentSection::null; }

        template <>
        const DocumentSection getParentSection<DocumentSection::Document>()
        const { return DocumentSection::null; }

        template <>
        const DocumentSection getParentSection<DocumentSection::Paragraph>()
        const { return DocumentSection::Document; }

        template <>
        const DocumentSection getParentSection<DocumentSection::Sentence>()
        const { return DocumentSection::Paragraph; }

        template <>
        const DocumentSection getParentSection<DocumentSection::Word>()
        const { return DocumentSection::WordComponent; }

        template <>
        const DocumentSection 
            getParentSection<DocumentSection::WordComponent>()
        { return DocumentSection::null; }

        // Get the first node at the level below
        const std::vector<ITSNode<Implementation,DocumentSection>> 
            &getChildren() const
        { 
            return self()->do_getChildren();
        }

        // Get the containing node at the level above
        ITSNode<Implementation,DocumentSection>* getParent() const
        {
            return self()->do_getParent();
        }

        Current getSection() const
        {
            return self()->do_getSection();
        }

        const std::string toString() const
        {
            return self()->do_toString<Current>();
        }

        std::string getText() const
        {
            return self()->do_getText();
        }

    protected:
        ~ITSNode<Implementation, DocumentSection>() = default;
    private:
        using BaseCommon::EnableDownCast<Implementation>::self;
    };
}