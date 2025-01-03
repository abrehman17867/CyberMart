"use client";
import Link from "next/link";
import React from "react";

const UsefulLinks: React.FC = () => {
  return (
    <div className="space-y-5 text-center md:text-left">
      <h3 className="text-lg font-semibold text-blue-600">Useful Links</h3>
      <ul className="text-sm space-y-2">
        {["Blogs", "FAQ", "About Us", "Contact Us", "Become a Seller", "Easy Return"].map((link, index) => (
          <li key={index}>
            <Link href="#" className="hover:text-blue-500">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsefulLinks;
