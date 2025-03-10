import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";

export const Navbar = () => {
  const { totalQuantity } = useShoppingCart();

  return (
    <header>
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-5 px-4 border-b border-black/10 lg:px-0">
        <Logo />
        <ul>
          <li className="relative">
            <NavLink route="/shopping-cart">
              <ShoppingCart />
            </NavLink>
            <span className="size-5 grid place-content-center absolute rounded-full bg-red-400 text-xs text-white px-2 -top-2 -right-2.5">
              {totalQuantity}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
