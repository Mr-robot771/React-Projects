import { Router } from "express";
import { getUserNote,postUserNote,deleteNote } from "../controllers/noteControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/",protect,postUserNote);
router.get("/",protect,getUserNote);
router.delete("/:id",protect,deleteNote)

export default router;