import express from "express";
import {
  userRegistration,
  loginUser,
  logoutUser,
  getUser,
} from "../controllers/userControllers.js";
import validateUser from "../middlewares/validateUser.js";
import authenticateUser from "../middlewares/authenticateUser.js";

const userRoutes = express.Router();

userRoutes.get("/:id", getUser);
userRoutes.post("/register", userRegistration);
userRoutes.post("/login", validateUser, loginUser);
userRoutes.post("/logout", logoutUser);

export default userRoutes;
