import { note } from "../models/noteModel.js";
export const getUserNote = async (req, res) => {
  try {
    const Notes = await note.find();
    res.status(200).json(Notes);
  } catch (error) {
    console.log("fetching data failed:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
export const postUserNote = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const notes = await note.create({
      title,
      description,
      category,
    });
    res.status(201).json({ message: "New note added successfully" });
  } catch (error) {
    console.log("Note posting error:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
