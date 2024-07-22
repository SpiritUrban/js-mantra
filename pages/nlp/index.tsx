import React from 'react';
import styled from 'styled-components';
import nlpData from '@/data/nlp.json';

import Accordion from 'react-bootstrap/Accordion';




const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: #4CAF50;
  margin-top: 20px;
`;

const SubsectionTitle = styled.h3`
  color: #2196F3;
  margin-top: 15px;
`;

const ContentTitle = styled.h4`
  color: #FF5722;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

interface ContentItem {
  part: string;
  text: string | { [key: string]: string };
}

interface SubsectionItem {
  title: string;
  content: ContentItem[];
}

interface SectionItem {
  title: string;
  subsections: SubsectionItem[];
}

const Content: React.FC<ContentItem> = ({ part, text }) => {
  if (typeof text === 'object') {
    return (
      <div>
        <ContentTitle>{part}</ContentTitle>
        <List>
          {Object.keys(text).map((key, index) => (
            <ListItem key={index}>
              <strong>{key}:</strong> {text[key]}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  return (
    <div>
      <ContentTitle>{part}</ContentTitle>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

const Subsection: React.FC<SubsectionItem> = ({ title, content }) => (
  <div>
    <SubsectionTitle>{title}</SubsectionTitle>
    {content.map((item, index) => (
      <Content key={index} part={item.part} text={item.text} />
    ))}
  </div>
);

const Section: React.FC<SectionItem> = ({ title, subsections }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {subsections.map((subsection, index) => (
      <Subsection key={index} title={subsection.title} content={subsection.content} />
    ))}
  </div>
);

const App: React.FC = () => (
  <Container>
    <h1>НЛП Книга</h1>

    <Accordion data-bs-theme="dark">

      {(nlpData as { sections: SectionItem[] }).sections.map((section, index) => (

        <Accordion.Item eventKey={index.toString()} key={index + 'accordion'} >
          <Accordion.Header>{section.title}</Accordion.Header>
          <Accordion.Body>
            <Section key={index} title={section.title} subsections={section.subsections} />
          </Accordion.Body>
        </Accordion.Item>
      ))}

    </Accordion>

    {/* {(nlpData as { sections: SectionItem[] }).sections.map((section, index) => (
      <Section key={index} title={section.title} subsections={section.subsections} />
    ))} */}


  </Container>
);

export default App;
