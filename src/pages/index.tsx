import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import ProfessionalHistory from "../components/ProfessionalHistory";
import Projects from "../components/Projects";

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="content">
          {activeTab === "about" && <About />}
          {activeTab === "professional-history" && <ProfessionalHistory />}
          {activeTab === "projects" && <Projects />}
        </div>
      </main>
    </div>
  );
};

export default Home;
