import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const Section = styled.section`
    display: flex;
    gap: 1rem; /* Добавлено для промежутков между элементами */

    img {
        width: 10rem;
        border-radius: 5rem;
    }
`;

interface IllustrationProps {
    $backgroundImage: string;
}

const Illustration = styled.div<IllustrationProps>`
    flex: 15;
    height: 10rem;
    border-radius: 2rem;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: left;
    margin-top: 3rem;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    transform: perspective(200px) rotateX(20deg) rotateY(20deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: black solid 4px;

    &:hover {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const Content = styled.div`
    flex: 80;
`;

const LinkContainer = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
`;

export default function Figma() {
    const imageUrl = "https://s3-figma-plugin-images-production-sig.figma.com/plugins/carousel/img/1159123024924461424/cceee4c452d6d1ff1e357d0b15a47a6701398aec?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7CDrjIilt9WjJRrrB1iu6Nn9SMfC37tgMFNR6eOzVNGrTp70maKNBGVrPtvpWp2CRYjrv99ZyBED-kGE0ktUPQJLfEWYpNlD-SNcZfrJVpqE-QUndx7ePry8C6xnDQ2NE6~dPf5YaW53ztthINKnDIFtF5beI8zGzkoaveKprWOUbsjIT~JAL-TgfYQFmSCfqz1FDZtTITRm2pJELsOQMrLRR44ifhXRjM8pjZpZF5dIICJJ6KG0O6Yg5-7Ufhe4W-0q0SnkE6kCQr3w4WORmMGz84yM4qBQZ6s~GBvzX-Scjtk6RhdJh9CupFQWtnxrFFBQftKs83g5Q4zLVD68A__";

    return (
        <Container>
            <h1>Figma sources</h1>



            <Section>
                <Illustration $backgroundImage={imageUrl} />
                <Content>
                    <h1>HTML to Design</h1>
                    <p>HTML to Design - это плагин для Figma, который позволяет импортировать целые веб-страницы в Figma. Он преобразует HTML и CSS сайтов в редактируемые слои Figma. Это полезно для дизайнеров, которые хотят быстро создавать прототипы или системы дизайна на основе существующего веб-контента. Плагин упрощает процесс превращения веб-дизайнов в элементы Figma, что облегчает совместную работу и итерации дизайна.</p>
                </Content>
                <LinkContainer>
                    <a target="_blank" href="https://www.figma.com/community/plugin/1159123024924461424/html-to-design-import-websites-to-figma-designs-web-html-css">Link</a>
                </LinkContainer>
            </Section>
        </Container>
    );
}
