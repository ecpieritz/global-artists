import React from "react";
import Image from "next/image";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <button
        className={`nav-item ${activeTab === "about" ? "active" : ""}`}
        onClick={() => setActiveTab("about")}
      >
        <Image
          src="/images/icon-house.svg"
          alt="Sobre Icon"
          className="nav-icon"
          width={24}
          height={24}
        />
        Sobre
      </button>
      <button
        className={`nav-item ${activeTab === "professional-history" ? "active" : ""}`}
        onClick={() => setActiveTab("professional-history")}
      >
        <Image
          src="/images/icon-file.svg"
          alt="Histórico Profissional Icon"
          className="nav-icon"
          width={24}
          height={24}
        />
        Histórico Profissional
      </button>
      <button
        className={`nav-item ${activeTab === "projects" ? "active" : ""}`}
        onClick={() => setActiveTab("projects")}
      >
        <Image
          src="/images/icon-folder.svg"
          alt="Projetos Icon"
          className="nav-icon"
          width={24}
          height={24}
        />
        Projetos
      </button>
    </nav>
  );
};

export default Navbar;
