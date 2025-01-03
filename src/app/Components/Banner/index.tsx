import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="hidden md:flex bg-gray-800 text-white py-1 px-8 flex-col md:flex-row md:justify-center md:items-center md:gap-x-[7rem] gap-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src="/icons/banner-vector3.png"
          alt="Free Shipping"
          width={22}
          height={22}
        />
        <div className="text-[0.75rem] leading-tight">
          <p className="text-[#91ec99] opacity-95">Enjoy free shipping on every purchase!</p>
          <p className="text-[0.7rem] text-[#91ec99] opacity-80">Hurry, Offer Ends Soon!</p>
        </div>
      </div>

      {/* Vertical Line 1 */}
      <div className="hidden md:block w-px h-8 bg-gray-500"></div>

      
      <div className="flex items-center space-x-4">
        <Image
          src="/icons/banner-vector1.png"
          alt="Free Returns"
          width={22}
          height={22}
        />
        <div className="text-[0.75rem] leading-tight">
          <p className="text-[#FF9896]">Free Returns</p>
          <p className="text-[0.7rem] text-[#FF9896] opacity-80">Up to 14 days*</p>
        </div>
      </div>

      {/* Vertical Line 2 */}
      <div className="hidden md:block w-px h-8 bg-gray-500"></div>

   
      <div className="flex items-center space-x-4">
        <Image
          src="/icons/banner-vector2.png"
          alt="Get the App Now"
          width={15}
          height={15}
        />
        <div className="text-[0.75rem] leading-tight">
          <p className="text-[#FFCC97]">Get the App Now</p>
          <p className="text-[0.7rem] text-[#FFCC97] opacity-80">Unlock exclusive discounts!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
