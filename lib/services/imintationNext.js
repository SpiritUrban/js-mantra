//SESSION_SECRET=your_super_secret_password
// lib/withSession.js
//ich muss verstehen was die req und res  Objekte beim BackEnd ,und was sit Session in Request von NExtjs


import { withIronSessionApiRoute } from 'iron-session/next';

export const sessionOptions = {
  password: process.env.SESSION_SECRET, // Stelle sicher, dass du ein sicheres Passwort verwendest
  cookieName: 'myapp_cookiename',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // nur über HTTPS in Produktion
  },
};

export function withSession(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}
  


// pages/api/login.js
import { withSession } from '../../lib/withSession';

const loginRoute = async (req, res) => {
  const { username } = req.body;

  // Führe hier deine Authentifizierungslogik durch
  if (username) {
    req.session.user = {
      username,
    };
    await req.session.save();
    res.status(200).json({ isLoggedIn: true });
  } else {
    res.status(400).json({ isLoggedIn: false });
  }
};

export default withSession(loginRoute);




// pages/api/logout.js
import { withSession } from '../../lib/withSession';

const logoutRoute = async (req, res) => {
  req.session.destroy();
  res.status(200).json({ isLoggedIn: false });
};

export default withSession(logoutRoute);





// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    setIsLoggedIn(data.isLoggedIn);
  };

  const handleLogout = async () => {
    await fetch('/api/logout');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>{isLoggedIn ? `Welcome, ${username}` : 'Please Log In'}</h1>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button type="submit">Log In</button>
        </form>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}
    </div>
  );
}


