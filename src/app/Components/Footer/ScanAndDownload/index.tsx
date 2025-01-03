"use client";
import Image from "next/image";
import React from "react";

const ScanAndDownload: React.FC = () => {
  return (
    <div className="space-y-5 h-auto w-auto text-center md:text-left">
      <h3 className="text-lg font-semibold text-blue-600">Scan and Download</h3>
      <div className="md:bg-white md:rounded-lg md:border md:shadow-lg flex items-center justify-center space-x-2">
        <div className="flex flex-col items-center space-y-2">
          <Image src="/icons/QR-code.png" alt="QR Code" width={60} height={60} />
        </div>
        <div className="h-[60px] w-[2px] bg-gray-300"></div>
        <div className="mb-6 flex flex-col items-center -space-y-5">
          <Image src="/icons/playstore.png" alt="Google Play" width={77} height={80} />
          <Image src="/icons/applestore.png" alt="App Store" width={70} height={70} />
        </div>
      </div>
    </div>
  );
};

export default ScanAndDownload;
