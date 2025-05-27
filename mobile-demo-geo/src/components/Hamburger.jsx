import { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Funktion för att toggla menyn
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <main className="menu-container">
        <section
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div />
          <div />
          <div />
        </section>
        <nav className={isOpen ? "open" : ""}>
          <a href="#home">Hem</a>
          <a href="#about">Om oss</a>
          <a href="#services">Tjänster</a>
          <a href="#contact">Kontat</a>
        </nav>
      </main>
    </>
  );
};

export default Hamburger;
