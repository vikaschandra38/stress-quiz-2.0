import { useLocation } from "react-router";
import ButtonLink from "../components/ButtonLink";
import { PAGE_LINKS } from "../constants/app.constants";
import { convertScoreToPercentage, convertScoreToStressBand } from "../utils/app.utils";
import { useEffect } from "react";
import { trackEvent } from "../utils/gtm";

const Results = () => {
  const { score } = useLocation().state || { score: 14 };

  const percentage = convertScoreToPercentage(score);
  const stressBand = convertScoreToStressBand(score);

  useEffect(() => {
    trackEvent("results_viewed", {
      raw_score: score,
      percentage_score: percentage,
      stress_band: stressBand.title,
    });
  }, [percentage, score, stressBand]);

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div>
        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center">
            Your Operational Stress Impact Score:
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">
            {percentage}% – {stressBand.title}
          </h1>
        </div>

        <h4 className="text-lg md:text-xl  font-bold text-black text-center">
          {stressBand.description}
        </h4>

        <p className="text-lg md:text-xl text-center mb-4 md:mb-8 my-6">
         Go and check your email now for the full, detailed results.
        </p>
      </div>
      {/* <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        <ButtonLink text="Continue" to={PAGE_LINKS.results.next} state={{ score }} />
      </div> */}
    </div>
  );
};

export default Results;
