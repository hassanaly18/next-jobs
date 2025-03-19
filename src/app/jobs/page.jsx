"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const page = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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

  useEffect(() => {
    if (searchTerm) {
      const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, jobs]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-6 ">
          Latest Next.js jobs are posted here!
        </h1>

        <div>
          <input
            type="text"
            placeholder="Search Jobs"
            value={searchTerm}
            className="max-w-6xl p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 mb-6"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {suggestions.length > 0 && (
            <ul className="max-w-2xl absolute left-0 right-0 mt-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
              {suggestions.map((job) => (
                <li
                  className="p-3 hover:bg-gray-700 cursor-pointer text-white"
                  key={job.id}
                  onClick={() => {
                    setSuggestions([])
                    setSearchTerm(job.title)
                  }}
                >
                  {job.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* <Link href="jobs/post">
          <button className="bg-blue-600 text-white px-4 py-4 rounded mb-4">
            Post a Job
          </button>
        </Link> */}
        {/* <ul>
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
        </ul> */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
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
    </>
  );
};

export default page;
