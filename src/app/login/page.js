"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/dashboard",
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class=" max-w-xs m-auto bg-indigo-100 rounded p-5">   
<form  onSubmit={submitHandler}>
<div>
  <label className="block mb-2 text-indigo-500" for="username">  Email address</label>
  <input className="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"  type="email"
                id="email_field"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
</div>
<div>
  <label className="block mb-2 text-indigo-500" for="password">Password</label>
  <input className="form-control w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" 
   value={password}
   id="password_field"
   onChange={(e) => setPassword(e.target.value)}
  />
</div>
<div>          
  <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"   onClick={submitHandler}/>
</div>       
</form>
</div>

       
  );
};

export default Login;
