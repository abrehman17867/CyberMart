import React from "react";
import QuantityControl from "../../Components/QuantityControl";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  title: string;
  color: string;
  size: string;
  price: number;
  oldPrice: number;
  quantity: number;
  limitedDeal: boolean;
  sellerName: string;
}

interface MobileProductCardProps {
  products: Product[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
}

const MobileProductCard: React.FC<MobileProductCardProps> = ({
  products,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <div className="lg:hidden">
      {products.map((product) => (
        <div
          key={product.id}
          className="py-2 border border-gray-300 max-w-xs bg-white rounded-lg overflow-hidden mb-4"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={192} 
            className="object-cover w-full"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-gray-800 truncate">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {product.color} | {product.size}
            </p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-semibold text-orange-500">
                ${product.price}{" "}
                <span className="text-sm line-through text-gray-500">
                  ${product.oldPrice}
                </span>
              </p>
              {product.limitedDeal && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Limited Deal
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <QuantityControl
                quantity={product.quantity}
                onIncrement={() => onIncrement(product.id)}
                onDecrement={() => onDecrement(product.id)}
              />
              <button
                onClick={() => onDelete(product.id)}
                className="w-8 h-8  text-white rounded-full flex items-center justify-center"
              >
                <Image
                  src="/icons/delete-icon.png"
                  alt="delete"
                  height={14}
                  width={14}
                  
                />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Seller: {product.sellerName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileProductCard;
