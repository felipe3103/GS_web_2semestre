import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Energia Limpa</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/solucoes" className="mr-4">Soluções</Link>
        <Link to="/sobre" className="mr-4">Sobre</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/cadastrar">Cadastrar</Link>
      </div>
    </nav>
  );
}

export default Nav;