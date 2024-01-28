import Link from "next/link";
import React from "react";

const MobileNav = ({ navItems, isMobile }) => {
  return (
    <>
      <div
        className={`md:hidden bg-main fixed w-full text-white shadow-xl transition-all duration-200 ease-linear z-50
          ${isMobile ? "top-[56px]" : "-top-[100%]"}`}
      >
        <ul className="flex flex-col">
          {navItems.map((item, idx) => (
            <li key={idx} className={`capitalize hover:text-black p-4 border-b-[1px] border-gray-300 ${idx+1 === navItems.length && 'border-none'}`}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
