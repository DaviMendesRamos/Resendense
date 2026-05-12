import { useState } from 'react';
import './style.css';

// O segredo está aqui: importe a imagem para que o Vite processe o caminho corretamente
import logoResen from '../../assets/LogoResen.png';

function Menu() {
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          {/* Use a variável logoResen entre chaves no src */}
          <img src={logoResen} alt="Viação Resendense" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="home">Início</a></li>
          <li><a href="linhas">Linhas</a></li>
          <li><a href="horarios">Horários</a></li>
          <li><a href="contato">Contato</a></li>
          <li><a href="sobre"></a>Sobre</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Viação Resendense Intermunicipal</h1>
          <p>Conectando cidades com segurança e tradição.</p>
          <button className="cta-button">Ver Horários</button>
        </div>
      </header>

      {/* Destaques */}
      <section className="main-info">
        <div className="card">
          <h3>Passagens Online</h3>
          <p>Compre sua passagem sem sair de casa.</p>
        </div>
        <div className="card">
          <h3>Nossas Linhas</h3>
          <p>Confira os itinerários intermunicipais atualizados.</p>
        </div>
        <div className="card">
          <h3>Fale Conosco</h3>
          <p>Dúvidas, elogios ou sugestões? Estamos aqui.</p>
        </div>
      </section>
    </div>
  );
}

export default Menu;