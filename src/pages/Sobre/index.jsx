import { useState } from "react";
import "./style.css";

// O segredo está aqui: importe a imagem para que o Vite processe o caminho corretamente
import logoResen from "../../assets/LogoResen.png";

function Sobre() {
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      <H1>Sobre Nós</H1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius
        impedit beatae quaerat in modi excepturi nesciunt itaque iure, voluptas,
        totam, voluptatem maiores fugiat facere eum. Recusandae ad quos quaerat!
      </p>
    </div>
  );
}

export default Sobre;
