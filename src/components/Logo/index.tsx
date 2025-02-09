import shopLogo from "../../assets/images/shop.co.svg";

export const Logo = () => {
  return (
    <a href="/">
      <img
        src={shopLogo}
        alt="Shop.co - Online Shopping"
        className="w-32 h-full"
      />
    </a>
  );
};
