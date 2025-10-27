import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use("/note", userRoutes);

export default app;
