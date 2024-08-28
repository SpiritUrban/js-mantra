import styled from "styled-components";
import Source from "@/components/organisms/Source";
import TrainingCard from "@/components/organisms/TrainingCard";
import { ISource, ISourceCard, ITrainingCard } from "@/interfaces/index";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Training() {
  const data2: ITrainingCard[] = [
    {
      title: "Cum Mixer",
      imageUrl: "/img/cum-work.webp",
      // imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
      sourceLink: "./training/cum-work",
      description: "",
      soundClick: "",
    },
    {
      title: "Dick Splitter",
      imageUrl: "/img/dick-splitter.webp",
      // imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
      sourceLink: "./training/dick-splitter",
      description: "",
      soundClick: "/sound/monkey.mp3",
    },
    {
      title: "Cum Filter",
      imageUrl: "/img/cum-filter.webp",
      // imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
      sourceLink: "./training/cum-filter",
      description: "",
      soundClick: "/sound/monkey.mp3",}
  ];

  return (
    <div>
      <Container>
        <h1>JS Training</h1>
      </Container>

      <Container2>
        {data2.map((item) => (
          <TrainingCard
            key={item.title}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            imageSource={item.imageSource}
            sourceLink={item.sourceLink}
            soundClick={item.soundClick}
          />
        ))}
      </Container2>

      <a
        style={{ display: "inline-block", margin: "3rem" }}
        target="_blank"
        href="https://www.google.com/search?sca_esv=28795b6719ac1a08&sxsrf=ACQVn09iRfgFidSig7sW8K2-VhTjHaXzRg:1711450800605&q=game+ui&uds=AMwkrPsWPaPQht_mIevVgBqoY_bQXxdupPt7RWaoaAVyRa-uaZFkGOfPJY9eIAlPTd65vRe-u7m5nlbVhF571M3u32HUqLIEqCnA_Im-fQWwX7x0mcfrA5ja6ad245nbbcVAz_gKxug7HymsLCUy_qUjJWDoHE4breIQnVyZF7lzOegRH49G6tEIbvrM1koumYGl-546z1kNF5wGh7su-tUFJwg2uRq2qiszzLhJdY7lTfT-hx9stB0m2NUs8J9TA5cDOTxhDY_wSWOUrMwyqpEvXRyc7XWKtEknhiv-5sohaK8LVQS_ur0&udm=2&prmd=isvnmbtz&sa=X&sqi=2&ved=2ahUKEwjO05SI45GFAxWUQPEDHWydAkwQtKgLegQIFxAB&biw=1536&bih=738&dpr=1.25#vhid=PuIy1XHV32WjhM&vssid=mosaic"
      >
        Продолжить поиск ... (Придумать!)
      </a>
    </div>
  );
}
