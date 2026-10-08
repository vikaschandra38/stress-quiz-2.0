import Button from "../components/Button";
import statisticsData from "../mocks/statistics.json";

const StatisticTriviaFact = ({ index = 2, onClick }) => {
  const statistic = statisticsData.find((stat) => stat.id === index) || statisticsData[0];

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Image */}
        <div className="flex-1/3">
          <img
            src={statistic.image}
            alt={statistic.alt}
            className="w-full h-full md:h-full md:min-h-96 md:max-h-110 rounded-md object-cover"
          />
        </div>
        {/* Main Text */}
        <div className="flex-1 flex flex-col gap-2 md:gap-8 justify-center">
          <div className="mb-4 md:mb-8">
            <p className="text-black font-normal text-lg md:text-xl text-left">{statistic.fact}</p>
          </div>

          {/* Mentioned In Section */}
          <div className="flex flex-col">
            <h6 className="text-xl font-semibold text-primary text-left mb-2">Reference:</h6>
            <cite className="text-lg font-semibold text-center">{statistic.reference}</cite>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        <Button text="Continue" onClick={() => onClick("quiz")} />
      </div>
    </div>
  );
};

export default StatisticTriviaFact;
