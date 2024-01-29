import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MorgageCard = ({data}:any) => {
  return (
    <div className='relative'>          
          <div className='flex flex-col bg-sec justify-center items-center text-gray-300 text-center z-10 p-4 relative rounded-xl'>
               <Image src={data.image} alt={data.title} width={300} height={200} className='w-full h-full object-cover rounded-xl' />
               <h2 className='font-bold text-2xl text-main py-2'>{data.title}</h2>
               <p>{data.info}</p>
               <h4 className='font-bold my-3'>Interest from {data.intrustRate}</h4>
               <Link href={data.reviewLink} className='bg-main w-full hover:bg-transparent hover:text-main border border-transparent hover:border-main text-sec py-2.5 font-semibold rounded-md'>Recension</Link>
               <Link href={data.reviewLink} className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>Låna nu</Link>
          </div>
    </div>
  )
}

export default MorgageCard