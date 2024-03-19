import mongoose from "mongoose";
import ProductModel from "./Product";
import UserModel from "./User";

const Comment = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: Number,
      default: 0,
    },
    reply: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    isReply: {
      type: Boolean,
      default: false,
    },
    replyFor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", Comment);

export default CommentModel;
