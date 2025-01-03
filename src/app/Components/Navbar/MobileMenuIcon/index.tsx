import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface MobileMenuIconProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <div className="md:hidden flex items-center">
      {isMenuOpen ? (
        <FiX
          size={30}
          className="text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <FiMenu
          size={30}
          className="text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default MobileMenuIcon;
