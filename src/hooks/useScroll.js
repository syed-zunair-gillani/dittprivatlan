'use client'

import React, { useEffect, useState } from 'react'

export const useScrollhandler = () => {
     const [scrollTop, setScrollTop] = useState(0);
     const [headerClr, setHeaderClr] = useState(false);
   
     useEffect(() => {
       function onScroll() {
         let currentPosition = window.pageYOffset;
         setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
       }
       scrollTop >= '10' ? setHeaderClr(true) : setHeaderClr(false);
       window.addEventListener('scroll', onScroll);
       return () => window.removeEventListener('scroll', onScroll);
     
     }, [scrollTop]);

     return {headerClr}
}

