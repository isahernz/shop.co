import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";

export const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    loading,
  } = useFetch<ProductProps>(`https://fakestoreapi.com/products/${id}`);
  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  );
};
