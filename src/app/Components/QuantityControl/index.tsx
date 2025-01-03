interface QuantityControlProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }
  
  const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, onIncrement, onDecrement }) => (
    <div className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 space-x-3">
      <button
        className="w-6 h-6 bg-gray-200 rounded-full text-gray-600 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
        onClick={onDecrement}
      >
        -
      </button>
      <span className="font-medium text-xs">{quantity}</span>
      <button
        className="w-6 h-6 bg-gray-200 rounded-full text-gray-700 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
  
  export default QuantityControl;
  