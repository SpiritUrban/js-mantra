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
    console.log(existedUser,!!existedUser)
    if (existedUser) {
      return { ok: false, message: "the email is engaged" };
    } else {
      const user = new User({ email, password });
      await user.save();
      return user;
    }
  } catch (error: any) {
    return { error: "An error occurred while creating user" };
  }
};

//mongodb://mongo:egYemlCbHfDOGFoVyMSevwsYEVpfloCU@mongodb.railway.internal:27017

//https://railway.app/project/33026279-98c4-4c2e-abe6-20dd389a1c8b/service/e7803c58-1a80-49b9-9023-32de3eb16adb/variables
