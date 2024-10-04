import { withIronSessionApiRoute } from "iron-session";

// Опции для сессии
const sessionOptions = {
  password: process.env.SESSION_PASSWORD || "супер-длинный-случайный-пароль-32-символа",
  cookieName: "myapp_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production", // secure=true в продакшене
  },
};

// Обертка для маршрутов API с поддержкой сессии
export function withSession(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

// Установка сессии пользователя
export async function setLoginSession(res, session) {
  try {
    res.session.user = session;  
    await res.session.save();    
  } catch (error) {
    console.error("Ошибка при сохранении сессии:", error);
    throw new Error("Ошибка при установке сессии.");
  }
}

// Получение сессии пользователя
export async function getLoginSession(req) {
  try {
    return req.session.user;  // Возвращение данных из сессии
  } catch (error) {
    console.error("Ошибка при получении сессии:", error);
    return null;
  }
}
