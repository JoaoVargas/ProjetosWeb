import './App.css'
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import SobreNos from './pages/SobreNos';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projetos' element={<Projetos/>}/>
          <Route exact path='/sobreNos' element={<SobreNos/>}/>
          <Route exact path='/contato' element={<Contato/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
