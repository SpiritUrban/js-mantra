import { NextApiRequest, NextApiResponse } from 'next';
import { updateUser } from '@/lib/services/user';
import { withSession } from '@/lib/services/auth';

interface ExtendedRequest extends NextApiRequest {
  session: {
    user: {
      userId: string;
    } | null;
  };
}

export default withSession(async (req: ExtendedRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const session = req.session?.user;
  if (!session) {
    return res.status(401).end('Not authenticated');
  }

  const { userId } = session;
  const { username, password } = req.body as { username: string; password: string };

  try {
    const updatedUser = await updateUser(userId, { username, password });
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update user' });
  }
});
