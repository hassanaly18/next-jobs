import React from 'react'

const About = () => {
  return (
    <section className='py-16 bg-gray-900'>
        <div className="max-w-5xl mx-auto text-center">
            <h2 className='text-3xl font-bold mb-6'> 
                How It Works?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className='p-6 bg-gray-800 rounded-xl shadow-lg'>
                    <h3 className='text-xl font-semibold mb-2'>
                        1. Browse Jobs
                    </h3>
                    <p className='text-gray-400'>
                        Explore the latest Next.js job postings.
                    </p>
                </div>
                <div className='p-6 bg-gray-800 rounded-xl shadow-lg'>
                    <h3 className='text-xl font-semibold mb-2'>
                        2. Apply Easily
                    </h3>
                    <p className='text-gray-400'>
                        Submit applications with a single click.
                    </p>
                </div>
                <div className='p-6 bg-gray-800 rounded-xl shadow-lg'>
                    <h3 className='text-xl font-semibold mb-2'>
                        3. Get Hired
                    </h3>
                    <p className='text-gray-400'>
                        Land your dream job and start working.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About