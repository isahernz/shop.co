import { HighlightProps } from "../../types/highlight";
import { Button } from "../Button";
import { StoreHighlight } from "../StoreHighlight";

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
      <div className="flex flex-col md:flex-row  max-w-6xl mx-auto">
        <div className="px-4 max-w-2xl pt-10 md:py-28 lg:px-0">
          <h1 className="text-4xl  text-balance font-bold uppercase font-bowlby tracking-wider mb-5 lg:text-6xl lg:mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm lg:text-base text-black/60 text-pretty mb-6 lg:mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button label="Shop Now" className="bg-black text-white" />
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mt-5 lg:mt-12 lg:justify-start">
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
