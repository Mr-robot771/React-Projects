import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "//127.0.0.1:27017/noteApp"
    );
    console.log("mongodb connected");
  } catch (error) {
    console.error(error, "mongodb connection failed");
    process.exit(1);
  }
};
