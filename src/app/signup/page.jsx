"use client";

import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSignup = async () => {
    if (!form.email || !form.name || !form.password) {
      alert("Kindly fill all the fields");
      return;
    }

    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
    } else {
      await supabase.from("users").insert([
        {
          id: data.user.id,
          email: form.email,
          name: form.name,
        },
      ]);

      alert("Signup successful");
      router.push("/login");
    }
    setLoading(false)
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Sign Up
        </h2>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Full Name"
          className="w-full p-2 mb-4 bg-gray-800 text-white border rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 mb-4 bg-gray-800 text-white border rounded"
        />
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 mb-4 bg-gray-800 text-white border rounded"
        />
        <button
          className="w-full bg-blue-500 text-white py-2 mt-3 rounded hover:bg-blue-700 transition"
          onClick={handleSignup}
        >
          {
            loading ? "Signing Up..." : "Sign Up"
          }
        </button>
      </div>
    </>
  );
};

export default Signup;
