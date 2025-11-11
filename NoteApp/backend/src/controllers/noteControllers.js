import { note } from "../models/noteModel.js";
export const getUserNote = async (req, res) => {
  try {
    const Notes = await note.find({ user: req.user._id }); //latest notes first: .sort({createdAt: -1});
    res.status(200).json(Notes);
  } catch (error) {
    console.log("fetching data failed:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
export const postUserNote = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    if (!title || !description || !category) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const notes = await note.create({
      title,
      description,
      category,
      user: req.user.id, //from auth middleware
    });
    res.status(201).json({ message: "New note added successfully" });
  } catch (error) {
    console.log("Note posting error:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the note in one operation
    const deletedNote = await note.findByIdAndDelete(id);

    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Delete note error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;

    //validate at least one field is present for update
    if (!title || !description || !category) {
      res
        .status(400)
        .json({ message: "At least one field is required for update." });
    }
    const notes = await note.findById(id);
    if (!notes) {
      return res.status(404).json({ message: "Note not found" });
    }
    //validating user
    if (req.user._id.toString() !== notes.user.toString()) {
      res.status(403).json({ message: "You aren't authorized." });
    }

    //apply update for only provided fields
    if (title) notes.title = title;
    if (description) notes.description = description;
    if (category) notes.category = category;
    const updatedNote = await notes.save();

    return res.status(200).json({ message: "Note update success", updatedNote });
  } catch (error) {
    console.error("Patch error:",error)
    res.status(500).json({ messag: "Intenal server error" });
  }
};
