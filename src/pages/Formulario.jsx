import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Formulario() {
  const [data, setData] = useState({
    nome: '',
    tipo: '',
    descricao: '',
    localizacao: '',
    contato: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (data.nome && data.tipo && data.descricao && data.localizacao && data.contato) {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(`solucao_${data.nome}`, jsonData); // Salva no localStorage com uma chave única
      setMessage('Solução cadastrada com sucesso!');
      setData({ nome: '', tipo: '', descricao: '', localizacao: '', contato: '' }); // Limpa o formulário após o cadastro
      
      setTimeout(() => {
        navigate('/'); // Redireciona para a página Home após 2 segundos
      }, 2000);
    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Cadastrar Solução Sustentável</h2>

        <label htmlFor="nome" className="block mb-2 font-medium">Nome da Solução</label>
        <input
          type="text"
          name="nome"
          value={data.nome}
          onChange={handleChange}
          placeholder="Ex: Painel Solar"
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="tipo" className="block mb-2 font-medium">Tipo de Energia</label>
        <input
          type="text"
          name="tipo"
          value={data.tipo}
          onChange={handleChange}
          placeholder="Ex: Solar, Eólica"
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="descricao" className="block mb-2 font-medium">Descrição</label>
        <textarea
          name="descricao"
          value={data.descricao}
          onChange={handleChange}
          placeholder="Descreva a solução sustentável"
          className="w-full p-2 mb-4 border rounded"
          rows="3"
        />

        <label htmlFor="localizacao" className="block mb-2 font-medium">Localização</label>
        <input
          type="text"
          name="localizacao"
          value={data.localizacao}
          onChange={handleChange}
          placeholder="Ex: São Paulo, Brasil"
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="contato" className="block mb-2 font-medium">Contato</label>
        <input
          type="text"
          name="contato"
          value={data.contato}
          onChange={handleChange}
          placeholder="Ex: email@dominio.com ou telefone"
          className="w-full p-2 mb-6 border rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Cadastrar Solução
        </button>

        {message && <div className="text-green-600 mt-4 text-center">{message}</div>}
      </div>
    </div>
  );
}

export default Formulario;