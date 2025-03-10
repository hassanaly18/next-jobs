"use client";

import { supabase } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    async function fetchJobs(){
      let {data, error} = await supabase.from("jobs").select("*")

      if(error){
        console.error("Error fetching jobs")
      }
      else{
        setJobs(data)
      }
    }

    fetchJobs();
  }, [])

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Latest Next.js jobs are posted here!
        </h1>
        <Link href="jobs/post">
          <button className="bg-blue-600 text-white px-4 py-4 rounded mb-4">
            Post a Job
          </button>
        </Link>
        <ul>
          {jobs.map((job)=>(
            <li key={job.id} className="border p-4 mb-2 rounded shadow">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
