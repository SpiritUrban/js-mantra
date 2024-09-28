import bcrypt from "bcryptjs";

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/js-mantra");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const existedUser = await User.findOne({ email });
    console.log(existedUser, !!existedUser);
    if (existedUser) {
      return { ok: false, message: "the email is engaged" };
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("register", password, hashedPassword);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      return { user, ok: true, message: "User is successful created" };
    }
  } catch (error: any) {
    return { error: "An error occurred while creating user" };
  }
};
// $2a$10$a61ldDGQNe54l/TAiYiwI.rQ5u82BJicNk4RE96f5chcNRYSFF5Xe

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const existedUser = await User.findOne({ email });
    // console.log(existedUser, !!existedUser);
    if (existedUser) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existedUser.password
      );
      console.log("login", password, existedUser.password, isPasswordCorrect);
      if (isPasswordCorrect) {
        return { ok: true, user: existedUser };
      } else {
        return { ok: false, message: "wrong password " };
      }
    } else {
      return { ok: false, message: "the user no existed" };
    }
  } catch (error: any) {
    return { error: "An error occurred while creating user" };
  }
};

//mongodb://mongo:egYemlCbHfDOGFoVyMSevwsYEVpfloCU@mongodb.railway.internal:27017

//https://railway.app/project/33026279-98c4-4c2e-abe6-20dd389a1c8b/service/e7803c58-1a80-49b9-9023-32de3eb16adb/variables
