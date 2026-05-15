import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from "./home.module.css";
import Footer from "../../components/Footer/footer.jsx";
import busImage from "../../assets/ImagemHome5.png";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <img
          src={busImage}
          alt="Ônibus Viação Resendense"
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h2>Viação</h2>

          <h1>Resendense</h1>

          <span>Intermunicipal</span>

          <p>
            Conectando pessoas e destinos com segurança, conforto e pontualidade
            em todo o Sul Fluminense.
          </p>

          <a href="/horarios">HORÁRIOS</a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Segurança</h3>

          <p>
            Frota revisada e motoristas preparados para garantir viagens
            tranquilas.
          </p>
        </div>

        <div className={styles.featureCard}>
          <h3>Conforto</h3>

          <p>Ônibus modernos com poltronas confortáveis e climatização.</p>
        </div>

        <div className={styles.featureCard}>
          <h3>Pontualidade</h3>

          <p>Compromisso com horários e qualidade no atendimento.</p>
        </div>

        <div className={styles.featureCard}>
          <h3>Cobertura</h3>

          <p>
            Linhas intermunicipais conectando diversas cidades do Sul
            Fluminense.
          </p>
        </div>
      </section>

      {/* DESTINOS */}
      <section className={styles.destinos}>
        <span>DESTINOS</span>

        <h2>Conectamos você ao Sul Fluminense</h2>

        <p>
          Atendemos diversas cidades com linhas regulares e integração regional.
        </p>

        <div className={styles.cidades}>
          <div>Resende</div>
          <div>Volta Redonda</div>
          <div>Barra Mansa</div>
          <div>Itatiaia</div>
          <div>Visconde de Mauá</div>
          <div>Floriano</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
