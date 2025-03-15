"use client"

import { supabase } from "@/utils/supabase";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Signup = () => {
//   const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSignup= async()=>{
    if(!form.email || !form.name || !form.password){
        alert("Kindly fill all the fields")
        return;
    }

    // setLoading(true)

    const {data, error} = await supabase.auth.signUp({
        email: form.email,
        password: form.password
    })

    if(error){
        alert(error.message)
    }
    else{
        await supabase.from("users").insert([{
            id: data.user.id,
            email: form.email,
            name: form.name
        }])

        alert("Signup successful")
        // router.push("/login")
    }
    // setLoading(false)
  }

  const handleChange = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  return <>
  <div>
    <h2>
        Sign Up
    </h2>
    <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="Full Name"/>
    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
    <input type="password" value={form.password} name="password" onChange={handleChange} placeholder="Password"/>
    <button onClick={handleSignup}>
        Sign Up
    </button>
  </div>
  </>;
};

export default Signup;
