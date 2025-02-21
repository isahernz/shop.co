import { Link } from "react-router";
import { cn } from "../../lib/utils";

interface ActionLinkProps {
  label: string;
  route: string;
  className?: string;
}

export const ActionLink = ({ label, route, className }: ActionLinkProps) => {
  return (
    <Link
      to={route}
      className={cn(
        "w-full sm:max-w-52 h-14 py-4 inline-flex justify-center items-center rounded-full font-medium",
        className
      )}
    >
      {label}
    </Link>
  );
};
