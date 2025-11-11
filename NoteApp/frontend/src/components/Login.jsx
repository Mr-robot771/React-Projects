import React, { useEffect, useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const schema = z.object({
  email: z.email("Invalid email!").nonempty("Email is required"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password should be at least 8 characters long"),
});

const Login = () => {
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
      const res = await api.post("/user/login", data);
      //save token
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/noteApp"); //redirect to main page
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full lg:max-w-xl"
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
        {errors.email && (
          <p className="text-red-500 font-[475] tracking-tighter">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-lg font-medium">
          Password{" "}
        </label>
        <input
          {...register("password")}
          type="password"
          className="ring ring-gray-400 inset-shadow-lg p-4 rounded-[2rem] focus:outline-0"
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        {errors.password && (
          <p className="text-red-500 font-[475] tracking-tighter">
            {errors.password.message}
          </p>
        )}
        <p className="text-blue-600 font-medium tracking-tight self-end">
          Forget Password?
        </p>
      </div>
      <button
        className="bg-blue-600 p-3 rounded-[2rem] text-white font-medium text-[1.1rem] cursor-pointer hover:bg-blue-600/90 active:bg-blue"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex justify-center items-center">
            {" "}
            <RotatingLines
              visible={true}
              height="26"
              width="26"
              color="white"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default Login;
