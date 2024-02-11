'use client'

import React from 'react'
import { FaStar } from 'react-icons/fa6'

const StarRating = ({tRating,avgRating}:any) => {
     const handleStartRating = (star: any) => {

     }
     return (
          <>
               <section className='mt-10 container mx-auto '>
                    <h6 className='text-xl font-bold text-sec'>Rate This article</h6>
                    <div className="inline-flex gap-1 mt-2 text-[#ECD142] items-center hover:cursor-pointer text-3xl">
                         {[1, 2, 3, 4, 5].map((star, id) => (
                              <>
                                   <FaStar key={id} onClick={() => handleStartRating(star)} />
                              </>
                         ))}
                    </div>
                    <p className='mt-1'>{tRating} roster, Betyg: {avgRating}/5</p>
               </section>
          </>
     )
}

export default StarRating