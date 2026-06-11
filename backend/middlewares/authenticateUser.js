import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "Authentication token missing",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.userId);
    if (!user) {
      return res.status(400).json({ message: "User not exists" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default authenticateUser;
