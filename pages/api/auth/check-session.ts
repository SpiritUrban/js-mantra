// pages/api/session/get.ts
import { withSession } from "@/lib/services/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@/lib/services/user";

// Обработчик для получения данных из сессии
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Получаем данные из сессии
  const user = req.session.user;

  console.log('User: ',user);

  const userFromDB = await getUser({ _id: user._id });
  console.log('User from DB: ',userFromDB);

  if (user) {
    res.status(200).json({ message: "Session found", user });
  } else {
    res.status(404).json({ message: "No session found" });
  }
}

export default async function chekSession (req: NextApiRequest, res: NextApiResponse) {
  return withSession(req, res, handler);
}
