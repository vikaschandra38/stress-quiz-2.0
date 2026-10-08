import { useEffect, useState } from "react";
import ButtonLink from "../components/ButtonLink";
import StartRating from "../components/StarRating";
import { PAGE_LINKS } from "../constants/app.constants";

const BuyNow = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Testimonial Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Thousands of Officers Say This{" "}
          <span className="text-primary text-3xl md:text-4xl">Training</span> Has{" "}
          <span className="text-primary text-3xl">Transformed</span> Their Lives
        </h1>

        <div className="flex">
          <img
            src="/assets/buy-course.png"
            height="360"
            width="240"
            alt="The book cover of The Unspoken Burden - A Survival Guide For Police Officers"
            className="object-contain"
          />
        </div>

        {/* Star Rating */}
        <div className="flex flex-col items-center justify-center gap-3">
          <StartRating />
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-semibold">91.8% 5 - Star Rating</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white border-2 border-primary rounded-lg p-6 inline-block shadow-md">
          <p className="text-md mb-3 font-semibold">This offer ends in:</p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
              </p>
              <p className="text-xs font-semibold mt-1 uppercase tracking-wider">min</p>
            </div>
            <p className="text-5xl font-bold text-primary">:</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                {String(timeLeft % 60).padStart(2, "0")}
              </p>
              <p className="text-xs font-semibold mt-1 uppercase tracking-wider">sec</p>
            </div>
          </div>
        </div>

        {/* Limited Time Offer Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Limited Time Offer. Save Over $700
        </h2>

        {/* Offer Details */}
        <p className="text-lg md:text-xl text-center">
          For a short time, you can get full access to the Police Stress & PTSD Prevention Course
          for just <span className="font-bold text-primary">$247</span>, down from the regular price
          of <span className="line-through">$997</span>.
        </p>

        {/* Money Back Guarantee */}
        <div className="bg-white border-2 border-primary rounded-lg p-4 text-center">
          <p className="text-lg md:text-xl font-bold text-primary mb-2">
            30 DAY, NO QUESTIONS ASKED, MONEY BACK GUARANTEE
          </p>
          <p className="text-lg md:text-xl">
            If you don't find this information valuable, I'll refund your money.
          </p>
        </div>

        {/* Call to Action Message */}
        <p className="text-lg md:text-xl font-semibold text-center">
          You've spent years sacrificing for the job. Now it's time to invest in yourself, your
          family, and your future.
        </p>
      </div>
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        {/* Buy Now Button */}
        <ButtonLink text="BUY NOW" to={PAGE_LINKS.buyNow.next} />
      </div>
    </div>
  );
};

export default BuyNow;
