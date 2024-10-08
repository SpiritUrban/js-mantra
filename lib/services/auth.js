import { getIronSession } from "iron-session";

// Опции для сессии
const sessionOptions = {
  password: process.env.SESSION_PASSWORD || "супер-длинный-случайный-пароль-32-символа",
  cookieName: "myapp_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production", // secure=true в продакшене
  },
};

// Обертка для маршрутов API с поддержкой сессии
export async function withSession(req, res, handler) {
  const session = await getIronSession(req, res, sessionOptions);
  req.session = session; // Присваиваем сессию объекту req
  return handler(req, res);
}

// Установка сессии пользователя
export async function setLoginSession(req, res, sessionData) {
  try {
    req.session.user = sessionData;  
    await req.session.save(); // Сохраняем сессию
  } catch (error) {
    console.error("Ошибка при сохранении сессии:", error);
    throw new Error("Ошибка при установке сессии.");
  }
}

// Получение сессии пользователя
export async function getLoginSession(req) {
  try {
    return req.session.user || null;  // Возвращаем данные пользователя из сессии
  } catch (error) {
    console.error("Ошибка при получении сессии:", error);
    return null;
  }
}
