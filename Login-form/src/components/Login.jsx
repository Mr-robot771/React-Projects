import { useState } from "react";
import validator from "validator";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleEmail(event) {
    const emailInput = event.target.value;
    setError(validator.isEmail(emailInput));
    setEmail(emailInput);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={handleSubmit}>
          <div className="text-black flex flex-col justify-center items-center shadow-lg bg-gray-200 p-5 rounded-sm">
            <h1 className="text-3xl mb-5 font-bold">Login</h1>

            <div className="flex mb-3 flex-col gap-y-1">
              <label htmlFor="email">Email:</label>
              <input
                className="border px-2 py-1 rounded-md "
                type="text"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={handleEmail}
                autoFocus
              />
              {error === false && (
                <p className="text-red-600">Invalid Email!</p>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password">Password:</label>
              <input
                className="border px-2 py-1 rounded-md"
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button
              className="border px-4 py-1 bg-blue-700 border-none text-white font-bold rounded-md hover:cursor-pointer hover:bg-blue-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
