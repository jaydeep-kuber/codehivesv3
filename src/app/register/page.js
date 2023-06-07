"use client";

import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/register", {
        redirect: true,
        name,
        email,
        password,
        callbackUrl: "/login",
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class=" max-w-xs m-auto bg-indigo-100 rounded p-5">   
 
     
          <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4 block  text-indigo-500">Register</h1>

            <div className="form-outline mb-4">
              <label className="form-label block mb-2 text-indigo-500" htmlFor="name_field">
                Name
              </label>
              <input
                type="text"
                id="name_field"
                className="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label block mb-2 text-indigo-500" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label block mb-2 text-indigo-500" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4 block  text-indigo-500 "
            onClick={submitHandler}
            >
              Register
            </button>
          </form>
        </div>
  
  );
};

export default Register;
