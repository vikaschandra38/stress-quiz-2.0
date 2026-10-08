import { Link } from "react-router";
import Card from "../components/Card";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-accent max-w-5xl mx-auto flex items-center justify-center">
      <Card>
        <h2 className="text-primary text-3xl text-center">404 - Page Not Found</h2>
        <p className="text-2xl text-center mt-8">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="text-xl text-center mt-8 py-3 px-4 border border-primary bg-primary text-white rounded-lg w-1/3 mx-auto"
        >
          Go Home
        </Link>
      </Card>
    </div>
  );
};
export default NotFound;
