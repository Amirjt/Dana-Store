import mongoose from "mongoose";
import UserModel from "./User";
import ProductModel from "./Product";

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const FavoritesModel =
  mongoose.models.Favorite || mongoose.model("Favorite", schema);

export default FavoritesModel;
