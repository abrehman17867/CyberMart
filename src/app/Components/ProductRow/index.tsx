import Image from "next/image";
import ProgressIndicator from "../ProgressIndicator";

interface Product {
  id: number;
  title: string;
  color: string;
  size: string;
  price: number;
  oldPrice: number;
  image: string;
  limitedDeal: boolean;
  timer?: string;
  quantity: number;
  progress?: number;
  sellerName: string;
}

interface ProductRowProps {
  product: Product;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductRow = ({
  product,
  onIncrement,
  onDecrement,
  onDelete,
}: ProductRowProps) => {
  return (
    <>
      {/* Progress Indicator */}
      <tr>
        <td colSpan={5} className="py-2 px-4">
          <div className="w-full">
            <ProgressIndicator
              progress={product.progress || 0}
              sellerName={product.sellerName}
            />
          </div>
        </td>
      </tr>

      {/* Product Details */}
      <tr className="mb-4">
        <td className="py-4 px-4 flex items-center gap-4">
          <Image
            src={product.image}
            alt={product.title}
            width={120}
            height={120}
            className="rounded-sm"
          />
          <div>
            <p className="font-bold mt-3 text-sm opacity-80">{product.title}</p>
            <p className="text-xs text-gray-500 m-1">
              {product.color} | {product.size}
            </p>
            {product.limitedDeal && (
              <div className="pt-1 flex items-start pb-4 relative">
                <div className="text-[12px] flex items-center gap-2 bg-[#FF0102] text-white px-2 py-[0.001rem] rounded-r-md rounded-tl-3xl rounded-bl-3xl">
                  <span className="font-bold text-lg mr-[-1px]">•</span>
                  <span className="font-medium text-xs">Limited Time Deal</span>
                  <span className="text-gray-400 opacity-40 mx-4">|</span>
                  <Image
                    src="/icons/clock.png"
                    alt="Clock Icon"
                    width={12}
                    height={12}
                    className="inline"
                  />
                  <span className="mr-[-1px]">{product.timer}</span>
                </div>
              </div>
            )}
          </div>
        </td>

        <td className="py-4 px-4 text-orange-500 font-bold">
          <span className="inline-flex items-center gap-2">
            ${product.price.toFixed(2)}
            <span className="line-through text-sm text-gray-400">
              ${product.oldPrice.toFixed(2)}
            </span>
          </span>
        </td>

        <td className="py-4 px-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 space-x-3">
              <button
                className="w-6 h-6 bg-gray-200 rounded-full text-gray-600 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
                onClick={() => onDecrement(product.id)}
              >
                -
              </button>
              <span className="font-medium text-xs">{product.quantity}</span>
              <button
                className="w-6 h-6 bg-gray-200 rounded-full text-gray-700 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
                onClick={() => onIncrement(product.id)}
              >
                +
              </button>
            </div>
            <button onClick={() => onDelete(product.id)}>
              <Image
                src="/icons/delete-icon.png"
                alt="Delete"
                width={27}
                height={27}
                className="cursor-pointer"
              />
            </button>
          </div>
        </td>

        <td className="py-4 px-4 text-orange-500 font-bold">
          ${(product.price * product.quantity).toFixed(2)}
        </td>

        <td className="py-3 px-4">
          <input type="checkbox" />
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
