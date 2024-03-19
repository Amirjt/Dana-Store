import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", schema);

export default CategoryModel;
