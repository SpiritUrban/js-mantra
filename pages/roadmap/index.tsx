import { javascriptCourse } from "@/pages/roadmap/data";
import styled from "styled-components";
import React from "react";

const PageContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  background: black;
`;

const LeftSection = styled.section``;

const RightSection = styled.section`
background-image: url("/img/ground.jpg");
width:40vw;
`;

const CourseContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CourseTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Topic = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid #222;
  padding: 10px;
  border-radius: 5px;
  background-color: #111;
`;

const TopicTitle = styled.h2`
  font-size: 1.5rem;
 
`;

const Subtopic = styled.div`
  margin-top: 10px;
`;

const SubtopicTitle = styled.h3`
  font-size: 1.25rem;
  color: #555;
`;

const PointsList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const PointItem = styled.li`
  margin: 5px 0;
  color: #aaa;
`;

const JavaScriptCourse: React.FC = () => {
  return (
    <div>
      <h1>Roadmap</h1>

      {/*container */}
      <PageContainer>
        <LeftSection>
          <CourseContainer>
            <CourseTitle>Курс по JavaScript</CourseTitle>
            {Object.entries(javascriptCourse).map(([key, topic]) => (
              <Topic key={key}>
                <TopicTitle>{topic.title}</TopicTitle>
                {Object.entries(topic.subtopics).map(([subKey, subtopic]) => (
                  <Subtopic key={subKey}>
                    <SubtopicTitle>{subtopic.title}</SubtopicTitle>
                    <PointsList>
                      {subtopic.points.map((point, index) => (
                        <PointItem key={index}>{point}</PointItem>
                      ))}
                    </PointsList>
                  </Subtopic>
                ))}
              </Topic>
            ))}
          </CourseContainer>
        </LeftSection>
        <RightSection>RightSection</RightSection>
      </PageContainer>
    </div>
  );
};

export default JavaScriptCourse;
