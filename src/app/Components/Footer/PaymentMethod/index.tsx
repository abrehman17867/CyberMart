"use client";
import Image from "next/image";

const PaymentMethods = () => {
  return (
    <div className="relative mt-12 px-6">
      <div className="flex flex-col sm:flex-row items-center w-full relative gap-2 sm:gap-0">
        <div className="bg-white border border-gray-300 rounded-2xl w-full sm:w-[12rem] h-8 flex items-center justify-center sm:justify-start px-2">
          <Image
            src="/icons/global-network.png"
            alt="Global Networks"
            width={22}
            height={22}
            className="mr-2"
          />
          <span className="text-sm text-gray-800">Global Networks</span>
        </div>

        <div className="hidden sm:block flex-1 h-px bg-gray-300" />

        <div className="relative sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 px-3 border shadow-lg rounded-2xl bg-white text-center">
          <span className="text-md font-semibold text-gray-700">
            PAYMENT METHODS
          </span>
        </div>

        <div className="hidden sm:block flex-1 h-px bg-gray-300" />
      </div>

      {/* Payment Icons */}

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <Image
          src="/icons/jazzcash.png"
          alt="JazzCash"
          width={80}
          height={70}
          className="rounded-md bg-white w-[70px] h-[30px] sm:w-[80px] sm:h-[40px]"
        />
        <Image
          src="/icons/easypaisa.png"
          alt="EasyPaisa"
          width={50}
          height={40}
          className="rounded-md bg-white w-[40px] h-[30px] sm:w-[50px] sm:h-[40px]"
        />
        <Image
          src="/icons/visa-logo.png"
          alt="Visa"
          width={50}
          height={40}
          className="rounded-md bg-white w-[40px] h-[30px] sm:w-[50px] sm:h-[40px]"
        />
        <Image
          src="/icons/cards.png"
          alt="Mastercard"
          width={60}
          height={40}
          className="rounded-md bg-white w-[50px] h-[30px] sm:w-[60px] sm:h-[40px]"
        />
        <Image
          src="/icons/delivery.png"
          alt="Cash on Delivery"
          width={60}
          height={40}
          className=" w-[70px] h-[50px] sm:w-[70px] sm:h-[55px]"
        />
      </div>
    </div>
  );
};

export default PaymentMethods;
