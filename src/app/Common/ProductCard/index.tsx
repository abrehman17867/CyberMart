import React from "react";
import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <div className="mt-10 w-full max-w-[300px] sm:max-w-[240px] lg:max-w-[300px] bg-white  overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <div className="relative w-full h-[150px] sm:h-[180px] lg:h-[220px]">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Product Details */}
      <div className="p-2 sm:p-3">
        <h3 className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-gray-800 truncate">
          {title}
        </h3>
        <div className="flex items-center mt-1 sm:mt-2">
          <p className="text-[#F48603] text-[14px] sm:text-[16px] font-bold">
            {price}
          </p>
          <p className="text-[10px] sm:text-[12px] text-gray-500 line-through ml-2">
            {originalPrice}
          </p>
          <p className="text-[8px] sm:text-[10px] text-[#0185BA] ml-4 border border-[#0185BA] rounded px-2 py-[1px]">
            {discount}
          </p>
        </div>

        {/* Rating and Actions */}
        <div className="flex items-center justify-between mt-2 sm:mt-4">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-[12px] sm:text-[15px] ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <p className="ml-1 sm:ml-2 text-[10px] sm:text-[12px] text-gray-500">
              | {reviews}
            </p>
          </div>

          {/* Wishlist and Cart */}
          <div className="flex space-x-1 sm:space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Image
                src="/icons/heart-icon.png"
                alt="Wishlist"
                width={14}
                height={14}
              />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Image
                src="/icons/cart-icon.png"
                alt="Add to Cart"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




