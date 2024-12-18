import { SessionOptions, getIronSession } from 'iron-session';
import type { NextApiRequest, NextApiResponse } from 'next';

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || 'default_fallback_secret', // Пароль для шифрования.
  cookieName: 'myapp_cookiename', // Имя куки.
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // Включаем secure-флаг только в production.
  },
};

// Вспомогательная функция для настройки сессии
export async function withSession(req: NextApiRequest, res: NextApiResponse, handler: Function) {
  const session = await getIronSession(req, res, sessionOptions);

  // Привязываем сессию к запросу
  req.session = session;

  return handler(req, res);
}
