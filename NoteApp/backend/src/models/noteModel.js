import mongoose, { Schema } from "mongoose";
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"Users",
    },
  },
  {
    timestamps: true,
  }
);

export const note = mongoose.model("Notes", noteSchema);
