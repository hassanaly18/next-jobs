import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Next.js Jobs</h2>
          <p className="text-sm mt-2">Find your dream Next.js job today!</p>
        </div>

        {/* Middle Section */}

        <nav className="mt-4 md:mt-0 ">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <li>
              <Link className="hover:text-white" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/post">Post</Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/login">Login</Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        {/* Right Section  */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
            <p>
                Contact Us: <a className="text-blue-500 hover:text-blue-800 hover:underline" href="mailto:">support@nextjobs.com</a> 
            </p>
            <div className="flex justify-center md;justify-end gap-4 mt-2">
                <a className="hover:text-white" href="hhtps://www.linkedin.com" target="_blank">
                    LinkedIn
                </a>
                <a className="hover:text-white" href="hhtps://www.twitter.com" target="_blank">
                    Twitter
                </a>
                <a className="hover:text-white" href="hhtps://www.facebook.com" target="_blank">
                    Facebook
                </a>
                <a className="hover:text-white" href="hhtps://www.instagram.com" target="_blank">
                    Instagram
                </a>
            </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-800 pt-4">
        &copy;{new Date().getFullYear()} NextJobs. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
