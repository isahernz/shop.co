import { BrandProps } from "../../types/brand";

export const Brand = ({ name, logo }: BrandProps) => {
  return <img src={logo} alt={name} />;
};
