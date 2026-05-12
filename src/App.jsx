import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Menu from './pages/Home/index.jsx'
import Sobre from './pages/Sobre/index.jsx'


// Importamos com a primeira letra maiúscula


function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
        </Routes>      
      </BrowserRouter>
    )
}

export default App;