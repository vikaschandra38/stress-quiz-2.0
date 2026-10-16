import Button from "../components/Button";
// import sevenNewsImg from "/assets/7news.png";
// import courierMailImg from "/assets/courier-mail.png";
import speakerImg from "/assets/speaker.jpg";
// import tenImg from "/assets/ten.png";

const SocialTriviaFact = ({ onClick }) => {

  const logos = [
    { src: "/assets/slide-2/irvine_police_badge.png", alt: "Irvine Police Badge" },
    { src: "/assets/slide-2/ATK9.jpg", alt: "ATK9" },
    { src: "/assets/slide-2/elk_grove.jpg", alt: "ELK Grove Police Badge" },
    { src: "/assets/slide-2/new_south_wales_police_badge.jpg", alt: "New South Wales Police Badge" },
    { src: "/assets/slide-2/ohio_state_patrol_badge.jpg", alt: "Ohio State Patrol Badge" },
    { src: "/assets/slide-2/orange_county_sheriff_badge.jpg", alt: "Orange County Sheriff Badge" },
    { src: "/assets/slide-2/queensland_police_badge.jpg", alt: "Queensland Police Badge" },
    { src: "/assets/slide-2/sacramento_county_badge.jpg", alt: "Sacramento County Badge" },
    { src: "/assets/slide-2/victoria_police_badge.jpg", alt: "Victoria Police Badge" },
  ];

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div className="flex flex-col md:flex-row gap-2 justify-center">
        {/* Image */}
        <div className="flex-1">
          <img
            src={speakerImg}
            alt="Speaker"
            className="w-full h-full md:h-full md:min-h-96 rounded-md object-cover object-center"
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
          {/* <div>
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
          </div> */}

          {/* A div that displays a 3x3 grid gallery of police badge logos */}
          <div>
            <div className="grid grid-cols-3 gap-2 justify-items-center items-center">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 md:h-36 object-cover object-center rounded-md shadow-md hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              ))}
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
