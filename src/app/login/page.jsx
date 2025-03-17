"use client";

import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   console.log("Count triggered")
  // }, [count])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all the fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful");
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-4">Login</h2>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Email"
        className="w-full p-2 mb-4 bg-gray-800 text-white border rounded"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
        className="w-full p-2 mb-4 bg-gray-800 text-white border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 mt-3 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>

      {/* <div className="mt-6">
        <h1>Count: {count}</h1>
        <button
          onClick={() => setCount(count + 5)}
        >
          Add 5
        </button>

        <br />
        <button onClick={()=> setCount(count - 3)}>
          Subtract 3
        </button>
      </div> */}
    </div>
  );
};

export default Login;
