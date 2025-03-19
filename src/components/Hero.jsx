"use client"
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='h-[80vh] flex flex-col justify-center items-center text-center px-6'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Find Your Dream Next.js Job!
        </h1>
        <p className='text-lg text-gray-400 max-w-2xl'>
            Discover the latest Next.js job opportunities. Connect with top companies and grow your career! 
        </p>
        <Link href="/jobs">
        <button className='mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-lg font-semibold cursor-pointer'>
            Browse Jobs
        </button>
        </Link>
    </section>
  )
}

export default Hero