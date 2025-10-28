import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../services/axiosInstance.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().nonempty("Title is required!"),
  description: z.string().nonempty("Description is required"),
  category: z.enum(["work", "study", "exercise"]),
});

const NewNote = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  async function onSubmit(data) {
    console.log(data);
    await api.post("/note", data);
    toast.success("Note added successfully!");
    reset({
      title: "",
      description: "",
      category: "",
    });
  }

  return (
    <div className="mx-30 my-5">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold text-4xl tracking-tight text-center">
          Create New Note
        </h1>
        <div>
          <label
            htmlFor="title"
            className="text-2xl font-medium tracking-tight"
          >
            Title
            <input
              {...register("title")}
              id="title"
              type="text"
              placeholder="Ex: Project Meeting Summary"
              className="border w-full px-2 py-1 text-lg rounded-[15px] border-blue-400 ring-blue-500 ring-2 focus:outline-0 "
            />
          </label>
        </div>
        <div>
          <label
            className="text-2xl font-medium tracking-tight"
            htmlFor="description"
          >
            Description
            <textarea
              {...register("description")}
              id="description"
              type="text"
              placeholder="Start writing your note here..."
              className="w-full max-h-[800px] h-20 align-text-top text-lg rounded-xl focus:outline-none border-gray-300 border-2 px-2 py-2"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="category"
            className="text-2xl font-medium tracking-tight"
          >
            Category
            <select
              {...register("category")}
              id="category"
              className="border-2 w-full px-2 py-1 text-lg rounded-[15px] border-gray-300 focus:outline-0"
              defaultValue=""
            >
              <option value="" disabled>
                Choose category
              </option>
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="exercise">Exercise</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-700 text-white w-full rounded-xl font-medium text-2xl py-2 cursor-pointer hover:bg-blue-700/90 active:bg-blue-700"
            type="submit"
          >
            Save Note
          </button>
          <button
            className="bg-gray-300 w-full rounded-xl font-medium text-2xl py-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
