interface AddToCartButtonProps {
  label?: string;
  children?: React.ReactNode;
  handleOnClick: () => void;
}
export const AddToCartButton = ({
  label,
  children,
  handleOnClick,
}: AddToCartButtonProps) => {
  return (
    <button
      className="w-full flex-grow h-12 py-2 inline-flex justify-center items-center rounded-full font-medium bg-black text-white cursor-pointer"
      onClick={handleOnClick}
    >
      {children || label}
    </button>
  );
};
