import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProbider";
import { Result } from "postcss";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.text.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-pink-500 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleOnSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-white text-pink-500 font-semibold rounded-md hover:bg-pink-400 hover:text-white transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
