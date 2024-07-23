import React from 'react';
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import nlpData from '@/data/nlp.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: #6ea170;
  margin-top: 20px;
`;

const SubsectionTitle = styled.h3`
  color: #4885b6;
  margin-top: 15px;
`;

const ContentTitle = styled.h4`
  color: #dc772a;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #bcbcbc;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
  color: #bcbcbc;
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

interface VoiceReadButtonProps {
  text: string;
}

const VoiceReadButton: React.FC<VoiceReadButtonProps> = ({ text }) => {
  return (
    <Button variant="primary" onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance(text))}>
      Voice read
    </Button>
  );
};

interface VoiceReadButton2Props {
  section: SectionItem;
}

const VoiceReadButton2: React.FC<VoiceReadButton2Props> = ({ section }) => {
  const convertSectionToText = (section: SectionItem): string => {
    let text = section.title + ". ";

    try {
      // throw new Error('test error');
      section.subsections.forEach(subsection => {
        text += subsection.title + ". ";
        subsection.content.forEach(content => {
          text += content.part + ". ";
          if (typeof content.text === 'string') {
            text += content.text + ". ";
          } else {
            for (const key in content.text) {
              if (content.text.hasOwnProperty(key)) {
                text += key + ": " + content.text[key] + ". ";
              }
            }
          }
        });
      });
    } catch (error) {
      text = 'ОШИБКА в парсинге данных!!!';
    }

    return text;
  };

  const handleVoiceRead = () => {
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      const text = convertSectionToText(section);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ru-RU'; // Set the language to Russian
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Your browser does not support speech synthesis.');
    }
  };

  return (
    <Button variant="secondary" onClick={handleVoiceRead}>
      Voice read
    </Button>
  );
};

const Section: React.FC<SectionItem> = ({ title, subsections }) => (
  <div>
    <SectionTitle>
      {title}
    </SectionTitle>
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
        <Accordion.Item eventKey={index.toString()} key={index + 'accordion'}>
          <Accordion.Header>{section.title}</Accordion.Header>
          <Accordion.Body>
            <VoiceReadButton2 section={section} />
            <Section key={index} title={section.title} subsections={section.subsections} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </Container>
);

export default App;
