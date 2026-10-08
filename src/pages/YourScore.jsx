import { useLocation } from "react-router";
import ButtonLink from "../components/ButtonLink";
import { PAGE_LINKS } from "../constants/app.constants";
import { convertScoreToPercentage, convertScoreToStressBand } from "../utils/app.utils";

const YourScore = () => {
  const { score = 14 } = useLocation().state || { score: 14 };

  const percentage = convertScoreToPercentage(score);
  const stressBand = convertScoreToStressBand(score);

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex flex-col gap-1 items-center justify-center">
          <h3 className="text-lg font-normal text-black mb-0">Your Stress Level:</h3>
          <h1 className="text-3xl font-extrabold text-primary">{stressBand.title}</h1>
          <p className="text-lg text-center px-4 mt-2">{stressBand.description}</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2 bg-black text-white border-2 border-black rounded-lg shadow-xs">
            <ul role="list" className="space-y-3 p-6 divide-y divide-default">
              <li className="flex items-center justify-between pb-3">
                <div className="flex justify-center items-center w-full">
                  <h3 className="text-md font-semibold min-h-8 md:min-h-12 flex items-center justify-center">
                    You are here:{" "}
                    <span className="text-2xl font-bold text-primary">&nbsp;{percentage}%</span>
                  </h3>
                </div>
              </li>
              <li className="flex items-center justify-between pb-3 border-b-0">
                <div className="flex items-center text-body">
                  <span className="text-xl font-bold text-primary">Struggles:</span>
                </div>
              </li>
              {stressBand.struggles.map((struggle, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between pb-3 md:h-10 border-b-white"
                >
                  <div className="flex items-center text-body text-sm">
                    <span>{struggle}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-white text-black border-2 border-primary rounded-lg shadow-xs">
            <ul role="list" className="space-y-3 p-6 divide-y divide-default">
              <li className="flex items-center justify-between pb-3">
                <div className="flex justify-center items-center w-full">
                  <h3 className="text-md font-semibold min-h-8 md:min-h-12 flex items-center justify-center">
                    Don’t Let the Job Destroy You Course
                  </h3>
                </div>
              </li>
              <li className="flex items-center justify-between pb-3 border-b-0">
                <div className="flex items-center text-body">
                  <span className="text-xl font-bold text-primary">Solutions:</span>
                </div>
              </li>
              {stressBand.solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between pb-3 md:h-10 border-b-primary"
                >
                  <div className="flex items-center text-body text-sm font-bold">
                    <span>{solution}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        <ButtonLink
          state={{ score }}
          text="Back"
          to={PAGE_LINKS.score.previous}
          isSecondary={true}
        />

        <ButtonLink text="Next" to={PAGE_LINKS.score.next} />
      </div>
    </div>
  );
};

export default YourScore;
