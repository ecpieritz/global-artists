import React from "react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <ul>
        <li
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          Sobre
        </li>
        <li
          className={activeTab === "professional-history" ? "active" : ""}
          onClick={() => setActiveTab("professional-history")}
        >
          Histórico Profissional
        </li>
        <li
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projetos
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
