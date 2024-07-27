import { useRouter } from 'next/router';
import CodeBlock from '@/components/organisms/CodeBlock';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const code: string = `
    function add(a, b) {
      return a + b;
    };

    const cumMixer = (cumPortions: CumPortion[]) => 
      cumPortions.reduce((backet, currentPortion) => backet + currentPortion.volume, 0);
  `;

  interface CumPortion {
    producer: string;
    volume: number;
  }

  const cumMixer = (cumPortions: CumPortion[]) =>
    cumPortions.reduce((backet, currentPortion) => backet + currentPortion.volume, 0);

  const data: CumPortion[] = [
    {
      producer: "Vasya",
      volume: 50 // 50 ml
    },
    {
      producer: "Sanya",
      volume: 60 // 60 ml
    },
    {
      producer: "Siroja",
      volume: 70 // 70 ml
    }
  ]

  console.log('Total cum volume: ', cumMixer(data));

  return (
    <div>

      <Container>

        <h1>JS Training: {id}</h1>

        <CodeBlock code={code} language="javascript" />

      </Container>

    </div>
  );
};

export default BlogPost;
