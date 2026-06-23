import { useState } from "react";

function Header({ toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MrxTech</div>

      <button className="menu-phone" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? "nav active" : "nav"}>
        <a href="#hero">Accueil</a>
        <a href="#features">Fonctionnalités</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="btn">Commencer</button>

      <button className="btnMode" onClick={toggleTheme}>
        🌙
      </button>
    </header>
  );
}

export default Header;