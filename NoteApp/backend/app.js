import express from "express";
import cors from "cors";
import noteRoutes from "./src/routes/noteRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
// Enable CORS before any routes
app.use(
  cors({
    origin: "https://react-projects-din6.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use("/note", noteRoutes);
app.use("/user", userRoutes);

export default app;
