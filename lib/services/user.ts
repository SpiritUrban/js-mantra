import bcrypt from "bcryptjs";
import User from "@/models/User";
import dbConnect from "@/lib/services/db";
import { UpdateQuery } from "mongoose";

// Создание пользователя
export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await dbConnect();

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return { ok: false, message: "The email is already in use" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    return { user, ok: true, message: "User successfully created" };
  } catch (error: any) {
    console.error("Error creating user:", error);
    return { ok: false, error: "An error occurred while creating user" };
  }
};

// Логин пользователя
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await dbConnect();

    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return { ok: false, message: "User does not exist" };
    }

    const isPasswordCorrect = await bcrypt.compare(password, existedUser.password);
    if (isPasswordCorrect) {
      return { ok: true, user: existedUser };
    }

    return { ok: false, message: "Wrong password" };
  } catch (error: any) {
    console.error("Error during login:", error);
    return { ok: false, error: "An error occurred while logging in" };
  }
};

// Найти пользователя по имени пользователя
export async function findUser({ username }: { username: string }) {
  try {
    await dbConnect();
    const user = await User.findOne({ username });
    return user;
  } catch (error: any) {
    console.error("Error finding user:", error);
    return null;
  }
}

// Обновить данные пользователя
export async function updateUser(
  userId: string,
  updateData: UpdateQuery<any>
) {
  try {
    await dbConnect();
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    return user;
  } catch (error: any) {
    console.error("Error updating user:", error);
    return null;
  }
}

// Удалить пользователя
export async function deleteUser(userId: string) {
  try {
    await dbConnect();
    await User.findByIdAndDelete(userId);
  } catch (error: any) {
    console.error("Error deleting user:", error);
  }
}

// Найти пользователя по любому полю
export const getUser = async (userFields: any) => {
  try {
    await dbConnect();
    const user = await User.findOne(userFields);
    return user;
  } catch (error: any) {
    console.error("Error finding user by fields:", error);
    return null;
  }
};
