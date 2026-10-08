const Card = ({ children }) => {
  return (
    <div className="font-archivo bg-white w-full rounded-lg shadow-md p-4 md:p-8 animate-fadeIn h-auto flex flex-col justify-start overflow-auto mb-18 mt-4">
      {children}
    </div>
  );
};

export default Card;
