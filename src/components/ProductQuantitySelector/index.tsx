import { useState } from "react";
import { QuantityControlButton } from "../QuantityControlButton";

interface QuantitySelectorProps {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
}

export const ProductQuantitySelector = ({
  initialValue = 1,
  minValue = 0,
  maxValue = 10,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(initialValue);

  const handleDecreaseQuantity = (): void => {
    if (quantity > minValue) {
      const newValue = quantity - 1;
      setQuantity(newValue);
    }
  };

  const handleIncreaseQuantity = (): void => {
    if (quantity < maxValue) {
      const newValue = quantity + 1;
      setQuantity(newValue);
    }
  };

  return (
    <div className="flex w-full h-12 items-center justify-between gap-4 px-4 py-2 bg-gray-soft max-w-max rounded-full">
      <QuantityControlButton label="-" handleOnClick={handleDecreaseQuantity} />
      <span className="px-1">{quantity}</span>
      <QuantityControlButton label="+" handleOnClick={handleIncreaseQuantity} />
    </div>
  );
};
