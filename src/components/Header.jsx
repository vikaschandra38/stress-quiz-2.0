import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-black flex items-center w-full py-1 shadow-md px-4 md:px-20">
      <Link to="/">
        <img
          src="/assets/logo.svg"
          alt="Stress Level Quiz Logo"
          className="w-26 h-18 md:w-36 md:h-24 bg-black object-cover"
        />
      </Link>
    </div>
  );
};

export default Header;
