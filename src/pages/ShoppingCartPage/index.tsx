import { CartItem } from "../../components/CartItem";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { MainLayout } from "../../layouts/MainLayout";

export const ShoppingCartPage = () => {
  const { cartItems } = useShoppingCart();

  return (
    <MainLayout>
      <h1 className="text-3xl font-bowlby mb-6">Your Cart</h1>
      <section className="flex flex-col max-w-6xl mx-auto divide-y divide-black/10 p-4 border border-black/10 rounded-3xl">
        {cartItems.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </section>
    </MainLayout>
  );
};
