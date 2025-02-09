import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
import { ProductCard } from "../ProductCard";

export const NewArrivals = () => {
  const {
    data: products,
    error,
    loading,
  } = useFetch<ProductProps[]>("https://fakestoreapi.com/products?limit=4");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="px-4 mt-10">
      <h2 className="text-3xl text-center mb-8 font-bold uppercase">
        New Arrivals
      </h2>
      <div className="flex gap-x-4 overflow-x-auto mb-3">
        {products?.map((product: ProductProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
