import { Link } from 'react-router-dom';

function Nav() {
  const handleLogout = () => {
    sessionStorage.clear(); // Remove todos os dados de autenticação
    navigate("/login"); // Redireciona para a página de login
  };
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Energia Limpa</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/solucoes" className="mr-4">Soluções</Link>
        <Link to="/sobre" className="mr-4">Sobre</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Nav;