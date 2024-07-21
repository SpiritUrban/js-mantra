import styled from 'styled-components';
import Source from '@/components/organisms/Source';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export default function ReactPage() {

  interface Sourcs {
    title: string;
    imageUrl?: string;
    imageSource?: string;
    sourceLink: string;
    description: string;
  }

  const data: Sourcs[] = [
    {
    title: 'awesome-web-react',
    imageUrl: "https://awesome-web-react.js.org/img/awesome-web-react.svg",
    // imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
    sourceLink: "https://awesome-web-react.js.org/",
    description: "This site provides a list with examples of libraries and components that you can use to develop web pages and apps with React without any build tools."
},
{
  title: 'TanStack',
  imageUrl: "https://tanstack.com/_build/assets/logo-color-100w-lPbOTx1K.png",
  // imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
  sourceLink: "https://tanstack.com/",
  description: "TanStack — это набор высококачественных библиотек с открытым исходным кодом для веб-разработчиков. Он включает в себя утилиты для управления состоянием, получения данных, маршрутизации, построения таблиц и форм. Основные продукты: TanStack Query, Table, Router и Virtual. Эти инструменты помогают повысить эффективность и производительность веб-приложений. Партнеры"
}
];

return (
    <Container>
        <h1>React Sources</h1>

        {data.map(item => (<Source
            key={item.title}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            imageSource={item.imageSource}
            sourceLink={item.sourceLink}
        />)
        )}

    </Container>
);
}
