"use client";
import Image from "next/image";
import React from "react";

const LogoAndDescription: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-2 space-y-5 text-center md:text-left">
      <div className="flex justify-center md:justify-start">
        <Image
          src="/icons/cybermart-logo.png"
          alt="CyberMart Logo"
          height={170}
          width={170}
          className="transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <p className="text-sm leading-6">
        CyberMart is a thriving online e-commerce website. We extend
        top-curated Fashion, Electronics & Household products around the
        globe. CyberMart was established in the United States of America and
        has since expanded its horizon around the world.
      </p>
    </div>
  );
};

export default LogoAndDescription;
