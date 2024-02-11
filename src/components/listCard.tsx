import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListCard = ({data}:any) => {
     return (
          <>
               <div className='relative'>
                    <div className='flex flex-col bg-sec justify-center items-center text-gray-300 text-center z-10 p-4 relative rounded-xl'>
                         <Image src={data.icon?.mediaItemUrl} alt={`coopmedmera`} width={300} height={200} className='w-full h-full object-cover rounded-xl' />
                         <ul className='my-5 text-gray-400 font-light !list-none'>
                              {
                                   data?.lists.map((item:any, idx:number)=>(
                                        <li className='border-b-[1px] py-2 border-gray-700' key={idx}>{item.list}</li>
                                   ))
                              }
                         </ul>
                         <Link href={data.link || `#`} target='_blank' className='bg-main w-full hover:bg-transparent hover:!text-main border border-transparent hover:border-main !text-sec py-2.5 font-semibold rounded-md'>Ansök</Link>
                         <Link href={data?.trustpilotUrl || '#'} target='_blank' className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>TrustPilot 3.7</Link>

                    </div>
               </div>
          </>
     )
}

export default ListCard