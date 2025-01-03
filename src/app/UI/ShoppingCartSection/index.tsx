import React from "react";
import OrderSummary from "../../Components/OrderSummary";
import ShoppingCart from "../../Components/ShoppingCart";

const ShoppingCartSection: React.FC = () => {
  return (
    <div className="relative w-full px-4 py-2 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-2xl font-semibold text-center lg:text-left opacity-95 mt-2 text-gray-900">
        Shopping Cart
      </h1>

      <div className="container mx-auto mt-0 flex flex-col lg:flex-row lg:gap-6 gap-4">
        <div className="flex justify-center lg:justify-start w-full lg:w-[75%]">
          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full bg-white p-4">
            <ShoppingCart />
          </div>
        </div>

        <div className="w-full lg:w-[25%] lg:ml-4">
          <div className="bg-white  rounded-lg p-4">
            <OrderSummary />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  );
};

export default ShoppingCartSection;
