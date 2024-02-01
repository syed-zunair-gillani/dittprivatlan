import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
     return (
          <footer className='bg-sec text-gray-400 py-16'>
               <div className='container mx-auto px-3 flex justify-center items-center flex-col'>
                    <div>
                         <Image src={`/images/sitelogo.png`} width={240} height={80} alt="logo" className='w-[140px] md:w-[240px]' />
                    </div>
                    <ul className='flex items-center gap-5 mt-6'>
                         <li className='capitalize hover:text-main text-lg'><Link href="/om-oss">Om oss</Link></li>
                         <li className='capitalize hover:text-main text-lg'><Link href="/allmanna-villkor-och-cookies">Allmänna villkor och cookies</Link></li>
                         <li className='capitalize hover:text-main text-lg'><Link href="/kontakta-oss">Kontakta oss</Link></li>
                    </ul>
               </div>
          </footer>
     )
}

export default Footer