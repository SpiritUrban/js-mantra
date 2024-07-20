"use client";

import styled from 'styled-components';
import Source from '@/components/organisms/Source';
import FigmaFrame from '@/components/organisms/FigmaFrame';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export default function Figma() {

    const data = [{
        title: "HTML to Design",
        imageUrl: "https://s3-figma-plugin-images-production-sig.figma.com/plugins/carousel/img/1159123024924461424/cceee4c452d6d1ff1e357d0b15a47a6701398aec?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7CDrjIilt9WjJRrrB1iu6Nn9SMfC37tgMFNR6eOzVNGrTp70maKNBGVrPtvpWp2CRYjrv99ZyBED-kGE0ktUPQJLfEWYpNlD-SNcZfrJVpqE-QUndx7ePry8C6xnDQ2NE6~dPf5YaW53ztthINKnDIFtF5beI8zGzkoaveKprWOUbsjIT~JAL-TgfYQFmSCfqz1FDZtTITRm2pJELsOQMrLRR44ifhXRjM8pjZpZF5dIICJJ6KG0O6Yg5-7Ufhe4W-0q0SnkE6kCQr3w4WORmMGz84yM4qBQZ6s~GBvzX-Scjtk6RhdJh9CupFQWtnxrFFBQftKs83g5Q4zLVD68A__",
        sourceLink: "https://www.figma.com/community/plugin/1159123024924461424/html-to-design-import-websites-to-figma-designs-web-html-css",
        description: "HTML to Design - это плагин для Figma, который позволяет импортировать целые веб-страницы в Figma. Он преобразует HTML и CSS сайтов в редактируемые слои Figma. Это полезно для дизайнеров, которые хотят быстро создавать прототипы или системы дизайна на основе существующего веб-контента. Плагин упрощает процесс превращения веб-дизайнов в элементы Figma, что облегчает совместную работу и итерации дизайна."
    }];

    return (
        <Container>
            <h1>Figma sources</h1>

            {data.map(item => (<Source
                key={item.title}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                sourceLink={item.sourceLink}
            />)
            )}


<FigmaFrame id="25-145"/>
<FigmaFrame id="0-1"/>
        </Container>
        
    );
}
