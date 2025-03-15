"use client";

import { supabase } from "@/utils/supabase";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showform, setShowform] = useState(false);
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    cover_letter: "",
    developer_id: "18f21b77-9bb9-4aea-89a6-7c7e1cfdb054",
  });

  useEffect(() => {
    async function fetchJob() {
      let { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching Data from Database");
      } else {
        setJob(data);
      }
    }

    fetchJob();
  }, [id]);

  const handleApply = async () => {
    if (!applicant.name || !applicant.email || !applicant.cover_letter) {
      alert("All the fields are required..!!");
      return;
    }

    const { error } = await supabase.from("applications").insert([
      {
        job_id: id,
        developer_id: applicant.developer_id,
        cover_letter: applicant.cover_letter,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("The Application is submitted.!");
    }

    setShowform(false);
  };

  const handleChange=(e)=>{
    setApplicant({
        ...applicant,
        [e.target.name]: e.target.value
    })
  }

  if (!job) return <p>Loading....</p>;

  return (
    <>
      <div className="max-w-3xl mt-10 mx-auto p-8 bg-gray-900 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-200">{job.title}</h1>
        <p className="text-gray-700 mt-2">{job.description}</p>
        <p className="text-gray-500 font-medium mt-2">{job.company}</p>

        <button className="mt-4 bg-green-600 text-white px-4 py-2"
        onClick={()=>setShowform(
            !showform
        )}>
          Apply Now!
        </button>

        {showform && (
          <div className="mt-6 p-6 border rounded-lg bg-gray-900">
            <h2 className="text-xl font-semibold text-gray-200">
              Apply for this Job Now!
            </h2>

            <div className="space-y-4 mt-4">
              <input
                placeholder="Full Name"
                type="text"
                name="name"
                onChange={handleChange}
                value={applicant.name}
                className="w-full px-4 py-2 border rounded-md bg-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                onChange={handleChange}
                value={applicant.email}
                className="w-full px-4 py-2 border rounded-md bg-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Cover Letter"
                name="cover_letter"
                value={applicant.cover_letter}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
              <button
                onClick={handleApply}
                className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition disabled:bg-gray-500"
              >
                Submit Application
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobDetails;
