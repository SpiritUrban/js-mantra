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
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const result = await login({ email, password });

    if (result.ok) {
      await setLoginSession(req, res, { _id: result.user._id });
      return res.status(201).json(result);
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Экспортируем обработчик
export default async function(req: NextApiRequest, res: NextApiResponse) {
  return withSession(req, res, handler);
}
