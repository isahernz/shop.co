import { cn } from "../../lib/utils";

interface ButtonProps {
  label: string;
  className?: string;
}

export const Button = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full md:max-w-52 h-14 py-4 inline-flex justify-center items-center rounded-full font-medium",
        className
      )}
    >
      {label}
    </button>
  );
};
