import Button from "./Button";

const Question = ({
  questionNumber,
  totalQuestions,
  questionText,
  selectedAnswer,
  onSelectAnswer,
  onPrevious,
  onNext,
  showNext,
}) => {
  const options = [
    { value: 1, label: "Strongly Disagree" },
    { value: 2, label: "Slightly Disagree" },
    { value: 3, label: "Neither Agree nor Disagree" },
    { value: 4, label: "Slightly Agree" },
    { value: 5, label: "Strongly Agree" },
  ];

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div className="w-full flex flex-col justify-center md:justify-start">
        {/* Header Section */}
        <div className="mb-4 md:mb-6">
          <div className="flex items-start">
            <div className="flex-1">
              <p className="text-xs md:text-sm font-semibold text-primary uppercase">
                ASSESSMENT IN PROGRESS
              </p>
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Question {questionNumber} of {totalQuestions}
                </h3>
                <span className="text-xl md:text-3xl font-bold text-primary">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-4 md:mb-6 text-center flex-1 flex items-center justify-center">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
            {questionText}
          </h2>
        </div>

        {/* Radio Button Options */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-4">
          {options.map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 md:p-5 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                selectedAnswer === option.value
                  ? "border-primary bg-orange-50 shadow-md accent-primary"
                  : "border-gray-300 bg-white hover:border-primary"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option.value}
                checked={selectedAnswer === option.value}
                onChange={() => onSelectAnswer(option.value)}
                className="w-5 h-5 text-primary cursor-pointer shrink-0"
              />
              <span className="ml-4 text-base md:text-lg text-gray-800 font-semibold flex-1">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
      {/* Buttons Section */}
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        {questionNumber > 1 && (
          <Button type="button" text="Back" isSecondary={true} onClick={onPrevious} />
        )}

        {totalQuestions !== questionNumber && (
          <Button type="button" text="Next" onClick={onNext} disabled={!showNext} />
        )}

        {totalQuestions === questionNumber && (
          <Button type="submit" text="Submit" onClick={onNext} disabled={!showNext}/>
        )}
      </div>
    </div>
  );
};

export default Question;
