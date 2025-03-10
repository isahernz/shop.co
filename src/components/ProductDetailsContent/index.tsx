import { AddToCartButton } from "../../components/AddToCartButton";
import { ProductQuantitySelector } from "../../components/ProductQuantitySelector";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export const ProductDetailsContent = ({ id }: { id: string | undefined }) => {
  const { addToCart } = useShoppingCart();

  const {
    data: product,
    error,
    loading,
  } = useFetch<ProductProps>(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error</p>;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <section className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6 max-w-6xl mx-auto">
      <figure className="w-full h-[290px] sm:w-[290px] sm:h-auto rounded-3xl bg-ivory-mist grid place-content-center shrink-0">
        <img
          src={product?.image}
          alt={product?.title}
          className="size-40 mix-blend-multiply object-contain "
        />
      </figure>
      <div className="flex flex-col gap-y-6">
        <div>
          <h1 className="text-2xl font-bold uppercase font-bowlby tracking-wider mb-5">
            {product?.title}
          </h1>
          <p className="text-xl text-black font-bold slashed-zero tabular-nums mb-3">
            ${product?.price}
          </p>
          <p className="text-sm text-black/60 text-pretty">
            {product?.description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ProductQuantitySelector initialValue={product?.quantity} />
          <AddToCartButton
            label="Add to Cart"
            handleOnClick={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
};
