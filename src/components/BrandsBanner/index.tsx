import { BrandProps } from "../../types/brand";
import { Brand } from "../Brand";

export const BrandsBanner = () => {
  const brands: BrandProps[] = [
    {
      id: 1,
      name: "Versace",
      logo: "/brands/versace.svg",
    },
    {
      id: 2,
      name: "Zara",
      logo: "/brands/zara.svg",
    },
    {
      id: 3,
      name: "Gucci",
      logo: "/brands/gucci.svg",
    },
    {
      id: 4,
      name: "Prada",
      logo: "/brands/prada.svg",
    },
    {
      id: 5,
      name: "Calvin Klein",
      logo: "/brands/calvin-klein.svg",
    },
  ];

  return (
    <section className="bg-black flex gap-x-8 gap-y-6 justify-center items-center flex-wrap py-10 px-4">
      {brands.map((brand) => (
        <Brand key={brand.id} {...brand} />
      ))}
    </section>
  );
};
