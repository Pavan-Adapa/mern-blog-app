import express from "express";
import postModel from "../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const user = req.user;
    const { title, content } = req.body;
    const newPost = new postModel({ title, content, author: user._id });
    await newPost.save();
    res
      .status(200)
      .json({ success: true, message: "Post created Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.status(200).json({ success: true, posts });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getPostsById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findOne({ _id: id });
    res.status(200).json({ success: true, post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const { title, content } = req.body;
    await postModel.updateOne(
      { _id: id, author: user._id },
      { $set: { title, content } },
    );
    res
      .status(200)
      .json({ success: true, message: "Post updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    await postModel.deleteOne({ _id: id, author: user._id });
    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export { createPost, getPosts, getPostsById, updatePost, deletePost };
