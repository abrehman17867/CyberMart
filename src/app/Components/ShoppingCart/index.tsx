"use client";

import { useState } from "react";
import { products as initialProducts } from "../../Constants/Constants";
import AlertBanner from "../AlertBanner";
import ProductRow from "../ProductRow";
import MobileProductCard from "../../Common/MobileCardComponent";

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const handleDecrement = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleIncrement = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDelete = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto py-1 px-2">
      <AlertBanner />

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse hidden lg:table">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-6 text-sm">
                Product
                <span className="text-gray-400 text-[10px] ml-2">
                  (3 items)
                </span>
              </th>
              <th className="py-3 px-4 text-sm">Price</th>
              <th className="py-3 px-4 text-sm">Quantity</th>
              <th className="py-3 px-4 text-sm">Total</th>
              <th className="py-3 px-4">
                <input type="checkbox" />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>

        {/* Mobile card layout for small screens */}
        <div className="lg:hidden space-y-4">
          <MobileProductCard
            products={products}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
