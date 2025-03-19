"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
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
      <div className="bg-gray-950 text-white">
        <Hero />
        <About />

        <div >
          <h2 className="text-3xl font-bold mt-10 text-center mb-8">
            Featured Jobs
          </h2>
          <div className="mt-8 mb-10 px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.slice(0,3).map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`} className="group">
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
                  <h2 className="text-xl font-semibold text-white group-hover:text-blue-500">
                    {job.title}
                  </h2>
                  <p className="text-gray-400 mt-2 text-sm truncate">
                    {job.description}
                  </p>
                  <p className="text-gray-500 text-sm mt-3 font-medium">
                    {job.company}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">
          Latest Next.js jobs are posted here!
        </h1>
        <Link href="/jobs">
          <button className="bg-blue-600 text-white px-4 py-4 rounded mb-4">
            See all Jobs
          </button>
        </Link>

        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="group">
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-500">
                  {job.title}
                </h2>
                <p className="text-gray-400 mt-2 text-sm truncate">
                  {job.description}
                </p>
                <p className="text-gray-500 text-sm mt-3 font-medium">
                  {job.company}
                </p>
              </div>
            </Link>
          ))}
        </div> 
      </div> */}
    </>
  );
}
