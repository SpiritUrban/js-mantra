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

export default function Other() {

    const data = [
        {
            title: "Gachi Sound Pack",
            imageUrl: "https://www.101soundboards.com/storage/board_pictures/width/82/32659.webp?c=1596445412",
            sourceLink: "https://www.101soundboards.com/boards/32659-gachi-sound-pack",
            description: `Games have been released in North America (NA), Japan (JP), Europe (EU), and Australia (AUS) In these cases, the publishers are ordered by release date for their respective regions. This is a list of games for the Sony PlayStation Portable handheld console. See also: List of Doraemon (1979 TV series) episodes, List of downloadable PlayStation Portable games, Bara (genre), List of Azumanga Daioh episodes, List of Future Card Buddyfight episodes, Isfahan.`
        },
        {
            title: "Gachi Sound Pack 2",
            imageUrl: "https://www.101soundboards.com/storage/board_pictures/width/82/32659.webp?c=1596445412",
            sourceLink: "https://www.myinstants.com/en/search/?name=Gachi",
            description: `Games have been released in North America (NA), Japan (JP), Europe (EU), and Australia (AUS) In these cases, the publishers are ordered by release date for their respective regions. This is a list of games for the Sony PlayStation Portable handheld console. See also: List of Doraemon (1979 TV series) episodes, List of downloadable PlayStation Portable games, Bara (genre), List of Azumanga Daioh episodes, List of Future Card Buddyfight episodes, Isfahan.`
        },
        {
            title: "Explore unlimited sound effects",
            imageUrl: "https://s3.amazonaws.com/ma-content/images/2024/logo-light.png",
            sourceLink: "https://motionarray.com/browse/sound-effects/game/?sort_by=most-popular",
            description: `Instantly set the mood and tone of your videos with sound effects. Find the exact SFX you’re looking for with intuitive search filters, covering everything from transitions to gaming sound effects, human voices, city and nature sounds, futuristic sounds and more. Unlock the entire SFX library when you subscribe today.`
        },
        {
            title: "223 royalty-free error sound effects",
            imageUrl: "https://pixabay.com/static/img/public/medium_rectangle_b.png",
            sourceLink: "https://pixabay.com/sound-effects/search/error/?pagi=4",
            description: `Download error royalty-free sound effects to use in your next project. Royalty-free error sound effects. Download a sound effect to use in your next project.`
        },
        {
            title: "Звуки обезьян",
            imageUrl: "data:image/png;base64,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",
            sourceLink: "https://zvukogram.com/category/zvuki-obezyan/",
            description: `Доступные форматы для скачивания: mp3, ogg, wav. Количество звуков: 34. Длительность треков от 1 до 86 сек.`
        },
        // {
        //     title: "",
        //     imageUrl: "",
        //     sourceLink: "",
        //     description: ``
        // },
        // {
        //     title: "",
        //     imageUrl: "",
        //     sourceLink: "",
        //     description: ``
        // },
        // {
        //     title: "",
        //     imageUrl: "",
        //     sourceLink: "",
        //     description: ``
        // }
    ];

    return (
        <div>

            <Container>
                <h1>Other sources</h1>

                {data.map(item => (<Source
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    sourceLink={item.sourceLink}
                />)
                )}

            </Container>

            <a
                style={{ display: 'inline-block', margin: '3rem' }}
                target='_blank'
                href="https://www.google.com/search?q=download+short+sound+effects&sca_esv=c839f9702c677c11&sca_upv=1&sxsrf=ADLYWIJe3HljCZKhvfppV6d6raq1-p7V-A%3A1722169137280&ei=MTemZoHqELaQwPAP5ZnliQI&oq=download+short+sound&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGRvd25sb2FkIHNob3J0IHNvdW5kKgIIADIFEAAYgAQyBRAAGIAEMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHkiVTVDKCFjMMnABeAGQAQCYAWGgAdIEqgEBN7gBA8gBAPgBAZgCCKAC7QTCAgoQABiwAxjWBBhHwgIEECMYJ8ICCBAAGIAEGMsBwgIKEAAYgAQYFBiHAsICBxAjGLACGCfCAgYQABgHGB7CAgoQABgHGAoYHhgPwgIIEAAYBxgIGB6YAwCIBgGQBgiSBwM3LjGgB9ow&sclient=gws-wiz-serp">
                Продолжить поиск
            </a>

        </div>
    );
}
