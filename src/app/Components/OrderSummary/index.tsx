import Image from "next/image";

const OrderSummary = () => {
  return (
    <div className="mt-[-2rem] relative w-80 bg-white rounded-2xl shadow-md border border-gray-200">
      {/* Header */}
      <div className="px-6 py-2 bg-[#F2F9FC] rounded-t-2xl shadow-lg">
        <h2 className="text-xs font-semibold text-gray-800">ORDER SUMMARY</h2>
      </div>

      {/* Details */}
      <div className="px-6 py-4 space-y-3 text-xs text-gray-700">
        <div className="flex justify-between">
          <span>Item(s) Total</span>
          <span>$188.75</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping & Handling</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Total Before Tax</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax to be Collected</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between font-normal text-gray-900 px-[-2rem] py-2 bg-[#F2F9FC] ">
          <span>Total</span>
          <span>$188.75</span>
        </div>
        <div className="flex justify-between text-green-600 font-medium text-[0.7rem]">
          <span>You Secured</span>
          <span>$53.92</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 mt-3">
        <button className="w-full bg-[#F48603] hover:bg-orange-600 text-white font-medium text-[0.79rem] py-2 rounded-md transition">
          Proceed to Checkout
        </button>
        <button className="w-full mt-5 border border-blue-500 text-blue-500 font-medium text-[0.79rem] py-2  hover:bg-blue-400  rounded-md transition">
          Keep Shopping
        </button>
      </div>

      {/* Disclaimer */}
      <div className="px-6 py-3 flex ">
        <Image
          src="/icons/grey-info.png"
          alt="Info"
          width={16}
          height={16}
          className="object-contain "
        />
        <p className="text-xs text-gray-500 mt-4 ml-2">
          Item availability and pricing are not guaranteed until payment is
          final.
        </p>
      </div>

      {/* Payment Icons */}
      <div className="px-6 py-4 flex items-center justify-center space-x-4 border-t border-gray-200">
        <Image
          src="/icons/visa-logo.png"
          alt="Visa"
          width={50}
          height={40}
          className="object-contain"
        />
        <Image
          src="/icons/mastercard.png"
          alt="MasterCard"
          width={45}
          height={30}
          className="object-contain"
        />
        <Image
          src="/icons/PayPal.png"
          alt="PayPal"
          width={40}
          height={25}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default OrderSummary;
