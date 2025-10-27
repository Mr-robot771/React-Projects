import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  function onchange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function onSubmit() {
    e.preventDefault();
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-5">
        <h1 className="flex items-center text-[2rem] gap-2 font-bold">
          <FaUser size={30} />
          Register
        </h1>
        <p className="text-2xl font-semibold text-gray-600">
          Please create an account!
        </p>
      </section>

      <section className="flex flex-col justify-center items-center mt-5">
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onchange}
              id="name"
              placeholder="Enter your name"
              className="w-3xl border p-2 rounded-md shadow-md mb-4"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onchange}
              id="email"
              placeholder="Enter your email"
              className="w-3xl border p-2 rounded-md shadow-md mb-4"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onchange}
              id="password"
              placeholder="Enter your password"
              className="w-3xl border p-2 rounded-md shadow-md mb-4"
            />
          </div>

          <div>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onchange}
              id="password2"
              placeholder="Confirm password"
              className="w-3xl border p-2 rounded-md shadow-md mb-4"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-3xl border p-2 rounded-md shadow-md mb-4 bg-[#19183B] text-white text-15 font-semibold hover:cursor-pointer active:bg-[#201e60]"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
