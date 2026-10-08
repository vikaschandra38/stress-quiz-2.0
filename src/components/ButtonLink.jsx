import { Link } from "react-router";

const ButtonLink = ({ to, text = "Continue", isSecondary = false, state = {}}) => {
  return (
    <Link
     state={state}
      to={to}
      className={`text-center min-w-1/2 mx-auto py-3 md:py-4 px-8 rounded-full text-lg md:text-xl font-bold transition-all uppercase cursor-pointer ${
        isSecondary ? "bg-black text-white" : "bg-primary text-white"
      }`}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
