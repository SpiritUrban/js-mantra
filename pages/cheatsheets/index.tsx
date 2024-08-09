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

export default function CheatSheets() {

    const data2: ISourceCard[] = [
        '/img/cheatsheets/array.jpg',
        '/img/cheatsheets/array-2.jpg',
        '/img/cheatsheets/array-3.gif',
        '/img/cheatsheets/array-4.png',

        '/img/cheatsheets/VS-shortcuts.png',
        '/img/cheatsheets/cl.png',
        '/img/cheatsheets/css-display.jpg',
        '/img/cheatsheets/css-selectors.png',
        '/img/cheatsheets/css-selectors-1.png',
        '/img/cheatsheets/date.jpeg',
        '/img/cheatsheets/date-2.jpg',
        '/img/cheatsheets/date-3.jpg',
        '/img/cheatsheets/dom-2.jpeg',
        '/img/cheatsheets/dom-3.jpeg',
        '/img/cheatsheets/dom-4.jpeg',
        '/img/cheatsheets/dom-events.jpg',
        '/img/cheatsheets/functions.jpg',
        '/img/cheatsheets/git.jpeg',
        '/img/cheatsheets/git-2.jpeg',
        '/img/cheatsheets/js-1.png',
        '/img/cheatsheets/loops.jpg',
        '/img/cheatsheets/module.jpeg',
        '/img/cheatsheets/object.jpeg',
        '/img/cheatsheets/react-native.png',
        '/img/cheatsheets/regex.jpeg',
        '/img/cheatsheets/status-codes.jpeg',
        '/img/cheatsheets/status-codes-2.jpg',
        '/img/cheatsheets/string.jpeg',
        '/img/cheatsheets/string.jpg',
    ].map(item => ({ imageUrl: item }));

    return (
        <div>

            <Container>
                <h1>CheatSheets</h1>
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
                style={{ display: 'inline-block', margin: '3rem' }}
                target='_blank'
                href="https://www.google.com/search?q=js+cheatsheet&sca_esv=bae068b56816ad3f&sca_upv=1&udm=2&biw=1536&bih=730&sxsrf=ADLYWILgOs_8v0ChqDSGqLdPu-YansZzWQ%3A1723199649400&ei=ofC1ZvWQGIOTwPAPib6Q0AY&oq=js+che&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmpzIGNoZSoCCAAyChAAGIAEGEMYigUyBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYCBgeMgYQABgIGB5IlydQnQRYuxBwAXgAkAEAmAFhoAGLAqoBATO4AQPIAQD4AQGYAgOgApoCwgIFEAAYgASYAwCIBgGSBwMyLjGgB6EQ&sclient=gws-wiz-serp">
                Продолжить поиск
            </a>

        </div>

    );
}
