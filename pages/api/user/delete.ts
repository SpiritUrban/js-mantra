import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser } from '@/lib/services/user'; // Функция для удаления пользователя из базы данных
import { getLoginSession } from '@/lib/services/auth'; // Функция для получения текущей сессии

interface ExtendedSession {
  userId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const session = (await getLoginSession(req)) as ExtendedSession | null;
  if (!session) {
    return res.status(401).end('Not authenticated');
  }

  const { userId } = session;

  try {
    // Удаляем пользователя
    await deleteUser(userId);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
}
