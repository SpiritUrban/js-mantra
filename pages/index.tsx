/*
 * The main page. 
 * 
 * Local  : <http://http://localhost:3000/>.
 * Remote : <https://js-mantra.vercel.app/>.
 */

import dynamic from "next/dynamic";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

interface StyledProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-component'?: string;
}

const Main = styled.main`
  // padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // gap: 1rem;
  flex-direction: column;
`;

interface StyledProps {
  height?: string;
  padding?: string;
}

const ParallaxSection = styled.section.attrs<StyledProps>({
  'data-component': 'ParallaxSection',
}) <StyledProps>`
  background-image: url('/img/team-of-developers-riding-a-rocket.webp');
  height: ${(props) => props.height || '500px'};
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props) => props.padding || '2rem'};
  position: relative;
`;


const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  min-height: 100px;
  font-size: 1rem;
  align-items: center;
  padding: 2rem;
`;

const GlassCard = styled.div`
  background-color: rgb(12 13 43 / 69%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 1rem 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: fit-content;
  max-width: 50%;
  // height: calc(100% - 4rem);
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
  1px 1px 1px rgba(0, 0, 0, 0.5);

  h1 {
    text-align: center;
    color: #d570ff;
    color: #c88afb;
  }

  h2 {
    text-align: center;
    color: #e0f2ff;
    font-size: 1.5rem;
  }
`;

export default function Home() {
  return (
    <Container fluid className="bg-dark text-white min-vh-100">
      <Main>

        <ParallaxSection>
          <GlassCard>
            <h1>JS Mantra</h1>
            <h2>A space of freedom and creativity for developers</h2>
            <hr />
            <h2>Пространство свободы и творчества для разработчиков</h2>
          </GlassCard>
        </ParallaxSection>

        <ContentSection>

          <Card data-bs-theme="dark">
            <Card.Body>
              <p>
                JS Mantra is a place where every developer can unlock their potential. Here, we share experiences, resources, and secrets to make the journey of creating your own products easy and exciting. Our mission is to combine efforts so that everyone can find their place in the sun.
              </p>
              <ul>
                <li>Freedom: We believe every developer deserves the freedom to create and bring their ideas to life.</li>
                <li>Collaboration: Like a hive, we fill this space with knowledge and tools to move forward together.</li>
                <li>Results: Educational projects turn into startups, ideas into solutions, and our collective efforts into success.</li>
              </ul>
              <p>
                Join JS Mantra, where technology becomes art, and the community is a source of inspiration.
              </p>
            </Card.Body>
          </Card>


          <Card data-bs-theme="dark">
            <Card.Body>
              <p>
                JS Mantra — это место, где каждый разработчик может раскрыть свой потенциал. Здесь мы делимся опытом, ресурсами и секретами, чтобы сделать путь к созданию собственных продуктов лёгким и увлекательным. Наша миссия — объединить усилия, чтобы каждый смог создать своё место под солнцем.
              </p>
              <ul>
                <li>Свобода: Мы верим, что каждый разработчик достоин свободы создавать и воплощать свои идеи.</li>
                <li>Сотрудничество: Подобно улью, мы наполняем это пространство знаниями и инструментами, чтобы вместе двигаться вперёд.</li>
                <li>Результат: Учебные проекты превращаются в стартапы, идеи — в решения, а наши общие усилия — в успех.</li>
              </ul>
              <p>
                Присоединяйтесь к JS Mantra, где технологии становятся искусством, а сообщество — источником вдохновения.
              </p>
            </Card.Body>
          </Card>
        </ContentSection>


        <ParallaxSection height="15rem" />


        <ContentSection>

          <Card data-bs-theme="dark">
            <Card.Body>
              <h3>How to Get Started:</h3>
              <ul>
                <li>Beginner Projects: Follow our tutorials to create your first website or application.</li>
                <li>Services and Tools: Access APIs and use tools for rapid prototyping.</li>
                <li>Community: Ask questions, share feedback, and discuss ideas on our forums or through direct channels.</li>
              </ul>
              <p>
                Your journey with JS Mantra begins with a single step—explore new horizons in web development.
              </p>
              <p>
                For any questions, join our Telegram channel: <a href="https://t.me/oooclanoooo">JS-Clan</a>
              </p>
            </Card.Body>
          </Card>


          <Card data-bs-theme="dark">
            <Card.Body>
              <h3>Как начать:</h3>
              <ul>
                <li>Проекты для начинающих: Следуйте нашим урокам, чтобы создать свой первый сайт или приложение.</li>
                <li>Сервисы и инструменты: Открывайте доступ к API и используйте инструменты для быстрой прототипировки.</li>
                <li>Сообщество: Вопросы, отзывы и идеи вы можете обсудить на наших площадках для форумов или через прямые контакты.</li>
              </ul>
              <p>
                Путь на JS Mantra начинается с вашего первого шага – откройте для себя новые горизонты веб-разработки.
              </p>
              <p>
                Все вопросы в телеграм канале: <a href="https://t.me/oooclanoooo">JS-Clan</a>
              </p>
            </Card.Body>
          </Card>
        </ContentSection>


        <ParallaxSection height="10rem" />


        {/* <Image
          src="/img/A-team-of-developers-riding-a-rocket.webp"
          alt="JS Mantra"
          className="test"
          width={1000}
          height={1000}
          priority
          style={{
            borderRadius: "2rem",
          }}
        /> */}




      </Main>
    </Container>
  );
}
