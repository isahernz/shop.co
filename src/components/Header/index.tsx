import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-4 bg-white">
      <div className="flex items-center gap-4">
        <button>
          <Menu />
        </button>
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <Search />
        <ShoppingCart />
        <User />
      </div>
    </header>
  );
};
