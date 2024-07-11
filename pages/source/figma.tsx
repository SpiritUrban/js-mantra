import Card from 'react-bootstrap/Card';

export default function Figma() {
    return (
        <div>
            <h1>Figma</h1>

            <Card  data-bs-theme="dark">
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>

            <section>
                <h1>HTML to Design</h1>
                <p>HTML to Design - это плагин для Figma, который позволяет импортировать целые веб-страницы в Figma. Он преобразует HTML и CSS сайтов в редактируемые слои Figma. Это полезно для дизайнеров, которые хотят быстро создавать прототипы или системы дизайна на основе существующего веб-контента. Плагин упрощает процесс превращения веб-дизайнов в элементы Figma, что облегчает совместную работу и итерации дизайна.</p>
                <a target="_blank" href="https://www.figma.com/community/plugin/1159123024924461424/html-to-design-import-websites-to-figma-designs-web-html-css">Link</a>
            </section>
        </div>
    );
}


