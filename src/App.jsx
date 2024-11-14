import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Solucoes from './pages/Solucoes';
import Sobre from './pages/Sobre';
import Cadastrar from './pages/Cadastrar';
import Error from './components/Error';
import Formulario from './pages/Formulario';
 
 
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
 
export default App;
