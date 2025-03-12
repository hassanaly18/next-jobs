"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const page = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      let { data, error } = await supabase.from("jobs").select("*");

      if (error) {
        console.error("Error fetching jobs");
      } else {
        setJobs(data);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Latest Next.js jobs are posted here!
        </h1>
        {/* <Link href="jobs/post">
          <button className="bg-blue-600 text-white px-4 py-4 rounded mb-4">
            Post a Job
          </button>
        </Link> */}
        <ul>
          {jobs.map((job) => (
            <li key={job.id} className="border p-4 mb-2 rounded shadow">
              <Link href={`/jobs/${job.id}`} className="block">
                <h2 className="text-xl font-semibold hover:text-blue-600">
                  {job.title}
                </h2>
              </Link>
              <p className="text-gray-700">{job.description}</p>
              <p className="text-sm text-gray-500">{job.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default page;
