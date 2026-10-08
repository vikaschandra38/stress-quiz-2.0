import Button from "../components/Button";
import sevenNewsImg from "/assets/7news.png";
import courierMailImg from "/assets/courier-mail.png";
import speakerImg from "/assets/speaker.jpg";
import tenImg from "/assets/ten.png";

const SocialTriviaFact = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-start items-center relative">
      <div className="flex flex-col md:flex-row gap-2 justify-center">
        {/* Image */}
        <div className="flex-1">
          <img
            src={speakerImg}
            alt="Speaker"
            className="w-full h-full md:h-full md:min-h-96 md:max-h-110 rounded-md object-cover object-center"
          />
        </div>

        {/* Main Text */}
        <div className="flex-1 md:p-4">
          <div className="mb-4 md:mb-8">
            <p className="text-black font-semibold text-lg md:text-xl text-center">
              Over <span className="font-semibold text-2xl md:text-3xl text-primary">5,235</span>{" "}
              cops have attended Shaun's Police Stress training. 91.8% of their anonymous feedback
              rated it 5 stars.
            </p>
          </div>

          {/* Mentioned In Section */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-3 text-center underline">
              Mentioned in
            </h4>
            <div className="flex flex-col flex-wrap justify-center items-center gap-1">
              <img src={tenImg} alt="Ten Logo" className="h-18 md:h-18 object-contain" />
              <img
                src={courierMailImg}
                alt="Courier Mail"
                className="h-18 md:h-18 object-contain"
              />
              <img src={sevenNewsImg} alt="7 News" className="h-18 md:h-18 object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        <Button text="Continue" onClick={() => onClick("quiz")} />
      </div>
    </div>
  );
};

export default SocialTriviaFact;
