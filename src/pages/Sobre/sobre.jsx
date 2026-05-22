import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from "./sobre.module.css";
import Footer from "../../components/Footer/footer.jsx";
import Button from "../../components/Button/Button.jsx";
import busImage1 from "../../assets/onibusSobre1.png";
import busImage2 from "../../assets/onibusSobre2.png";
import busImage3 from "../../assets/onibusSobre3.png";
import busImage4 from "../../assets/onibusSobre4.png";
import busImage5 from "../../assets/onibusSobre5.png";
import { useNavigate } from "react-router-dom";
function Sobre() {
  const navigate = useNavigate();
  return (
    <div className={styles.sobre}>
      <Navbar />
      <div className={styles.hero}>
        <h1>Sobre</h1>
        <p>Conhecendo a Viação Resendense</p>
      </div>
      <div className={styles.history}>
        <p>
          A Viação Resendense nasceu com o propósito de conectar cidades do sul
          fluminense por meio de um transporte acessível, seguro e confiável.
          Com sede em Barra Mansa, a empresa construiu sua trajetória
          acompanhando o crescimento da região e atendendo diariamente milhares
          de passageiros que dependem do transporte coletivo para trabalhar,
          estudar e se deslocar entre diferentes municípios.
        </p>

        <p>
          Ao longo dos anos, a Viação Resendense se tornou referência em
          mobilidade regional, expandindo suas linhas e modernizando sua frota
          para oferecer mais conforto e eficiência aos usuários. A empresa
          sempre buscou unir tradição e inovação, investindo em melhorias
          operacionais, capacitação de colaboradores e qualidade no atendimento,
          mantendo o compromisso com a pontualidade e a segurança em cada
          viagem.
        </p>
        <p>
          Mais do que transportar passageiros, a Viação Resendense faz parte da
          história e da rotina de diversas famílias do sul do estado do Rio de
          Janeiro. Presente no dia a dia de cidades como Resende, Volta Redonda
          e Barra Mansa, a empresa continua evoluindo para acompanhar as
          necessidades da população, reforçando seu papel como uma das mais
          importantes companhias de transporte da região.
        </p>
      </div>
      <Button
        texto="Conhecer a frota"
        link={() => navigate("/frota")}
        className={styles.buttonf}
      />
      <div className={styles.content}>
        <h1>Antiguidade:</h1>
        <section className={styles.images}>
          <img src={busImage1} alt="Onibus Antigo 1" />
          <img src={busImage2} alt="Onibus Antigo 2" />
          <img src={busImage3} alt="Onibus Antigo 3" />
        </section>

        <h1>Atualidade:</h1>
        <section className={styles.images}>
          <img src={busImage4} alt="Onibus novo 1" />
          <img src={busImage5} alt="Onibus novo 2" />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Sobre;
