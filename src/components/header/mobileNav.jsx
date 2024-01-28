import Link from "next/link";
import React from "react";

const MobileNav = ({ navItems, isMobile }) => {
  return (
    <>
      <div
        className={`md:hidden bg-main fixed w-full p-6 text-white shadow-xl transition-all duration-200 ease-linear
          ${isMobile ? "top-[48px]" : "-top-[100%]"}`}
      >
        <ul className="flex flex-col gap-3">
          {navItems.map((item, idx) => (
            <li key={idx} className="capitalize hover:text-black">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
