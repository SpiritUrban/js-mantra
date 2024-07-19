import styled from 'styled-components';
import Source from '@/components/organisms/Source';
import SourceCard from '@/components/organisms/SourceCard';
import { ISource, ISourceCard } from '@/interfaces/index';

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

export default function GameUi() {

    const data: ISource[] = [{
        title: "Free Game Ui Images",
        imageUrl: "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
        // imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
        sourceLink: "https://www.freepik.com/free-photos-vectors/game-ui",
        description: ""
    }];

    const data2: ISourceCard[] = [
        "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-vector/monster-battle-gui-icon-cartoon-stylized-illustration-with-text-button-game-name_284645-1046.jpg?size=626&ext=jpg",
    ].map(item => ({ imageUrl: item }));

    return (
        <div>


            <Container>
                <h1>Game UI</h1>

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

            <Container2>
                {data2.map(item => (<SourceCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    imageSource={item.imageSource}
                    sourceLink={item.sourceLink}
                />)
                )}
            </Container2>

        </div>

    );
}
