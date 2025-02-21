import { Link } from "react-router";

interface NavLinkProps {
  label?: string;
  children?: React.ReactNode;
  route: string;
}

export const NavLink = ({ label, children, route }: NavLinkProps) => {
  return <Link to={route}>{label || children}</Link>;
};
