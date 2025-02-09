import { ProductProps } from "../../types/product";

export const ProductCard = ({ id, title, price, image }: ProductProps) => {
  return (
    <article className="w-52">
      <figure className="size-52 rounded-3xl bg-ivory-mist grid place-content-center">
        <img
          src={image}
          alt={title}
          className="size-40 object-cover mix-blend-multiply"
        />
      </figure>
      <div className="flex flex-col gap-y-1">
        <a href={`/product/${id}`} className="text-base font-bold text-black">
          {title}
        </a>
        <p className="text-xl text-black font-bold">${price}</p>
      </div>
    </article>
  );
};
