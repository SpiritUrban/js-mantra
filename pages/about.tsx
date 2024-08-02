import { playSound } from '@/utils';
import { Button } from 'react-bootstrap';
import CodeBlock from '@/components/organisms/CodeBlock';



export default function About() {

  const dataForCode: string = `
    // example
  `

  return <div>

    <CodeBlock code={dataForCode} language="typescript" />

    {/* <Image
          src="/logo.svg"
          alt="JS Mantra"
          className="test"
          width={1000}
          height={1000}
          priority
          style={{
            filter: "invert(100%)",
            borderRadius: "20rem",
          }}
        /> */}




    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
      Launch vertically centered modal
    </Button> */}
  </div>
}