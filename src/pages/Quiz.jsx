import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Question from "../components/Question";
import { PAGE_LINKS } from "../constants/app.constants";
import questions from "../mocks/questions.json";
import { initGTM, trackEvent } from "../utils/gtm";
import SocialTriviaFact from "./SocialTriviaFact";
import StatisticTriviaFact from "./StatisticTriviaFact";

const STATISTIC_SLIDES = [2, 7, 14];

const Quiz = () => {
  const [screen, setScreen] = useState("quiz"); // quiz, social-proof, statistic
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();

  // Initialize GTM on mount
  useEffect(() => {
    initGTM();
    trackEvent("page_view", {
      page_title: "Quiz Application",
      page_path: "/quiz",
    });
    trackEvent("quiz_started", { total_questions: questions.questions.length });
  }, []);

  // Track funnel stages
  useEffect(() => {
    trackEvent("funnel_stage_quiz", {
      stage: `question_${currentQuestion + 1}`,
      question: questions.questions[currentQuestion],
    });
  }, [currentQuestion]);

  const handleAnswerSelect = (score) => {
    setSelectedAnswer(score);
    setShowNext(true);
  };

  const handleSetScreen = (question) => {
    const nextQuestion = question + 1;
    if (STATISTIC_SLIDES.includes(nextQuestion)) {
      setScreen("statistic");
    } else if (nextQuestion === 1) {
      setScreen("social-proof");
    } else {
      setScreen("quiz");
    }
    setCurrentQuestion(nextQuestion);
  }

  const handlePreviousQuestion = () => {
    if (screen === "quiz") {
      if (STATISTIC_SLIDES.includes(currentQuestion)) {
        setScreen("statistic");
        return;
      } else if (currentQuestion === 1) {
        setScreen("social-proof");
        return;
      }
    }
    const prevQuestion = currentQuestion - 1;
    setCurrentQuestion(prevQuestion);
    setScreen("quiz");
    setSelectedAnswer(answers[prevQuestion] || null);
    setShowNext(!!answers[prevQuestion]);
  }

  const handleNextQuestion = () => {
    // Store the answer
    const newAnswers = {
      ...answers,
      [currentQuestion]: selectedAnswer,
    };
    setAnswers(newAnswers);
  
    // Track answer
    trackEvent("answer_submitted", {
      question_number: currentQuestion + 1,
      answer_score: selectedAnswer,
      question_text: questions.questions[currentQuestion],
    });
    handleSetScreen(currentQuestion);

    const nextQuestion = currentQuestion + 1;
    const existingAnswer = answers[nextQuestion];
    setSelectedAnswer(existingAnswer || null);
    setShowNext(!!existingAnswer);
  };

  const handleSlideChange = (screenName) => {
    if (currentQuestion >= questions.questions.length) {
      handleQuizSubmission();
    } else {
      setScreen(screenName);
    }
  };

  const handleQuizSubmission = () => {
    // Store the final answer
    const newAnswers = {
      ...answers,
      [currentQuestion]: selectedAnswer,
    };
    setAnswers(newAnswers);

    // Track final answer
    trackEvent("answer_submitted", {
      question_number: currentQuestion + 1,
      answer_score: selectedAnswer,
      question_text: questions.questions[currentQuestion],
    });

    trackEvent("quiz_completed", {
      total_questions: questions.questions.length,
      answers: newAnswers,
    });

    // For now, just log the answers
    console.log("Quiz submitted with answers:", newAnswers);
    const score = handleRawScore();
    navigate(PAGE_LINKS.email.previous, { state: { score } });
  }

  const handleRawScore = () => {
    let total = 0;
    Object.values(answers).forEach((score) => {
      total += score;
    });
    return total;
  };


  return (
    <>
      {screen === "quiz" && (
        <Question
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.questions.length}
          questionText={questions.questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleAnswerSelect}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          showNext={showNext}
        />
      )}

      {screen === "social-proof" && <SocialTriviaFact onClick={handleSlideChange} />}
      {screen === "statistic" && (
        <StatisticTriviaFact onClick={handleSlideChange} index={currentQuestion} />
      )}
    </>
  );
};

export default Quiz;
