import mongoose from "mongoose";

const connectToDb = () => {
  if (mongoose.connections[0].readyState) {
    return false;
  } else {
    mongoose
      .connect(process.env.MONGODB_URL || "")
      .then(() => {
        console.log("Connected to MongoDb");
      })
      .catch((err) => {
        console.log("Error while connecting database", err);
      });
  }
};

export default connectToDb;
