'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="sticky  top-0 flex items-center justify-between flex-wrap p-6   bg-[rgba(246,177,18,1)]">
     <div className="flex items-center flex-shrink-0 text-black mr-6 lg:mr-72">
       <Image src={'/logo.png'}
        className="w-100 h-10 mr-2"
         alt="Logo"
         width={40}
         height={40} />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">

         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Home
         </a>
         <a href="#aboutUs" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
          About Us
         </a>
         <a href="#evt" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Events
         </a>
         <a href="#FAQ" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           FAQs
         </a>
         <a href="#conUs" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Contact Us
         </a>
         <a href="#ourTm" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Our Team
         </a>
         <a href="#bh" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Bee Hive 
         </a>
       </div>
       {/* <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Click Me
         </button>
       </div> */}
     </div>
   </nav>
 );
}
export default Navbar;