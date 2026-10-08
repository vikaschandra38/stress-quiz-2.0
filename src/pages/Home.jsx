import { Outlet } from "react-router";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden font-archivo">
      <Header />
      <main className="flex-1 h-full w-full md:max-w-5xl mx-auto flex flex-col items-center md:justify-start p-2 md:p-0 overflow-y-auto">
        <Card>
          <Outlet />
        </Card>
      </main>
    </div>
  );
};

export default Home;
