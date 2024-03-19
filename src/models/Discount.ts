import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
  },
  maxuse: {
    type: Number,
    required: true,
  },
  uses: {
    type: Number,
    default: 0,
  },
});

const DiscountModel =
  mongoose.models.Discount || mongoose.model("Discount", schema);

export default DiscountModel;
