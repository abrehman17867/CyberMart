"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/app/Constants/products";
import ProductCard from "@/app/Common/ProductCard";

const PopularProductSection = () => {
  const [visibleProducts, setVisibleProducts] = useState(10);  // Initially show 10 products (2 rows of 5)
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisible) => {
        // Add 10 more products (2 rows of 5) on each click
        return prevVisible + 10;
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="relative w-full text-[#17181B] py-6">
      {/* Header */}
      <div className="mb-5 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-auto text-left flex flex-col sm:flex-row sm:items-center">
          <h2 className="text-lg sm:text-xl font-bold">
            Popular products based on this item
          </h2>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-10">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < products.length && (
        <div className="mt-8 flex justify-center">
          <button
            className={`px-6 py-2 bg-[#F48603] text-white font-semibold rounded-lg flex items-center justify-center ${
              loading
                ? "cursor-not-allowed"
                : "hover:bg-[#F58000] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            }`}
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? (
              <>
                <Image
                  src="/icons/loading.png"
                  alt="Loading"
                  width={20}
                  height={20}
                  className="animate-spin mr-2"
                />
                Load More
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularProductSection;
