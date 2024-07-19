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
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64505068781339.5b696111eefb1.png",
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/54b99520262343.562e871266187.jpg',
        'https://magazine.artstation.com/wp-content/uploads/2021/12/file-1.jpg',
        '',
        '',
        '',
        '',
        '',
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

            <a 
            style={{display: 'inline-block',  margin: '3rem'}}
            target='_blank'
            href="https://www.google.com/search?sca_esv=28795b6719ac1a08&sxsrf=ACQVn09iRfgFidSig7sW8K2-VhTjHaXzRg:1711450800605&q=game+ui&uds=AMwkrPsWPaPQht_mIevVgBqoY_bQXxdupPt7RWaoaAVyRa-uaZFkGOfPJY9eIAlPTd65vRe-u7m5nlbVhF571M3u32HUqLIEqCnA_Im-fQWwX7x0mcfrA5ja6ad245nbbcVAz_gKxug7HymsLCUy_qUjJWDoHE4breIQnVyZF7lzOegRH49G6tEIbvrM1koumYGl-546z1kNF5wGh7su-tUFJwg2uRq2qiszzLhJdY7lTfT-hx9stB0m2NUs8J9TA5cDOTxhDY_wSWOUrMwyqpEvXRyc7XWKtEknhiv-5sohaK8LVQS_ur0&udm=2&prmd=isvnmbtz&sa=X&sqi=2&ved=2ahUKEwjO05SI45GFAxWUQPEDHWydAkwQtKgLegQIFxAB&biw=1536&bih=738&dpr=1.25#vhid=PuIy1XHV32WjhM&vssid=mosaic">
            Продолжить поиск
            </a>

        </div>

    );
}
