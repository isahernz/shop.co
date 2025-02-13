import { HighlightProps } from "../../types/highlight";

export const StoreHighlight = ({ title, description }: HighlightProps) => {
  return (
    <article className="max-w-max nth-[3n+1]:border-r nth-[3n+1]:pr-8">
      <h3 className="text-2xl font-bold md:text-[40px]">{title}</h3>
      <p className="text-xs text-black/60 text-nowrap md:text-base">
        {description}
      </p>
    </article>
  );
};
