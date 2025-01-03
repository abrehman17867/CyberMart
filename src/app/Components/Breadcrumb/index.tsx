"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Breadcrumb: React.FC = () => {
  return (
    <nav
      className="flex items-center py-2 px-4 bg-white"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-2 md:space-x-4">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-400 hover:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <Image
              src="/icons/arrow.png"
              alt="arrow"
              width={12} 
              height={12}
              className="w-2 h-2 sm:w-2 sm:h-2"
            />
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-[#F7A442]">
              Your Shopping Cart
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
