import React from "react";
import Image from "next/image";

const AlertBanner: React.FC = () => {
  return (
    <div
      className="mt-[2rem] flex items-center p-2 mb-4 text-sm text-yellow-600 border border-yellow-300 rounded-lg bg-yellow-50"
      role="alert"
    >
      <Image
        src="/icons/info.png"
        alt="Alert Icon"
        width={18}
        height={18}
        className="mr-2 "
      />
      <span className="sr-only">Info</span>
      <div className="text-[0.73rem]">
        <span className="font-thin">
          Please hurry! Someone has placed an order on one of the items you have
          in the cart. We'll keep it for you for{" "}
        </span>
        <strong className="font-semibold text-[0.745rem]">19:33</strong>{" "}
        minutes.
      </div>
    </div>
  );
};

export default AlertBanner;


