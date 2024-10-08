// types/iron-session.d.ts

import { IronSession } from "iron-session";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      username: string;
    };
  }
}

// Расширяем NextApiRequest, чтобы включить свойство session
declare module "next" {
  interface NextApiRequest {
    session: IronSession;
  }
}
