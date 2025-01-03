// "use client";
// import { useState, useEffect } from "react";
// import { products } from "@/app/Constants/products";
// import ProductCard from "../../Common/ProductCard";


// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); 
//     };

//     handleResize(); 
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile;
// };

// const ProductCarousel = () => {
//   const isMobile = useIsMobile();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const itemsPerView = isMobile ? 2 : 4;

  
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + itemsPerView >= products.length
//         ? prevIndex
//         : prevIndex + itemsPerView
//     );
//   };


//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? prevIndex : prevIndex - itemsPerView
//     );
//   };

//   return (
//     <div className="relative w-full text-[#17181B] py-6">
//       <div className="mb-5 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between">
      
//         <div className="w-full sm:w-auto text-left flex flex-col sm:flex-row sm:items-center">
//           <h2 className="text-lg sm:text-xl font-bold">
//             Products you may also like
//           </h2>
//           <span className="ml-0 sm:ml-3 text-[#F48603] text-xs sm:text-xs opacity-80 cursor-pointer hover:underline block sm:inline">
//             See more &gt;
//           </span>
//         </div>


//         <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          
//           <div className="mt-4 sm:mt-0 flex items-center sm:space-x-3 space-x-2">
//             {" "}
            
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className="p-2 rounded-full transition"
//             >
//               <svg
//                 className={`w-6 h-6 ${
//                   currentIndex === 0 ? "opacity-50" : "opacity-100"
//                 }`} 
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke={currentIndex === 0 ? "#DCDDDD" : "#68696A"} 
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m15 19-7-7 7-7"
//                 />
//               </svg>
//             </button>
            
//             <button
//               onClick={handleNext}
//               disabled={currentIndex + itemsPerView >= products.length}
//               className="p-2 rounded-full transition"
//             >
//               <svg
//                 className={`w-6 h-6 ${
//                   currentIndex + itemsPerView >= products.length
//                     ? "opacity-50"
//                     : "opacity-100"
//                 }`} 
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke={
//                   currentIndex + itemsPerView >= products.length
//                     ? "#DCDDDD"
//                     : "#68696A"
//                 }
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m9 5 7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Container */}
//       <div className="flex justify-center items-center relative">
//         <div className="flex space-x-4 overflow-hidden w-full max-w-7xl px-4">
//           {products
//             .slice(currentIndex, currentIndex + itemsPerView)
//             .map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCarousel;


"use client";
import { useState, useEffect } from "react";
import { products } from "@/app/Constants/products";
import ProductCard from "../../Common/ProductCard";

const useDeviceWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceWidth;
};

const ProductCarousel = () => {
  const deviceWidth = useDeviceWidth();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine items per view based on screen size
  const itemsPerView = deviceWidth
    ? deviceWidth < 768
      ? 2 // Mobile: 2 items
      : deviceWidth >= 1024
      ? 5 // Large screens: 6 items
      : 4 // Default: 4 items for tablets/medium screens
    : 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= products.length
        ? prevIndex
        : prevIndex + itemsPerView
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - itemsPerView
    );
  };

  return (
    <div className="relative w-full text-[#17181B] py-6">
      <div className="mb-5 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-auto text-left flex flex-col sm:flex-row sm:items-center">
          <h2 className="text-lg sm:text-xl font-bold">
            Products you may also like
          </h2>
          <span className="ml-0 sm:ml-3 text-[#F48603] text-xs sm:text-xs opacity-80 cursor-pointer hover:underline block sm:inline">
            See more &gt;
          </span>
        </div>

        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <div className="mt-4 sm:mt-0 flex items-center sm:space-x-3 space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full transition"
            >
              <svg
                className={`w-6 h-6 ${
                  currentIndex === 0 ? "opacity-50" : "opacity-100"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke={currentIndex === 0 ? "#DCDDDD" : "#68696A"}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerView >= products.length}
              className="p-2 rounded-full transition"
            >
              <svg
                className={`w-6 h-6 ${
                  currentIndex + itemsPerView >= products.length
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke={
                  currentIndex + itemsPerView >= products.length
                    ? "#DCDDDD"
                    : "#68696A"
                }
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="flex justify-center items-center relative">
        <div className="flex space-x-4 overflow-hidden w-full max-w-7xl px-4">
          {products
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
