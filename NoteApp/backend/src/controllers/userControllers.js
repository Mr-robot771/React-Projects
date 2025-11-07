import { user } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 12;

export const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const userExist = await user.findOne({ email });
    if (userExist) {
      return res.status(409).json({ message: "User exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const users = await user.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User created", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }
    const users = await user.findOne({ email });

    if (!users) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    const isPasswordValid = await bcrypt.compare(password, users.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password!" });
    }
    if (users && isPasswordValid) {
      res.status(200).json({
        _id: users._id,
        email: users.email,
        token: generateJWTtoken(users._id),
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const generateJWTtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
