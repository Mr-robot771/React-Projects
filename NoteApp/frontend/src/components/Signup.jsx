import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../services/axiosInstance";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";


const schema = z.object({
  email: z.email("Invalid email").nonempty("Email is required!"),
  password: z
    .string()
    .nonempty("Password is required!")
    .min(8, "Password must be at least 8 characters long!"),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  async function onSubmit(data) {
    try {
      console.log(data);
      await api.post("/user", data);
      toast.success("Signup successful!");
      reset({
        email: "",
        password: "",
      });
      navigate("/?form=login")

    } catch (error) {
      // Show the specific error message from the backend
      if (error.response?.status === 409) {
        toast.error("Email already exists. Please use a different email.");
      } else {
        toast.error(error.response?.data?.message || "Signup failed");
      }
      console.error("Signup error:", error.response?.data);
    }
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="ring ring-gray-400 inset-shadow-lg p-4 rounded-[2rem] focus:outline-0"
          placeholder="Enter your email"
          autoComplete="email"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="password" className="text-lg font-medium">
          Password{" "}
        </label>
        <input
          {...register("password")}
          type="password"
          className="ring ring-gray-400 inset-shadow-lg p-4 rounded-[2rem] focus:outline-0"
          placeholder="Enter your password"
          autoComplete="new-password"
        />
      </div>
      <button
        className="bg-blue-600 p-3 rounded-[2rem] text-white font-medium text-[1.1rem] cursor-pointer hover:bg-blue-600/90 active:bg-blue-600"
        type="submit"
      >
        Sign Up
      </button>
      <div className="flex items-center gap-4 my-4">
        <hr className="flex-1 text-gray-400" />
        <span className="text-gray-600">Or continue with</span>
        <hr className="flex-1 text-gray-400" />
      </div>
      <button className=" p-3 rounded-[2rem] text-gray-700 font-medium inset-shadow-lg ring-1 ring-gray-400 flex justify-center items-center gap-3 cursor-pointer hover:bg-gray-200 active:bg-white">
        <FcGoogle /> Google
      </button>
      <button className=" p-3 rounded-[2rem] text-gray-700 font-medium inset-shadow-lg ring-1 ring-gray-400 flex justify-center items-center gap-3 cursor-pointer hover:bg-gray-200 active:bg-white">
        <VscGithubInverted /> Github
      </button>
      <p className="text-gray-600 text-center">
        By continuing, you agree to our{" "}
        <span className="text-blue-700">Terms of Service.</span>
      </p>
    </form>
  );
};

export default Signup;
