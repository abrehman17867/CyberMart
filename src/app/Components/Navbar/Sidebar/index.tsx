
import React from "react";
import Image from "next/image";
import { FiX, FiHome, FiShoppingCart, FiUser, FiList } from "react-icons/fi";

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`fixed top-0 left-0 bg-white w-72 h-full p-6 shadow-lg rounded-r-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-10">
          <Image
            src="/icons/cybermart-logo.png"
            alt="Cybermart Logo"
            width={150}
            height={40}
          />
          <FiX
            size={30}
            className="text-gray-600 cursor-pointer hover:text-black"
            onClick={toggleMenu}
          />
        </div>

        <div className="flex flex-col space-y-6 text-gray-700">
          <button className="flex items-center space-x-4 text-lg hover:text-gray-900 transition-colors">
            <FiHome size={20} />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-4 text-lg hover:text-gray-900 transition-colors">
            <FiShoppingCart size={20} />
            <span>Shop</span>
          </button>
          <button className="flex items-center space-x-4 text-lg hover:text-gray-900 transition-colors">
            <FiList size={20} />
            <span>Orders</span>
          </button>
          <button className="flex items-center space-x-4 text-lg hover:text-gray-900 transition-colors">
            <FiUser size={20} />
            <span>Account</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 mt-10 text-gray-700">
          <Image
            src="/icons/shopping-cart.png"
            alt="Shopping Cart"
            width={25}
            height={25}
          />
          <span className="text-sm font-semibold">$178.21</span>
        </div>

        <div className="flex items-center space-x-3 mt-6 text-gray-700">
          <Image
            src="/icons/user.png"
            alt="User Icon"
            width={25}
            height={25}
          />
          <div className="flex flex-col">
            <button className="text-sm font-medium hover:text-gray-900 transition-colors">
              Login / Register
            </button>
            <button className="text-sm font-medium mt-1 hover:text-gray-900 transition-colors">
              Orders & Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
