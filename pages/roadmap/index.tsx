"use client";

import { javascriptCourse } from "@/data/roadmap/_data";
import styled from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { next, next2, next3, set2, set3 } from "@/lib/RTK/slices/roadMapSlice";
import { RootState } from "@/lib/RTK/store";
import Button from "react-bootstrap/Button";
import QuestionPanel from "@/components/organisms/QuestionPanel";
import Link from "next/link";
import { TiLink } from "react-icons/ti";

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
  a {
    font-size: 1.3rem;
    margin-left: 1rem;
  }
`;

const JavaScriptCourse: React.FC = () => {
  const dispatch = useDispatch();
  const isClient = typeof window !== "undefined";

  const topicPointer = useSelector(
    (state: RootState) => (isClient ? state.roadMap?.topicPointer : 0)
  );
  const subtopicPointer = useSelector(
    (state: RootState) => (isClient ? state.roadMap?.subtopicPointer : 0)
  );
  const pointPointer = useSelector(
    (state: RootState) => (isClient ? state.roadMap?.pointPointer : 0)
  );
  
  

  const currentPoint = () => {
    return javascriptCourse[topicPointer].subtopics[subtopicPointer].points[
      pointPointer
    ];
  };

  const handleNextPoint = () => {
    const currentSubtopicList = javascriptCourse[topicPointer].subtopics;
    const currentPointList = currentSubtopicList[subtopicPointer].points;

    if (pointPointer + 1 < currentPointList.length) {
      dispatch(next3());
      return;
    }

    if (subtopicPointer + 1 < currentSubtopicList.length) {
      dispatch(next2());
      dispatch(set3(0));
      return;
    }

    if (topicPointer + 1 < javascriptCourse.length) {
      dispatch(next());
      dispatch(set2(0));
      dispatch(set3(0));
      return;
    }

    alert("finito");
  };

  return (
    <div>
      <h1>Roadmap</h1>

      {/* container */}
      <PageContainer>
        <LeftSection>
          <CourseContainer>
            <CourseTitle>Курс по JavaScript</CourseTitle>
            { javascriptCourse?.map((topic, topicIndex) => (
              <Topic key={`topic-${topicIndex}`}>
                <TopicTitle>{topic.title}</TopicTitle>
                {topic.subtopics.map((subtopic, subIndex) => (
                  <Subtopic key={`subtopic-${topicIndex}-${subIndex}`}>
                    <SubtopicTitle>{subtopic.title}</SubtopicTitle>
                    <PointsList>
                      {subtopic.points.map((point, pointIndex) => (
                        <PointItem
                          key={`point-${topicIndex}-${subIndex}-${pointIndex}`}
                        >
                          {point.title}
                          {point.link && (
                            <Link href={point.link} passHref target="_black">
                              <TiLink />
                              </Link>
                          )}
                        </PointItem>
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
            .map((topic, topicIndex) => (
              <TopicRight key={`right-topic-${topicIndex}`}>
                <h2>{topic.title}</h2>
                {topic.subtopics
                  .filter(
                    (t, i) => i <= subtopicPointer || topicIndex < topicPointer
                  )
                  .map((subtopic, subIndex) => (
                    <SubtopicRight
                      key={`right-subtopic-${topicIndex}-${subIndex}`}
                    >
                      <h3>{subtopic.title}</h3>
                      <PointsListRight>
                        {subtopic.points
                          .filter(
                            (t, i) =>
                              i <= pointPointer ||
                              topicIndex < topicPointer ||
                              subIndex < subtopicPointer
                          )
                          .map((point, pointIndex) => (
                            <PointItem
                              key={`right-point-${topicIndex}-${subIndex}-${pointIndex}`}
                            >
                              {point.title}
                            </PointItem>
                          ))}
                      </PointsListRight>
                    </SubtopicRight>
                  ))}
              </TopicRight>
            ))}
          <QuestionPanel onNextPoint={handleNextPoint} point={currentPoint()} />

          <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <Button onClick={handleNextPoint}>Next Point</Button>
          </div>
        </RightSection>
      </PageContainer>
    </div>
  );
};

export default JavaScriptCourse;
