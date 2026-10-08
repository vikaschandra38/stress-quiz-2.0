Goal: To develop a React application that displays Quiz questions and captures user responses. After each question, we display a trivavia fact related to stress management. Upon completion of the quiz, the application should calculate and display the user's stress level based on their responses.

Technologies to use: React, JavaScript, HTML, CSS with Tailwind CSS framework.

Requirements:

1. Create a React component named `QuizApp`.jsx that will serve as the main application component.
2. The application should display a series of multiple-choice questions to the user.
3. Each question should have five possible answers, and the user should be able to select one answer per question.
4. User Options should be presented as radio buttons as below:
   - Strongly Disagree
   - Slightly Disagree
   - Neither Agree nor Disagree
   - Slightly Agree
   - Strongly Agree
5. After the user selects an answer for each question, they should be able to submit their responses.
6. Display the next button only after an option is selected.
6. Upon submission, the application should calculate and display the user's score based on the number of correct answers.
7. The application should be styled using Tailwind CSS to ensure a modern, responsive and visually appealing design.
8. Implement state management to keep track of the user's selected answers.
9. Ensure the application is modular, with separate components for questions, answers, and score display.
10. Include error handling to manage cases where no answer is selected before submission.---
description: Instructions for building a React Quiz Application with Tailwind CSS.
applyTo: **/*.jsx, **/*.js
---

Reference the following links for implementing the requirements:

- We are building a React application that replicates the functionality pixel by pixel of the quiz app at https://workwithshadow.com/main/live/quiz
- The react application should use Tailwind CSS for styling as seen in the reference app - https://policestresscourse.com/. Ensure style, fonts, colors, and layout match the reference app.
- Please use primary color #f86216ff for buttons and highlights, accent color #f8f2ea for background and bold black color for text.
- Use the 'Archivo Black' font for headings and 'Open Sans' for body text, as seen in the reference app.
- The app UI should be same as the following attached image located at - src/UI Figma Screenshot.png


SCORING QUIZ LOGIC:

There are 14 questions. Each answer has a score (1 to 5), as shown above.

Based on results, users should be placed into these bands.


BAND                            Raw Score
Low Stress(0 to 25%)            14 to 28
Medium Stress (25 to 50%)       29 to 42
High Stress (50 to 75%)         43 to 56
Extreme Stress (75 to 100%)     57 to 70

CONVERTING SCORE TO A PERCENTAGE
This is used for slide 21 (Your Results).
Raw score = the sum of each question’s scores.

Percentage score = (Raw Score - 14) / 56 * 100

GOOGLE TAG MANAGER EVENTS:
For each step, fire google tag manager events like funnel_stage_1, funnel_stage_2, etc 




