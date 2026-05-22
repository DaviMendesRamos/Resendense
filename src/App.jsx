import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Sobre from "./pages/Sobre/sobre.jsx";
import Horarios from "./pages/Horarios/horarios.jsx";
import Frota from "./pages/Frota/frota.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/frota" element={<Frota />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
