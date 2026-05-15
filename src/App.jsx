import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Sobre from "./pages/Sobre/sobre.jsx";
import Horarios from "./pages/Horarios/horarios.jsx";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Resendense" element={<Home />} />
        <Route path="/Resendense/sobre" element={<Sobre />} />
        <Route path="/Resendense/horarios" element={<Horarios />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
