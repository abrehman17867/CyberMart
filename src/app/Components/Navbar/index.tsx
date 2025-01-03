"use client";
import React, { useState } from "react";
import Image from "next/image";
import MobileMenuIcon from "./MobileMenuIcon";
import DesktopMenu from "./DesktopMenu";
import Sidebar from "./Sidebar";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white py-3 px-6 flex justify-between items-center border-b border-gray-300 ">
       
        <div className="flex items-center">
          <Image
            src="/icons/cybermart-logo.png"
            alt="Cybermart Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Mobile Menu Icon */}
        <MobileMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Desktop Section */}
        <DesktopMenu />
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
