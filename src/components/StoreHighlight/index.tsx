import { HighlightProps } from "../../types/highlight";

export const StoreHighlight = ({ title, description }: HighlightProps) => {
  return (
    <article className="max-w-max nth-[3n+1]:border-r nth-[3n+1]:pr-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-xs text-black/60 text-nowrap">{description}</p>
    </article>
  );
};
