import React from "react";
import Image from "next/image";

interface ProgressIndicatorProps {
  progress: number; 
  sellerName: string; 
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
  sellerName,
}) => {
  return (
    <div className="flex items-center justify-between bg-[#F2F9FC] mt-2 p-2 border opacity-90 ">
      <span className="text-xs font-medium text-gray-600">{sellerName}</span>
      {progress > 0 && (
        <div className="flex flex-col items-end">
          <div className="w-[15rem] bg-blue-200 rounded-full h-1 relative mb-1">
            <div
              className="bg-teal-500 h-1 rounded-full"
              style={{ width: `${progress}%` }}
            />
            <Image
              src="/icons/shipping-fast.png"
              alt="Fast Shipping"
              width={16}
              height={16}
              className="absolute top-[-6px]"
              style={{
                left: `${progress}%`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <span className="text-[0.75rem] text-gray-500 pr-[3.5rem]">
            Only ${100 - progress} away from Free Shipping
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;



