import { playSound } from '@/utils';
import { Button } from 'react-bootstrap';
import CodeBlock from '@/components/organisms/CodeBlock';



export default function About() {

  const dataForCode: string = `
    // example
  `

  return <div>

    <CodeBlock code={dataForCode} language="typescript" />


    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
      Launch vertically centered modal
    </Button> */}
  </div>
}