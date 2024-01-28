import React from 'react'
import { RiBankLine } from "react-icons/ri";

const Main = () => {
  return (
    <main className='py-32 px-3'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-main max-w-[1100px] mx-auto text-center '>
          <h1 className='text-center'>COMPARE PERSONAL</h1>
          <h2 className='flex items-center justify-center gap-3'><RiBankLine className='inline-flex'/> LOANS</h2>
          <h3 className='text-lg sm:text-xl md:text-3xl mt-4 text-gray-500'>FIND THE CHEAPEST PRIVATE LOAN, QUICK LOAN OR HOBBACK LOAN</h3>
        </div>
    </main>
  )
}

export default Main