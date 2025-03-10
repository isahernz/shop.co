import { ProductQuantitySelector } from "../../components/ProductQuantitySelector";
import { CartRemoveButton } from "../../components/CartRemoveButton";
import { ProductProps } from "../../types/product";

export const CartItem = ({ image, title, price, quantity }: ProductProps) => {
  return (
    <article className="flex gap-x-4 py-6 first:pt-0 last:pb-0">
      <figure className="size-28 rounded-3xl bg-ivory-mist grid place-content-center shrink-0">
        <img
          src={image}
          alt={title}
          className="size-24 mix-blend-multiply object-contain aspect-square"
        />
      </figure>
      <div className="flex flex-col">
        <div className="flex gap-2 flex-grow">
          <h3 className="font-bold ">{title}</h3>
          <CartRemoveButton />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl text-black font-bold slashed-zero tabular-nums">
            $ {price}
          </span>
          <ProductQuantitySelector initialValue={quantity} />
        </div>
      </div>
    </article>
  );
};
