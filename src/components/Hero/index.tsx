import { HighlightProps } from "../../types/highlight";
import { Button } from "../Button";
import { StoreHighlight } from "../StoreHighlight";

import trendyPosing from "../../assets/images/trendy-fashionable-couple-posing.jpg";

export const Hero = () => {
  const highlights: HighlightProps[] = [
    {
      id: 1,
      title: "200+",
      description: "International Brands",
    },
    {
      id: 2,
      title: "2,000+",
      description: "High-Quality Products",
    },
    { id: 3, title: "30,000+", description: "Happy Customers" },
  ];

  return (
    <section className="  bg-gray-soft">
      <div className="flex flex-col md:flex-row md:justify-between  max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 px-4 mb-6 max-w-2xl py-10 md:py-28">
          <h1 className="text-4xl lg:text-6xl text-balance font-bold uppercase font-bowlby tracking-wider">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm lg:text-base text-black/60 text-pretty ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button label="Shop Now" className="bg-black text-white" />
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mt-6">
            {highlights.map((highlight) => (
              <StoreHighlight key={highlight.id} {...highlight} />
            ))}
          </div>
        </div>

        <div className="bg-[url('/trendy-fashionable-couple-posing.jpg')] bg-no-repeat bg-cover w-full h-[448px] md:bg-center md:h-auto lg:bg-[center_top_1rem]"></div>
      </div>
    </section>
  );
};
