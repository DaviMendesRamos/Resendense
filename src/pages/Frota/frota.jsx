import styles from "./frota.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

function Frota() {
  return (
    <div className={styles.frota}>
      <Navbar />
      <h1 className={styles.title}>Nossa Frota</h1>
      <p className={styles.text}>
        A frota da Viação Resendense é composta atualmente por cerca de 40
        veículos, todos desenvolvidos sobre chassis Volkswagen, garantindo
        padronização, eficiência operacional e maior confiabilidade no
        transporte diário de passageiros.
      </p>
      <p className={styles.text}>
        Aproximadamente 80% da frota conta com ar-condicionado, proporcionando
        mais conforto e qualidade durante as viagens. A empresa opera com
        modelos modernos da linha Caio Apache VIP 3, 4 e 5, reconhecidos
        nacionalmente pela segurança, acessibilidade e tecnologia embarcada.
      </p>
      <p className={styles.text}>
        Os veículos oferecem um ambiente mais confortável e funcional, atendendo
        às necessidades da mobilidade urbana com praticidade e eficiência.
      </p>
      <p className={styles.text}>
        Sempre buscando evolução e sustentabilidade, a empresa também já possui
        veículos equipados com tecnologia Euro 6, padrão que reduz
        significativamente a emissão de poluentes e reforça o compromisso com a
        modernização da frota e a preservação ambiental.
      </p>
      <h2>Confira imagens de alguns veículos:</h2>
      <div className={styles.images}>
        <img src="" alt="" />




      </div>
      <Footer />
    </div>
  );
}
export default Frota;
