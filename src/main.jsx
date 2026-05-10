import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Importamos com a primeira letra maiúscula
import Menu from './pages/Home/index.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Usamos o componente com a primeira letra maiúscula */}
    <Menu /> 
  </StrictMode>,
)