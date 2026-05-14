import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Sobre from "./pages/Sobre/sobre.jsx";
import Horarios from "./pages/Horarios/horarios.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/horarios" element={<Horarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
