"use client";
import Link from "next/link";
import React from "react";

const Policy: React.FC = () => {
  return (
    <div className="space-y-5 text-center md:text-left">
      <h3 className="text-lg font-semibold text-blue-600">Policy</h3>
      <ul className="text-sm space-y-2">
        {["Privacy Policy", "Return Policy", "Non-Return Policy", "Terms and Conditions"].map((policy, index) => (
          <li key={index}>
            <Link href="#" className="hover:text-blue-500">
              {policy}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Policy;
