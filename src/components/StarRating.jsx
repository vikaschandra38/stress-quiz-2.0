const StartRating = () => {
  return (
          <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-3xl md:text-4xl text-primary">
            ★
          </span>
        ))}
      </div>
  );
};

export default StartRating;
