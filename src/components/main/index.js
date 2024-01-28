import React from 'react'
import { RiBankLine } from "react-icons/ri";

const Main = () => {
  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden">
      <div class="relative z-30 p-5 text-2xl bg-black/60 w-full h-full">
        <div className='text-5xl md:text-6xl flex flex-col justify-center items-center h-full lg:text-8xl font-bold text-main max-w-[1100px] mx-auto text-center '>
          <h1 className='text-center'>COMPARE PERSONAL</h1>
          <h2 className='flex items-center justify-center gap-3'><RiBankLine className='inline-flex' /> LOANS</h2>
          <h3 className='text-lg sm:text-xl md:text-3xl mt-4 text-gray-300'>Find The Cheapest Private Loan, Quick Loan Or Hobback Loan</h3>
        </div>
      </div>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="/video.mp4" type="video/mp4" />Your browser does not support the video tag.
      </video>
    </main>

  )
}

export default Main