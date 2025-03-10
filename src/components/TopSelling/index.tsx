import { Link } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
import { ProductCard } from "../ProductCard";

export const TopSelling = () => {
  const {
    data: products,
    error,
    loading,
  } = useFetch<ProductProps[]>(
    "https://fakestoreapi.com/products/category/women's clothing"
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="max-w-7xl mx-auto mt-12 md:mt-14 lg:mt-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-11 lg:mb-14 font-bold uppercase font-bowlby tracking-wider">
        Top Selling
      </h2>
      <div className="relative flex w-full snap-x snap-mandatory gap-x-4 overflow-x-auto mb-8 hide-scrollbar">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products?.map((product: ProductProps) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
      <Link
        to="all-products"
        className="w-full sm:max-w-52 h-13 py-4 inline-flex justify-center items-center rounded-full font-medium border border-black/10 transition-all hover:scale-110"
      >
        View All
      </Link>
    </section>
  );
};
