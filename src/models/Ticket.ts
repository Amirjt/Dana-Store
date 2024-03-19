import mongoose from "mongoose";
import UserModel from "./User";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    dep: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isAnswer: {
      type: Boolean,
      default: false,
    },
    isAnswered: {
      type: Boolean,
      default: false,
    },
    for: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  },
  {
    timestamps: true,
  }
);

const TicketModel = mongoose.models.Ticket || mongoose.model("Ticket", schema);

export default TicketModel;
