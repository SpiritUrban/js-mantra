import { withSession } from '@/lib/withSession';
import type { NextApiRequest, NextApiResponse } from 'next';

// Ваш обработчик logout
const logoutRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Уничтожаем сессию
  await req.session.destroy();
  return res.status(200).json({ isLoggedIn: false });
};

// Экспортируем обработчик с обёрткой
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return withSession(req, res, logoutRoute);
}
