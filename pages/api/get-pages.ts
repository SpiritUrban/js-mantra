// pages/api/get-pages.ts
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'pages/api/pages-list.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const pages = JSON.parse(fileContents);

  res.status(200).json(pages);
}
