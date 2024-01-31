'use client'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const PageBanner = ({title}:any) => {
     const params = useParams()
     console.log("🚀 ~ PageBanner ~ params:", params)
  return (
    <main className="bg-sec bg py-32 text-center mb-6">
          <h2 className='text-main text-4xl md:text-5xl font-bold capitalize'>{title || params.slug}</h2>
    </main>
  )
}

export default PageBanner