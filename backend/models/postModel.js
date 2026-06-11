import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    title: { type: String, require: true, trim: true },
    content: { type: String, require: true, trim: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
  { timestamps: true },
);
const postModel = mongoose.model("Post", postSchema);
export default postModel;
