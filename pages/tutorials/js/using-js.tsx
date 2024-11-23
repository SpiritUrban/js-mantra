import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function JavaScriptApplications() {
  const Tag = styled.span`
    background-color: #222;
    color: #aaa;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  `;

  interface SubItem {
    code: string;
    subTitle?: string | React.ReactNode;
    subDescription?: React.ReactNode;
  }

  interface Item {
    title: string | React.ReactNode;
    description: React.ReactNode;
    code?: string;
    subItems?: SubItem[];
  }

  interface Content {
    title: string | React.ReactNode;
    description: string;
    items: Item[];
  }

  const content: Content = {
    title: "Применение JavaScript",
    description: `JavaScript применяется во многих сферах разработки: от веб-сайтов до серверных и мобильных приложений. 
      Его гибкость делает его одним из самых востребованных языков программирования.`,
    items: [
      {
        title: "1. Веб-разработка",
        description: (
          <>
            JavaScript — основной язык для разработки интерактивных элементов веб-страниц. 
            Основные области применения:
            <ul>
              <li>Манипуляция DOM.</li>
              <li>Обработка событий пользователя.</li>
              <li>Работа с REST API и асинхронными запросами.</li>
            </ul>
          </>
        ),
        code: `
          // Пример изменения DOM элемента
          document.querySelector("#button").addEventListener("click", () => {
            document.querySelector("#title").textContent = "Вы нажали кнопку!";
          });
        `,
      },
      {
        title: (
          <>
            2. Серверные приложения с <Tag>Node.js</Tag>
          </>
        ),
        description: (
          <>
            JavaScript также используется на сервере с помощью <Tag>Node.js</Tag>. 
            Преимущества:
            <ul>
              <li>Высокая производительность благодаря движку V8.</li>
              <li>Поддержка асинхронной модели программирования.</li>
              <li>Широкий выбор библиотек и модулей через <Tag>npm</Tag>.</li>
            </ul>
          </>
        ),
        subItems: [
          {
            subTitle: "Пример создания веб-сервера:",
            code: `
              const http = require('http');
              const server = http.createServer((req, res) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Привет, сервер на Node.js!');
              });
              server.listen(3000, () => {
                console.log('Сервер запущен на http://localhost:3000');
              });
            `,
          },
        ],
      },
      {
        title: "3. Мобильные приложения",
        description: (
          <>
            JavaScript активно используется для разработки мобильных приложений с помощью библиотек и фреймворков, таких как:
            <ul>
              <li>
                <Tag>React Native</Tag>: Позволяет создавать кросс-платформенные приложения на iOS и Android.
              </li>
              <li>
                <Tag>Expo</Tag>: Платформа для упрощения разработки мобильных приложений.
              </li>
            </ul>
          </>
        ),
        subItems: [
          {
            subTitle: "Пример компонента React Native:",
            code: `
              import React from 'react';
              import { Text, View, Button } from 'react-native';

              export default function App() {
                const handlePress = () => alert("Кнопка нажата!");

                return (
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Добро пожаловать в React Native!</Text>
                    <Button title="Нажми на меня" onPress={handlePress} />
                  </View>
                );
              }
            `,
          },
        ],
      },
      {
        title: "4. Создание игр",
        description: (
          <>
            JavaScript также используется для разработки 2D и 3D игр с помощью
            таких библиотек, как <Tag>Phaser</Tag>, <Tag>Three.js</Tag>, и других.
          </>
        ),
        code: `
          // Пример использования Three.js для создания 3D-сцены
          import * as THREE from 'three';
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer();
          renderer.setSize(window.innerWidth, window.innerHeight);
          document.body.appendChild(renderer.domElement);

          const geometry = new THREE.BoxGeometry();
          const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          const cube = new THREE.Mesh(geometry, material);
          scene.add(cube);

          camera.position.z = 5;

          function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
          }
          animate();
        `,
      },
    ],
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  `;

  const TextHighlight = styled.p`
    background-color: #1e1e1e;
    color: #cacaca;
    padding: 1rem;
    border-left: 5px solid #222;
    font-size: 1.2rem;
    font-style: italic;
    border-radius: 7px;
  `;

  return (
    <Container>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.items.map((item, i) => (
        <div key={i + `contentItem`}>
          <h2>
            {item.title}
          </h2>
          <p>{item.description}</p>
          {item.subItems && item.subItems.length > 0
            ? item.subItems.map((subItem, i2) => (
                <div key={i + i2 + `subItem`}>
                  {subItem.subTitle && <h3>{subItem.subTitle}</h3>}
                  <CodeBlock code={subItem.code} language="javascript" />
                  {subItem.subDescription && <p>{subItem.subDescription}</p>}
                </div>
              ))
            : item.code && <CodeBlock code={item.code} language="javascript" />}
        </div>
      ))}

      <TextHighlight>
        JavaScript предоставляет мощные возможности для создания современных приложений — от динамических веб-страниц до игр и мобильных приложений.
      </TextHighlight>
    </Container>
  );
}

export default JavaScriptApplications;
