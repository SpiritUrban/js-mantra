declare module 'bcryptjs';
import bcrypt from 'bcryptjs';
import { createUser } from '@/lib/services/user';
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { email, password } = req.body;
  // Хешируем пароль
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword)
  // Создаем пользователя
  const user = await createUser({ email, password: hashedPassword });
  res.status(201).json( user );
  
}

