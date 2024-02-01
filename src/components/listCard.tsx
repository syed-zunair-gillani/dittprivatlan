import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListCard = () => {
     return (
          <>
               <div className='relative'>
                    <div className='flex flex-col bg-sec justify-center items-center text-gray-300 text-center z-10 p-4 relative rounded-xl'>
                         <Image src={`/images/coopmedmera.png`} alt={`coopmedmera`} width={300} height={200} className='w-full h-full object-cover rounded-xl' />
                         <ul className='my-5 text-gray-400 font-light '>
                              <li className='border-b-[1px] py-2 border-gray-700'>Kreditbelopp fr. 1000 till 45000 kr</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Direct payment: Handelsbanken, Nordea, SEB, Swedbank</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>BankID</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Weekend loan</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Payment Notes OK</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Registered in Sweden</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Age limit 21 years</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Monthly interest from 3.3% of capital debt</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>Income requirements: declared income</li>
                              <li className='border-b-[1px] py-2 border-gray-700'>No debt balance with the Kronofogden</li>
                         </ul>
                         <Link href={`#`} className='bg-main w-full hover:bg-transparent hover:text-main border border-transparent hover:border-main text-sec py-2.5 font-semibold rounded-md'>Ansök</Link>
                         <Link href={`#`} className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>TrustPilot 3.7</Link>

                    </div>
               </div>
          </>
     )
}

export default ListCard