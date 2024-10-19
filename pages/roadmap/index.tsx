"use client";

import { javascriptCourse } from "@/pages/roadmap/data";
import styled from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { next, next2, next3 } from "@/lib/RTK/slices/roadMapSlice";
import { RootState } from "@/lib/RTK/store";
import Button from "react-bootstrap/Button";

const PageContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  background: black;
`;

const LeftSection = styled.section``;

const RightSection = styled.section`
  background-image: url("/img/ground.jpg");
  width: 40vw;
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

const TopicRight = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid #222;
  padding: 10px;
  border-radius: 5px;
  background-color: #0000009e;
  color: white;
`;

const TopicTitle = styled.h2`
  font-size: 1.5rem;
`;

const Subtopic = styled.div`
  margin-top: 10px;
`;

const SubtopicRight = styled.div`
  margin-top: 10px;
  color: green;
`;

const SubtopicTitle = styled.h3`
  font-size: 1.25rem;
  color: #555;
`;

const PointsList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const PointsListRight = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: pink;
`;

const PointItem = styled.li`
  margin: 5px 0;
  color: #aaa;
`;

const JavaScriptCourse: React.FC = () => {
  const dispatch = useDispatch();
  const topicPointer = useSelector(
    (state: RootState) => state.roadMap.topicPointer
  );
  const subtopicPointer = useSelector(
    (state: RootState) => state.roadMap.subtopicPointer
  );
  const pointPointer = useSelector(
    (state: RootState) => state.roadMap.pointPointer
  );

  const maxTopics = javascriptCourse.length;
  const maxSubtopics = javascriptCourse[topicPointer]?.subtopics.length || 0;
  const maxPoints =
    javascriptCourse[topicPointer]?.subtopics[subtopicPointer]?.points.length ||
    0;

  const handleNextTopic = () => {
    if (topicPointer + 1 < maxTopics) {
      dispatch(next());
    } else {
      console.log("Keine weiteren Topics verfügbar.");
    }
  };

  const handleNextSubtopic = () => {
    if (subtopicPointer + 1 < maxSubtopics) {
      dispatch(next2());
    } else {
      console.log("Keine weiteren Subtopics verfügbar.");
    }
  };

  const handleNextPoint = () => {
    if (pointPointer + 1 < maxPoints) {
      dispatch(next3());
    } else {
      console.log("Keine weiteren Points verfügbar.");
    }
  };

  return (
    <div>
      <h1>Roadmap</h1>

      {/* container */}
      <PageContainer>
        <LeftSection>
          <CourseContainer>
            <CourseTitle>Курс по JavaScript</CourseTitle>
            {javascriptCourse.map((topic, index) => (
              <Topic key={index}>
                <TopicTitle>{topic.title}</TopicTitle>
                {topic.subtopics.map((subtopic, subIndex) => (
                  <Subtopic key={subIndex}>
                    <SubtopicTitle>{subtopic.title}</SubtopicTitle>
                    <PointsList>
                      {subtopic.points.map((point, pointIndex) => (
                        <PointItem key={pointIndex}>{point.title}</PointItem>
                      ))}
                    </PointsList>
                  </Subtopic>
                ))}
              </Topic>
            ))}
          </CourseContainer>
        </LeftSection>
        <RightSection>
          {javascriptCourse
            .filter((t, i) => i <= topicPointer)
            .map((topic, index) => (
              <TopicRight key={index}>
                <h2>{topic.title}</h2>
                {index == topicPointer ? "+" : "-"}
                {topic.subtopics
                  .filter(
                    (t, i) => i <= subtopicPointer || index !== topicPointer
                  )
                  .map((subtopic, index) => (
                    <SubtopicRight key={index}>
                      <h3>{subtopic.title}</h3>
                      {index == subtopicPointer ? "+" : "-"}
                      <PointsListRight>
                        {subtopic.points
                          .filter((t, i) => i <= pointPointer)
                          .map((point, index) => (
                            <div>
                             
                             
                              {index == pointPointer ?  "+" : "-"}
                              <PointItem key={index}>{point.title}</PointItem>
                            </div>
                          ))}
                      </PointsListRight>
                    </SubtopicRight>
                  ))}
              </TopicRight>
            ))}
          <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <Button onClick={handleNextTopic}>Next Topic</Button>

            <Button onClick={handleNextSubtopic}>Next Subtopic</Button>

            <Button onClick={handleNextPoint}>Next Point</Button>
          </div>
        </RightSection>
      </PageContainer>
    </div>
  );
};

export default JavaScriptCourse;
