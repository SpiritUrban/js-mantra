//import bcrypt from "bcryptjs";
import { login } from "@/lib/services/user";
import { NextApiRequest, NextApiResponse } from "next";
import { getLoginSession } from "@/lib/services/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  const sessionUser = await getLoginSession(req);

  if (sessionUser) {
    res.status(200).json({ user: sessionUser });
  } else {
    res.status(401).json({ message: "User not authenticated" });
  }
  
    /*
     if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
    */
  
 // res.status(201).json("result");
}
