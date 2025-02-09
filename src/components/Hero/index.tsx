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
    <section className="bg-gray-soft">
      <div className="px-4 pt-10 max-w-2xl">
        <div className="flex flex-col gap-5 mb-6">
          <h1 className="text-4xl font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm text-black/60 text-pretty">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <Button label="Shop Now" className="bg-black text-white" />
        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mt-6">
          {highlights.map((highlight) => (
            <StoreHighlight key={highlight.id} {...highlight} />
          ))}
        </div>
      </div>
      <img
        src={trendyPosing}
        alt="Trendy Fashionable Couple Posing"
        className="w-full h-full object-cover"
      />
    </section>
  );
};
