"use client"

import { supabase } from '@/utils/supabase'
import React, { useState } from 'react'

const PostJob = () => {

    const [title, setTitle] = useState("")
    const [description, setDescripton] = useState("")
    const [company, setCompany] = useState("")

    const postJob = async() => {
        if(!title || !description || !company){
            alert("Fill out all the firlds..!!")
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
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-4'>Post a Job</h1>
        <input className='border' type="text" placeholder='Job Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea className='' placeholder='Job Description' value={description} onChange={(e)=>setDescripton(e.target.value)}/>
        <input className='border' type="text" placeholder='Company' value={company} onChange={(e)=>setCompany(e.target.value)}/>

        <button onClick={postJob}>
            Post
        </button>
    </div>
    </>
  )
}

export default PostJob