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
        ['/img/cheatsheets/array-2.jpg', 'Array 2'],
        ['/img/cheatsheets/array-3.gif', 'Array 3'],
        ['/img/cheatsheets/array-4.png', 'Array 4'],
    
        ['/img/cheatsheets/VS-shortcuts.png', 'VS Shortcuts'],
        ['/img/cheatsheets/cl.png', 'CL'],
        ['/img/cheatsheets/css-display.jpg', 'CSS Display'],
        ['/img/cheatsheets/css-selectors.png', 'CSS Selectors'],
        ['/img/cheatsheets/css-selectors-1.png', 'CSS Selectors 1'],
        ['/img/cheatsheets/date.jpeg', 'Date'],
        ['/img/cheatsheets/date-2.jpg', 'Date 2'],
        ['/img/cheatsheets/date-3.jpg', 'Date 3'],
        ['/img/cheatsheets/dom-2.jpeg', 'DOM 2'],
        ['/img/cheatsheets/dom-3.jpeg', 'DOM 3'],
        ['/img/cheatsheets/dom-4.jpeg', 'DOM 4'],
        ['/img/cheatsheets/dom-events.jpg', 'DOM Events'],
        ['/img/cheatsheets/functions.jpg', 'Functions'],
        ['/img/cheatsheets/git.jpeg', 'Git'],
        ['/img/cheatsheets/git-2.jpeg', 'Git 2'],
        ['/img/cheatsheets/js-1.png', 'JS 1'],
        ['/img/cheatsheets/loops.jpg', 'Loops'],
        ['/img/cheatsheets/module.jpeg', 'Module'],
        ['/img/cheatsheets/object.jpeg', 'Object'],
        ['/img/cheatsheets/react-native.png', 'React Native'],
        ['/img/cheatsheets/regex.jpeg', 'Regex'],
        ['/img/cheatsheets/status-codes.jpeg', 'Status Codes'],
        ['/img/cheatsheets/status-codes-2.jpg', 'Status Codes 2'],
        ['/img/cheatsheets/string.jpeg', 'String'],
        ['/img/cheatsheets/string.jpg', 'String'],
    ]
    .map(item => ({ imageUrl: item[0], title: item[1] }));

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
