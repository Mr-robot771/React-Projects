import { Router } from "express";
import { signupUser, loginUser } from "../controllers/userControllers.js";

const router = Router();

router.post("/", signupUser);
router.post("/login", loginUser);

export default router;
