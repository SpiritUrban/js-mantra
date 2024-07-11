import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

type PageListResponse = {
  files: string[];
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0070f3;

  &:hover {
    text-decoration: underline;
  }
`;

const PageList = () => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/get-pages')
      .then(response => response.json())
      .then((data: PageListResponse) => setPages(data.files))
      .catch(error => console.error('Error fetching pages:', error));
  }, []);

  return (
    <List>
      {pages.map((page, index) => (
        <ListItem key={index}>
          <NextLink href={`/source/${page.replace(/\.(js|jsx|ts|tsx)$/, '')}`} passHref>
            <Link>{page}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
};

export default PageList;
