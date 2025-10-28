import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
// Enable CORS before any routes
app.use(
  cors({
    origin: "http://localhost:3000", // Remove trailing slash
    credentials: true,
  })
);
app.use(express.json());
app.use("/note", userRoutes);

export default app;
