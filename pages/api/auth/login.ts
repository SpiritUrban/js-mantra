import { withSession, setLoginSession } from "@/lib/services/auth"; // Импортируем функцию withSession
import { login } from "@/lib/services/user";
import { NextApiRequest, NextApiResponse } from "next";

// Обработчик API
async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;
  const result = await login({ email, password });

  if (result.ok) {
    await setLoginSession(res, { userId: result.user._id });
  }

  res.status(201).json(result);
}

// Экспортируем обработчик с поддержкой сессий
export default withSession(handler);
