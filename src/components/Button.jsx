const Button = ({ onClick, text = "Continue", type = "button", disabled = false, isSecondary = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer min-w-1/2 md:min-w-1/3 mx-auto py-3 md:py-4 px-8 rounded-full text-lg md:text-xl font-bold transition-all uppercase ${
        disabled
          ? "bg-gray-400 text-gray-200 cursor-not-allowed opacity-60"
          : isSecondary
            ? "bg-black text-white"
            : "bg-primary text-white"
      }`}>
      {text}
    </button>
  );
};

export default Button;
