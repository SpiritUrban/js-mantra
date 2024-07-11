// pages/api/get-pages.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDevelopment) {
    const directoryPath = path.join(process.cwd(), 'pages/source');
  
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read directory' });
      }

      const pageFiles = files.filter(file => file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'));
    
      res.status(200).json({ files: pageFiles });
    });
  } else {
    const filePath = path.join(process.cwd(), 'pages/api/pages-list.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read pages list' });
      }

      const pages = JSON.parse(data);
      res.status(200).json(pages);
    });
  }
}
