import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Simulação de verificação de credenciais
  const validateCredentials = async (nickname: string, senha: string) => {
    // Construa a URL com os dados do nickname e senha
    const url = `http://localhost:3333/user`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ // Converte o objeto para JSON
        "nickname": nickname,
        "senha": senha
    }),
    });
    console.log(response.ok)
    return response.ok; // Retorna true se a resposta for 2xx
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o envio do formulário
    
    const isValid = await validateCredentials(nickname, password);

    if (isValid) {
      setErrorMessage('');
      console.log("Redirecionando para a nova página...");
      navigate('/usuario', { state: { nickname, password } }); 
    } else {
      setErrorMessage('Usuário já existe'); // Define a mensagem de erro
    }
  };


  

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl pt-44">
        <h1 className="text-4xl font-medium text-white text-center pb-20">Criando a sua conta...</h1>

        <form className="flex flex-col my-6" onSubmit={handleLogin}>
          <label className="font-medium text-white">Nickname:</label>
          <input 
            type="text"
            placeholder="Crie um nickname único para você..."
            className="w-full mb-5 p-2 rounded"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} // Atualiza o estado do nickname
          />
          <label className="font-medium text-white">Password:</label>
          <input 
            type="password"
            placeholder="Crie uma senha..."
            className="w-full mb-5 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da password
          />
          <button type="submit" 
                      value="Entrar" 
                      className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
                      onClick={() => handleLogin}>Criar conta e entrar
          </button>
        </form>
        
        {errorMessage && ( // Mostra a mensagem de erro se houver
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
      </main>
    </div>
  );
};

export default Home;
