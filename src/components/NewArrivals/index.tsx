import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
import { ProductCard } from "../ProductCard";

export const NewArrivals = () => {
  const {
    data: products,
    error,
    loading,
  } = useFetch<ProductProps[]>("https://fakestoreapi.com/products?limit=4");

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="max-w-7xl mx-auto mt-12 md:mt-14 lg:mt-16 px-4 ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-11 lg:mb-14 font-bold uppercase font-bowlby tracking-wider">
        New Arrivals
      </h2>
      <div className="relative flex w-full snap-x snap-mandatory gap-x-4 overflow-x-auto">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products?.map((product: ProductProps) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </section>
  );
};
