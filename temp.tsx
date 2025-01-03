// import React from "react";
// import AlertBanner from "../AlertBanner";
// import Breadcrumb from "../Breadcrumb";
// import ProductRow from "../ProductRow";

// const ShoppingCart = () => {
//   const products = [
//     {
//       name: "Trendy Logo Print...",
//       price: 39.95,
//       originalPrice: 59.99,
//       size: "Large",
//       color: "Maroon",
//       seller: "Seller/Store Name",
//       image: "/images/product1.png",
//       limitedTimeDeal: "01:08:09:24",
//     },
//     // {
//     //     name: 'Trendy Logo Print...',
//     //     price: 39.95,
//     //     originalPrice: 59.99,
//     //     size: 'Large',
//     //     color: 'Maroon',
//     //     seller: 'Seller/Store Name',
//     //     image: '/images/product2.png',
//     //     limitedTimeDeal: '01:08:09:24',
//     //   },
//     //   {
//     //     name: 'Trendy Logo Print...',
//     //     price: 39.95,
//     //     originalPrice: 59.99,
//     //     size: 'Large',
//     //     color: 'Maroon',
//     //     seller: 'Seller/Store Name',
//     //     image: '/images/product3.png',
//     //     limitedTimeDeal: '01:08:09:24',
//     //   },
//     //   {
//     //     name: 'Trendy Logo Print...',
//     //     price: 39.95,
//     //     originalPrice: 59.99,
//     //     size: 'Large',
//     //     color: 'Maroon',
//     //     seller: 'Seller/Store Name',
//     //     image: '/images/product4.png',
//     //     limitedTimeDeal: '01:08:09:24',
//     //   },
//   ];
//   return (
//     <div className=" py-1 px-4 border-b md:px-4">
//       <h1 className="text-2xl font-medium text-gray-800">Shopping Cart</h1>
//       <AlertBanner />
//       <div>
//         {products.map((product) => (
//           <ProductRow key={product.name} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProgressIndicator from "../ProgressIndicator";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
  seller: string;
}

const ShoppingCart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Trendy Logo Print Crew Neck Maroon Fleece Casual Sweatshirt for Fashionable Men",
      price: 39.95,
      originalPrice: 59.99,
      size: "Large",
      color: "Maroon",
      image: "/images/product1.png",
      quantity: 1,
      seller: "Seller/Store Name",
    },
    {
      id: 2,
      name: "Mens Stylish Colorblock Full Sleeves Regular Wear Sweatshirt for Casual Wear",
      price: 54.0,
      originalPrice: 69.99,
      size: "XL",
      color: "Black",
      image: "/images/product2.png",
      quantity: 1,
      seller: "Seller/Store Name",
    },
    {
      id: 3,
      name: "Stylish Mens Fleece Full Sleeves Fabulous Sweatshirt for Fashionable Men",
      price: 46.95,
      originalPrice: 69.99,
      size: "XXL",
      color: "Dark Blue",
      image: "/images/product3.png",
      quantity: 1,
      seller: "Seller/Store Name",
    },
  ]);

  const handleQuantityChange = (itemId: number, change: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheck = (itemId: number) => {
    // Add any logic for the "Check" button (e.g., marking the item as checked)
    alert(`Item ${itemId} checked!`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left ">
                Product{" "}
                <span className="text-xs font-thin text-gray-500 space-x-4">(3 items)</span>
              </th>
              <th className="px-4 py-2 text-left ">
                Price
              </th>
              <th className="px-4 py-2 text-left">
                Quantity
              </th>
              <th className="px-4 py-2 text-left">
                Total
              </th>
              <th className="px-4 py-2 text-left ">
              </th>
            </tr>
          </thead>
          <div className="min-w-full border-collapse ">

          </div>
         
          <tbody>
            
            {items.map((item) => (
              <tr key={item.id} className="">
                <td className="px-4 py-2 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.color} | {item.size}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-400 line-through ml-2">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={item.quantity === 1}
                      className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 mr-2"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 ml-2"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 font-semibold">
                  ${Number((item.price * item.quantity).toFixed(2))}
                </td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ShoppingCart;