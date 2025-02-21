interface QuantityControlButtonProps {
  label: string;
  handleOnClick: () => void;
}

export const QuantityControlButton = ({
  label,
  handleOnClick,
}: QuantityControlButtonProps) => {
  return (
    <button onClick={handleOnClick} className="cursor-pointer">
      {label}
    </button>
  );
};
