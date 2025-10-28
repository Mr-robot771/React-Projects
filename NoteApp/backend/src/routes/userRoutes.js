import { Router } from "express";
import { getUserNote,postUserNote } from "../controllers/userControllers.js";

const router = Router();

router.post("/",postUserNote);
router.get("/",getUserNote);

export default router;