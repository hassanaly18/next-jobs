"use client"

import { supabase } from '@/utils/supabase'
import React, { useState } from 'react'

const PostJob = () => {

    const [title, setTitle] = useState("")
    const [description, setDescripton] = useState("")
    const [company, setCompany] = useState("")

    const postJob = async() => {
        if(!title || !description || !company){
            alert("Fill out all the fields..!!")
            return;
        }

        const{error} = await supabase.from("jobs").insert([
            {
                title,
                description,
                company,
                recruiter_id: "55e17c80-5f31-452d-ac3c-3a1d6ecba655"
            }
        ])

        if(error){
            alert(error.message);
            return;
        }
    }

  return (
    <>
    <div className='p-8 mt-10 max-w-2xl mx-auto shadow-md bg-gray-900 rounded-lg'>
        <h1 className='text-3xl font-bold mb-4 text-gray-100 mb-6'>Post a Job</h1>
        <input className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Job Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea className='w-full mt-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32' placeholder='Job Description' value={description} onChange={(e)=>setDescripton(e.target.value)}/>
        <input className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 mt-2 focus:ring-blue-500' type="text" placeholder='Company' value={company} onChange={(e)=>setCompany(e.target.value)}/>

        <button className='w-full mt-4 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:bg-gray-400' onClick={postJob}>
            Post
        </button>
    </div>
    </>
  )
}

export default PostJob