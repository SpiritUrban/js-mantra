import { withSession, setLoginSession } from "@/lib/services/auth"; // Импорт функций для работы с сессиями
import { login as userLogin } from "@/lib/services/user"; // Переименуем login для ясности
import { NextApiRequest, NextApiResponse } from "next";

// Обработчик API
async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  // Разрешаем только метод POST
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;

  // Проверяем наличие полей email и password
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Аутентификация пользователя
    const result = await userLogin({ email, password });

    if (result.ok) {
      // Устанавливаем сессию
      await setLoginSession(req, res, { _id: result.user._id });
      return res.status(201).json(result);
    } else {
      return res.status(401).json({ error: result.message || "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Экспортируем обработчик с обёрткой сессии
export default withSession(handler);
