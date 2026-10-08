import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import "./index.css";
import BuyNow from "./pages/BuyNow.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import CourseIntro from "./pages/CourseIntro.jsx";
import NotFound from "./pages/NotFound.jsx";
import Quiz from "./pages/Quiz.jsx";
import Results from "./pages/Results.jsx";
import Reviews from "./pages/Reviews.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import UserForm from "./pages/UserForm.jsx";
import Welcome from "./pages/Welcome.jsx";
import YourScore from "./pages/YourScore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "email",
        element: <UserForm />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "score",
        element: <YourScore />,
      },
/*       {
        path: "course-intro",
        element: <CourseIntro />,
      },
      {
        path: "course-detail",
        element: <CourseDetail />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "buy-now",
        element: <BuyNow />,
      }, */
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
