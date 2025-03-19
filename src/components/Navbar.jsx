"use client";

import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function getUser() {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.session?.user || null);
    }

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <>
      <nav className="bg-gray-900 shadow-md p-4">
        {/* //left side */}
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            NextJobs
          </Link>

          {/* right side */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/jobs" className="text-gray-300 hover:text-white">
              Jobs
            </Link>
            <Link href="/post" className="text-gray-300 hover:text-white">
              Post
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="text-gray-300 hover:text-white">
                  Login
                </Link>
                <Link href="/signup" className="text-gray-300 hover:text-white">
                  Signup
                </Link>

                {/* <button
                  className="md:hidden text:white"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <div>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                  <Link href="/jobs" className="text-gray-300 hover:text-white">
                    Jobs
                  </Link>
                  <Link href="/post" className="text-gray-300 hover:text-white">
                    Post
                  </Link>
                </div> */}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
