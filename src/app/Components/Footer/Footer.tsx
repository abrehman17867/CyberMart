"use client";
import React from "react";
import LogoAndDescription from "./LogoAndDescription";
import UsefulLinks from "./UsefulLinks";
import Policy from "./Policy";
import GetInTouch from "./GetInTouch";
import ScanAndDownload from "./ScanAndDownload";
import PaymentMethods from "./PaymentMethod";


const Footer: React.FC = () => {
  return (
    <footer className="mt-8 bg-[#F3F3F3] text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 px-5 md:px-5">
        <LogoAndDescription />
        <UsefulLinks />
        <Policy />
        <GetInTouch />
        <ScanAndDownload />
      </div>
      <PaymentMethods />
      <div className="w-full absolute bg-[#17181B] text-white text-center py-4 mt-8">
        <p className="text-sm ">
          Copyright © CyberMart 2023 All Rights Reserved. Powered by ConvexTech Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
