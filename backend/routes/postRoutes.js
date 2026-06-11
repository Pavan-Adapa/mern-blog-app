import express from "express";
import authenticateUser from "../middlewares/authenticateUser.js";
import {
  createPost,
  getPosts,
  getPostsById,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";

const postRoutes = express.Router();

postRoutes.post("/", authenticateUser, createPost);
postRoutes.get("/", getPosts);
postRoutes.get("/:id", getPostsById);
postRoutes.put("/:id", authenticateUser, updatePost);
postRoutes.delete("/:id", authenticateUser, deletePost);

export default postRoutes;
