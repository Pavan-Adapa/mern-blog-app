import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true, unique: true },
    password: { type: String, require: true, trim: true },
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
