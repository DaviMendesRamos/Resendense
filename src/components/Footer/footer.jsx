import React, { useState } from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h3>Viação Resendense</h3>

          <p>Referência em transporte intermunicipal no Sul Fluminense.</p>
        </div>

        <div>
          <h4>Institucional</h4>

          <a href="/sobre">Sobre</a>
          <a href="/frota">Frota</a>
          <a href="/contato">Contato</a>
        </div>

        <div>
          <h4>Ajuda</h4>

          <a href="">Perguntas Frequentes</a>
          <a href="">Como Comprar</a>
          <a href="">Política de Privacidade</a>
        </div>

        <div>
          <h4>Contato</h4>

          <p>(24) 99982-6738 - Resende</p>
          <p>(24) 3323-1309 - Barra Mansa</p>
          <p>atendimento@viacaoresendense.com.br</p>
          <p>Barra Mansa - RJ</p>
        </div>
      </div>

      <div className={styles.copy}>© 2026 Viação Resendense</div>
    </footer>
  );
}

export default Footer;
