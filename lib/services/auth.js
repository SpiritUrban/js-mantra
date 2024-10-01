
import { withIronSessionApiRoute } from 'iron-session/next';

const sessionOptions = {
  password: process.env.SESSION_PASSWORD || "sdsdsdsdjdisncdndjncsdjncdjnc dmkjcn",
  cookieName: 'myapp_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withSession(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export async function setLoginSession(res, session) {
  res.session.user = session;
  await res.session.save();
}

export async function getLoginSession(req) {
  return req.session.user;
}