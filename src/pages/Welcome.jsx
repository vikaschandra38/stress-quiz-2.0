import { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import ProgressBar from "../components/ProgressBar";

const WELCOME = {
  title: "Police Stress Quiz",
  description:
    "As a cop, your job can push you to the limit. Take our 2 minute quiz and see how you perform compared to other cops.",
  disclaimer: "Your responses are confidential and used only for assessment purposes.",
};

const Welcome = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="h-full flex flex-col justify-start items-center relative">
      <div className="p-4 md:p-8">
        {/* Logo/Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">{WELCOME.title}</h1>
          <div className="h-1.5 w-32 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-black mb-4 font-normal">{WELCOME.description}</p>
        </div>

        {/* Progress Bar */}
        <ProgressBar setShowButton={setShowButton} />

        {/* Footer note */}
        <p className="text-center text-gray text-sm md:text-md mt-8 md:mt-10">
          {WELCOME.disclaimer}
        </p>
      </div>
      {/* CTA Button */}
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        {showButton && <ButtonLink to="/quiz" text="Begin Quiz" />}
      </div>
    </div>
  );
};

export default Welcome;
