import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/generateToken.js";

const userRegistration = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please enter all the details" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      username,
      message: "User registration Successfull",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = req.user;
    const token = createToken({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // MUST be true in production (HTTPS)
      sameSite: "none", // REQUIRED for cross-site cookies
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ success: true, message: `Welcome back ${user.username}` });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logout successfull" });
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export { userRegistration, loginUser, logoutUser, getUser };
