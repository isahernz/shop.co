import { cn } from "../../lib/utils";

interface ButtonProps {
  label: string;
  className?: string;
}

export const Button = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full h-14 py-4 inline-flex justify-center items-center rounded-full",
        className
      )}
    >
      {label}
    </button>
  );
};
