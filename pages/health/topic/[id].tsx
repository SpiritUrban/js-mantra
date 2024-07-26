import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import { textToSpeech } from '@/utils/textToSpeech';


interface CommonPinchPoint {
  region: string;
  cause: string;
}

interface ExerciseDescription {
  type: string;
  details: string;
}

interface Exercise {
  name: string;
  description: string | ExerciseDescription[];
}

interface OrganizedText {
  greeting: string;
  causes: string;
  nervous_problems: string;
  anatomy: string;
  common_pinch_points: CommonPinchPoint[];
  first_aid: string;
  exercises: Exercise[];
  conclusion: string;
}

interface VideoData {
  organized_text: OrganizedText;
}

const Container = styled.div`
  margin: 2rem auto;
  padding: 20px;
  background-color: #222;
  border-radius: 8px;
  max-width: 800px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #666;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  color: #777;
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2em;
  color: #888;
  margin-top: 15px;
`;

const PointTitle = styled.h4`
  font-size: 1.1em;
  color: #999;
  margin-top: 10px;
`;

const ExerciseTitle = styled.h4`
  font-size: 1.1em;
  color: #999;
  margin-top: 10px;
`;

const ExerciseSubTitle = styled.h5`
  font-size: 1em;
  color: #aaa;
  margin-top: 5px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #999;
  line-height: 1.5;
`;

const LoadingMessage = styled.div`
  font-size: 1.2em;
  color: #ccc;
`;

const convertSectionToText = (section: VideoData): string => {
  let text = '';

  try {
    const {
      greeting,
      causes,
      nervous_problems,
      anatomy,
      common_pinch_points,
      first_aid,
      exercises,
      conclusion
    } = section.organized_text;

    text += greeting + '. ';
    text += causes + '. ';
    text += nervous_problems + '. ';
    text += anatomy + '. ';

    common_pinch_points.forEach(point => {
      text += point.region + ': ' + point.cause + '. ';
    });

    text += first_aid + '. ';

    exercises.forEach(exercise => {
      text += exercise.name + '. ';
      if (typeof exercise.description === 'string') {
        text += exercise.description + '. ';
      } else {
        exercise.description.forEach(detail => {
          text += detail.type + ': ' + detail.details + '. ';
        });
      }
    });

    text += conclusion + '. ';

    console.log(text);
  } catch (error) {
    text = 'ОШИБКА в парсинге данных!!!';
  }

  return text;
};

const handleVoiceRead = (videoData: VideoData) => {
  const text = convertSectionToText(videoData);
  textToSpeech(text);
};

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    if (id) {
      import(`@/data/health-topics/${id}.json`)
        .then((data) => {
          setVideoData(data.default as VideoData);
        })
        .catch((err) => {
          console.error("Failed to load data:", err);
        });
    }
  }, [id]);

  if (!videoData) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <Container>
      <Button variant="secondary" onClick={() => handleVoiceRead(videoData)}>
        Voice read
      </Button>
      <br />
      <br />
      <Title>{videoData.organized_text.greeting}</Title>
      <SubTitle>Причины онемения пальцев</SubTitle>
      <Paragraph>{videoData.organized_text.causes}</Paragraph>
      <SectionTitle>Нервные проблемы</SectionTitle>
      <Paragraph>{videoData.organized_text.nervous_problems}</Paragraph>
      <SectionTitle>Анатомия нервов</SectionTitle>
      <Paragraph>{videoData.organized_text.anatomy}</Paragraph>
      <SectionTitle>Частые места пережатия нервов</SectionTitle>
      {videoData.organized_text.common_pinch_points.map((point, index) => (
        <div key={index}>
          <PointTitle>{point.region}</PointTitle>
          <Paragraph>{point.cause}</Paragraph>
        </div>
      ))}
      <SubTitle>Первая помощь и упражнения</SubTitle>
      <Paragraph>{videoData.organized_text.first_aid}</Paragraph>
      {videoData.organized_text.exercises.map((exercise, index) => (
        <div key={index}>
          <ExerciseTitle>{exercise.name}</ExerciseTitle>
          {Array.isArray(exercise.description) ? (
            exercise.description.map((desc, i) => (
              <div key={i}>
                <ExerciseSubTitle>{desc.type}</ExerciseSubTitle>
                <Paragraph>{desc.details}</Paragraph>
              </div>
            ))
          ) : (
            <Paragraph>{exercise.description}</Paragraph>
          )}
        </div>
      ))}
      <SubTitle>Заключение</SubTitle>
      <Paragraph>{videoData.organized_text.conclusion}</Paragraph>
    </Container>
  );
};

export default BlogPost;
