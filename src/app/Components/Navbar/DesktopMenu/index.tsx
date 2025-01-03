import React from "react";
import Image from "next/image";

const DesktopMenu: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
     
      <div className="flex items-center relative">
        <Image
          src="/icons/country-logo.png"
          alt="Country Flag"
          width={20}
          height={15}
        />
        <span className="absolute top-1 left-6 text-xs font-bold">US</span>
        <div className="hidden md:block w-px h-6 bg-gray-400 ml-10 mr-3"></div>
      </div>

      {/* Shopping Cart Section */}
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Image
            src="/icons/shopping-cart.png"
            alt="Shopping Cart"
            width={25}
            height={25}
          />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
            3
          </span>
        </div>
        <span className="text-sm font-semibold text-gray-700">$178.21</span>
      </div>

   
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/user.png"
          alt="User Icon"
          width={25}
          height={25}
        />
        <div className="flex flex-col items-start">
          <button className="text-[0.6rem] font-semibold text-gray-700">
            Login / Register
          </button>
          <button className="text-[0.7rem] font-semibold text-gray-700 mt-1">
            Orders & Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
