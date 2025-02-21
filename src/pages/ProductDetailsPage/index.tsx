import { useParams } from "react-router";
import { MainLayout } from "../../layouts/MainLayout";
import { ProductDetailsContent } from "../../components/ProductDetailsContent";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <ProductDetailsContent id={id} />
    </MainLayout>
  );
};
