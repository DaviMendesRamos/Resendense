import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./horarios.module.css";
import LINHAS from "./linhas.js";
import Footer from "../../components/Footer/footer.jsx";

function HoursBlock({ titulo, horas = [], destaques = [] }) {
  function getDestaque(hora) {
    return destaques.find((d) => d.horarios.includes(hora));
  }

  return (
    <div className={styles.hoursBlock}>
      <h3>{titulo}</h3>

      <div className={styles.hoursGrid}>
        {horas.map((hora, i) => {
          const destaque = getDestaque(hora);

          const corClass = destaque?.cor
            ? styles[`hourCard${destaque.cor}`]
            : "";

          return (
            <div key={i} className={`${styles.hourCard} ${corClass}`}>
              {hora}
            </div>
          );
        })}
      </div>

      {destaques.map((d, i) => (
        <div key={i} className={styles.legend}>
          <span className={styles[`legend${d.cor}`]}></span>
          {d.legenda}
        </div>
      ))}
    </div>
  );
}

function LineCard({ linha, isOpen, onToggle }) {
  return (
    <div className={styles.lineCard}>
      <button className={styles.lineButton} onClick={onToggle}>
        <span>{linha.nome}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className={styles.lineContent}>
          <div className={styles.hoursWrapper}>
            {/* CASO TENHA HORÁRIOS POR DIA */}
            {linha.horarios ? (
              Object.entries(linha.horarios).map(([tipoDia, horarios]) => (
                <div key={tipoDia}>
                  <h2 className={styles.dayTitle}>
                    {tipoDia === "diasUteis" && "Dias Úteis"}
                    {tipoDia === "sabados" && "Sábados"}
                    {tipoDia === "domingos" && "Domingos/Feriados"}
                  </h2>

                  <HoursBlock
                    titulo={`Saída de ${linha.origem}`}
                    horas={
                      Array.isArray(horarios.ida)
                        ? horarios.ida
                        : horarios.ida?.horarios || []
                    }
                    destaques={
                      Array.isArray(horarios.ida)
                        ? []
                        : horarios.ida?.destaques || []
                    }
                  />

                  <HoursBlock
                    titulo={`Saída de ${linha.destino}`}
                    horas={
                      Array.isArray(horarios.volta)
                        ? horarios.volta
                        : horarios.volta?.horarios || []
                    }
                    destaques={
                      Array.isArray(horarios.volta)
                        ? []
                        : horarios.volta?.destaques || []
                    }
                  />
                </div>
              ))
            ) : (
              /* CASO SIMPLES (SEM DIVISÃO POR DIA) */
              <>
                <HoursBlock
                  titulo={`Saída de ${linha.origem}`}
                  horas={linha.ida || []}
                  destaques={linha.destaques || []}
                />

                <HoursBlock
                  titulo={`Saída de ${linha.destino}`}
                  horas={linha.volta || []}
                  destaques={linha.destaques || []}
                />
              </>
            )}
          </div>

          <div className={styles.info}>
            <div>
              <h3>Itinerário</h3>
              <p>{linha.itinerario}</p>
            </div>

            <div>
              <h3>Valor da Passagem</h3>
              <p className={styles.price}>{linha.passagem}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Horarios() {
  const [openLine, setOpenLine] = useState(null);

  const toggleLine = (id) => {
    setOpenLine(openLine === id ? null : id);
  };

  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <h1>Horários e Linhas</h1>
        <p>
          Consulte horários, itinerários e valores das linhas intermunicipais.
        </p>
      </section>

      <section className={styles.linesContainer}>
        {LINHAS.map((linha) => (
          <LineCard
            key={linha.id}
            linha={linha}
            isOpen={openLine === linha.id}
            onToggle={() => toggleLine(linha.id)}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Horarios;
