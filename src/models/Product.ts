import mongoose from "mongoose";
import CommentModel from "./Comment";

const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
    },
    shortdesc: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    off: {
      type: Number,
      default: 0,
      min: 0,
    },
    colors: [
      {
        type: String,
        required: true,
      },
    ],
    images: [
      {
        type: String,
        required: true,
      },
    ],
    rating: {
      type: Number,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    longdesc: {
      type: String,
      required: true,
    },
    details: {
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      weight: {
        type: Number,
        min: 0,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      storage: {
        type: String,
        required: true,
      },
      ram: {
        type: String,
        required: true,
      },
      cpu: {
        type: String,
        required: true,
      },
      gpu: {
        type: String,
        required: true,
      },
      specialOptions: [
        {
          type: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", Product);

export default ProductModel;
