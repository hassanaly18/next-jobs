"use client"

import { supabase } from '@/utils/supabase';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);

    useEffect(()=>{
        async function fetchJob(){
            let {data, error } = await supabase.from("jobs"). select("*").eq("id", id).single();

            if(error){
                console.error("Error fetching Data from Database")
            }
            else{
                setJob(data)
            }
        }

        fetchJob();
    }, [id])

    if(!job) return <p>Loading....</p>
    
  return (
    <>
    <div className='p-6'>
        <h1 className='text-2xl font-bold'>
            {job.title}
        </h1>
        <p className='text-gray-700'>
            {job.description}
        </p>
        <p className='text-gray-500'>
            {job.company}
        </p>

        <button className='mt-4 bg-green-600 text-white px-4 py-2'>
            Apply Now!
        </button>
    </div>
    </>
  )
}

export default JobDetails