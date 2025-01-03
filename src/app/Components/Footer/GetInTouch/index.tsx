"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const GetInTouch: React.FC = () => {
  return (
    <div className="space-y-5 text-center md:text-left">
      <h3 className="text-lg font-semibold text-blue-600">Get In Touch</h3>
      <ul className="text-sm space-y-3">
        <li className="flex items-center justify-center md:justify-start space-x-2">
          <Image src="/icons/phone.png" alt="call" height={16} width={16} />
          <span className="hover:text-blue-500">+92 333 666 6679</span>
        </li>
        <li className="flex items-center justify-center md:justify-start space-x-2">
          <Image src="/icons/mail.png" alt="email" height={16} width={16} />
          <span className="hover:text-blue-500">support@cybermart.pk</span>
        </li>
        <li className="flex items-center justify-center md:justify-start space-x-2">
          <Image src="/icons/location.png" alt="location" height={16} width={16} />
          <span className="hover:text-blue-500">
            Office# 803-D, 8th Floor, City Tower, Gulberg III, Lahore, Pakistan.
          </span>
        </li>
      </ul>
      <div className="flex flex-wrap justify-center md:justify-start space-x-3 mt-6">
        {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map((Icon, index) => (
          <Link href="#" key={index}>
            <Icon size={20} className="transition-transform duration-300 transform hover:scale-110" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
