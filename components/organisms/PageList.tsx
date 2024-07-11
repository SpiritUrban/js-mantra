// components/PageList.tsx
import { useEffect, useState } from 'react';

type PageListResponse = {
  files: string[];
};

const PageList = () => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/get-pages')
      .then(response => response.json())
      .then((data: PageListResponse) => setPages(data.files))
      .catch(error => console.error('Error fetching pages:', error));
  }, []);

  return (
    <ul>
      {pages.map((page, index) => (
        <li key={index}>
          <a href={`/source/${page.replace(/\.(js|jsx|ts|tsx)$/, '')}`}>{page}</a>
        </li>
      ))}
    </ul>
  );
};

export default PageList;
