import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logoResen from "../../assets/LogoResen.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            src={logoResen}
            alt="Viação Resendense"
            className={styles.logo}
          />

          <h1 className={styles.logoText}>VIAÇÃO RESENDENSE</h1>
        </div>

        {/* Botão mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li>
            <a href="/">INÍCIO</a>
          </li>

          <li>
            <a href="/linhas">LINHAS</a>
          </li>

          <li>
            <a href="/horarios">HORÁRIOS</a>
          </li>

          <li>
            <a href="/contato">CONTATO</a>
          </li>

          <li>
            <a href="/sobre">SOBRE</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
