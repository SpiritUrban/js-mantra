//import bcrypt from "bcryptjs";
import { login } from "@/lib/services/user";
import { NextApiRequest, NextApiResponse } from "next";
import {setLoginSession} from "@/lib/services/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { email, password } = req.body;
  // const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);
  const result = await login({ email, password });
  if(result.ok ) await setLoginSession(res, { userId: result.user._id });
  res.status(201).json(result);
}
