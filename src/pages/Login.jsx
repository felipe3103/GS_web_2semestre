import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ícones para mostrar/ocultar senha

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidade da senha
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = sessionStorage.getItem('user');
    const storedPassword = sessionStorage.getItem('password');

    if (storedUsername && storedPassword) {
      const decryptedPassword = CryptoJS.AES.decrypt(storedPassword, 'secret-key').toString(CryptoJS.enc.Utf8);
      if (username === storedUsername && password === decryptedPassword) {
        alert('Login realizado com sucesso!');
        setErrorMessage('');
        navigate('/formulario'); // Redireciona para o formulário
      } else {
        setErrorMessage('Usuário ou senha incorretos.');
      }
    } else {
      setErrorMessage('Usuário não cadastrado. Por favor, realize o cadastro.');
      navigate('/cadastrar');
    }
  };

  const handleLogout = () => {
    sessionStorage.clear(); // Limpa os dados de autenticação
    alert('Logout realizado com sucesso!');
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="login-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <label htmlFor="username" className="block mb-2 font-medium">Usuário</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu usuário"
          className="w-full p-2 mb-4 border rounded"
        />
        
        <label htmlFor="password" className="block mb-2 font-medium">Senha</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full p-2 mb-6 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
        {errorMessage && <div className="text-red-600 mt-4 text-center">{errorMessage}</div>}

        {/* Botão de Logout */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Login;
