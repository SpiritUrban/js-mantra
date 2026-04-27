import { NextApiRequest, NextApiResponse } from 'next';
import { updateUser } from '@/lib/services/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.body;
  const { username, password } = req.body as { username: string; password: string };

  try {
    const updatedUser = await updateUser(userId, { username, password });
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update user' });
  }
}
