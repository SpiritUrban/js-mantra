// Главная страница приложения.
// Отображает интерфейс для входа и выхода пользователя из системы.

import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState(''); // Состояние для имени пользователя
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние авторизации

  // Обработчик входа
  const handleLogin = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    try {
      // Отправляем запрос на вход
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }), // Передаем имя пользователя
      });

      // Обрабатываем ответ
      const data = await res.json();
      if (res.ok) {
        setIsLoggedIn(data.isLoggedIn); // Устанавливаем состояние авторизации
      } else {
        alert('Login failed'); // Показываем сообщение об ошибке
      }
    } catch (error) {
      console.error('Error during login:', error); // Логируем ошибку
    }
  };

  // Обработчик выхода
  const handleLogout = async () => {
    try {
      // Отправляем запрос на выход
      const res = await fetch('/api/logout', {
        method: 'POST',
      });

      if (res.ok) {
        setIsLoggedIn(false); // Сбрасываем состояние авторизации
      } else {
        alert('Logout failed'); // Показываем сообщение об ошибке
      }
    } catch (error) {
      console.error('Error during logout:', error); // Логируем ошибку
    }
  };

  return (
    <div>
      <h1>{isLoggedIn ? `Welcome, ${username}` : 'Please Log In'}</h1>
      {!isLoggedIn ? (
        // Форма для входа
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Обновляем состояние username
            placeholder="Username"
            required
          />
          <button type="submit">Log In</button>
        </form>
      ) : (
        // Кнопка выхода
        <button onClick={handleLogout}>Log Out</button>
      )}
    </div>
  );
}
