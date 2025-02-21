import { Link } from "react-router";
import shopLogo from "../../assets/images/shop.co.svg";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src={shopLogo}
        alt="Shop.co - Online Shopping"
        className="w-32 h-full"
      />
    </Link>
  );
};
