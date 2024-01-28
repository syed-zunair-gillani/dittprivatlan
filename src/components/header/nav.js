'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useScrollhandler } from '@/hooks/useScroll'
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import MobileNav from './mobileNav'

const NavBar = () => {
     const { headerClr } = useScrollhandler()
     const [isMobile, setIsMobile] = useState(false)

     return (
          <>
          <header className={`py-2 transition-all duration-200 ease-linear z-50
               ${headerClr && 'fixed w-full bg-slate-900 text-white top-0 shadow-xl'}`}>
               <div className='container mx-auto flex items-center justify-between px-3 md:px-0'>
                    <div>
                         <Image src={`/images/sitelogo.png`} width={240} height={80} alt="logo" className='w-[140px] md:w-[240px]' />
                    </div>
                    {/* nav bar */}
                    <div className='hidden md:block'>
                         <ul className='flex items-center gap-5'>
                              {
                                   navItems.map((item, idx) => (
                                        <li key={idx} className='capitalize hover:text-main'><Link href={item.href}>{item.label}</Link></li>
                                   ))
                              }
                         </ul>
                    </div>
                    {/* hamburgur  */}
                    <button className='text-2xl md:hidden' onClick={()=>setIsMobile(!isMobile)}>
                         {
                              isMobile ? <FaX className='p-[2px]'/> : <FaBars/>
                         }
                    </button>
               </div>
          </header>
          {/*  mobile nav  */}
          <MobileNav navItems={navItems} isMobile={isMobile}/>
          </>
     )
}

export default NavBar



const navItems = [
     {
          label: 'start',
          href: '/'
     },
     {
          label: 'Nyheter',
          href: '#'
     },
     {
          label: 'Låneförmedlare',
          href: '#'
     },
     {
          label: 'Privatlån',
          href: '#'
     },
     {
          label: 'Lån med Bisnode',
          href: '#'
     },
     {
          label: 'Lån med Creditsafe',
          href: '#'
     },
]





