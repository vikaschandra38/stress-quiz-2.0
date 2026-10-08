import scores from "../mocks/scores.json";


export const convertScoreToPercentage = (score) => {
  return Math.round(((score - 14) / 56) * 100);
};

export const convertScoreToStressBand = (score) => {
  if (score >= 14 && score <= 28) {
    return scores.lowStress;
  } else if (score >= 29 && score <= 42) {
    return scores.mediumStress;
  } else if (score >= 43 && score <= 56) {
    return scores.highStress;
  } else {
    return scores.extremeStress;
  }
};