import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


function App() {

  return (
    <Router>

      <NavBar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/empresa" element={<Empresa/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
      </Routes>

      <Footer/>
    
    </Router>
  );
}

export default App;