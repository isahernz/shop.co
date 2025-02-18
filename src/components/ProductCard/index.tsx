import { ProductProps } from "../../types/product";

export const ProductCard = ({ id, title, price, image }: ProductProps) => {
  return (
    <article className="w-full min-w-56 max-w-[296px] shrink-0 snap-center">
      <figure className="w-full h-auto mb-3 rounded-3xl bg-ivory-mist grid place-content-center aspect-square">
        <img
          src={image}
          alt={title}
          className="size-40 mix-blend-multiply object-contain "
        />
      </figure>
      <div className="flex flex-col gap-y-1 text-start">
        <a
          href={`/product/${id}`}
          className="text-base text-pretty font-bold text-black"
        >
          {title}
        </a>
        <p className="text-xl text-black font-bold slashed-zero tabular-nums">
          ${price}
        </p>
      </div>
    </article>
  );
};
