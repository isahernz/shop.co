import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <header>
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-5 px-4 lg:px-0">
        <Logo />
        <ul>
          <li className="relative">
            <NavLink route="/shopping-cart">
              <ShoppingCart />
            </NavLink>
            <span className="size-5 grid place-content-center absolute rounded-full bg-red-400 text-xs text-white px-2 -top-2 -right-2.5">
              {context.count}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
