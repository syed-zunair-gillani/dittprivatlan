'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Range = () => {
     const [value, setvalue] = useState<any>(5000)
  return (
    <>
    <div className='max-w-[800px] mx-auto mt-16 px-3 md:px-0'>
          <label
            htmlFor="customRange3"
            className="mb-2 items-center gap-3 flex justify-between text-main"
          >
            Range Låna 1000 - Låna 1000000
          </label>
          
          <input
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-300"
            min="5000"
            max="1000000"
            step="5000"
            onChange={(e)=>setvalue(e.target?.value)}
            id="customRange3"
          />
          <button className="mt-10 bg-main w-full p-4 rounded-xl md:text-xl hover:bg-main/90 hover:text-sec shadow-xl font-semibold text-sec" >Låna {value}</button>
        </div>
    </>
  )
}

export default Range