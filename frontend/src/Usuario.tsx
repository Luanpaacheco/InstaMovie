import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {api} from './service/api'
import { useNavigate } from 'react-router-dom';

interface filmesProps{
  id:string,
  title  :  String;
  description  :   String;
  gender  : String;
  score : number;
}

const NewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname, password } = location.state || {}; 

  const[filmes, setFilme]=useState<filmesProps[]>([])

  useEffect(()=>{
    loadUser();
  },[])

  async function loadUser() {
    const response = await (await api.get(`/user/nickname/${nickname}`)).data.posts
    setFilme(response)
    console.log(response)
  }

  // async function loadNewuser() {
  //   const response = await (await api.get(`/user/nickname/${outroNickname}`)).data.posts
  //   setFilme(response)
  //   console.log(response)
  // }

  const [titulo, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [score, setScore] = useState('');
  const [outroNickname, setNewnickname] = useState('');

  const validateCredentials = async (titulo: string, description: string, gender: string, score: number, nickname: string) => {
    console.log("hehe")
    // Construa a URL com os dados do nickname e senha
    const url = `http://localhost:3333/posts`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ // Converte o objeto para JSON
        "title":titulo,
        "description":description,
        "gender":gender,
        "score":score,
        "userNickname":nickname
    }),
    });
    console.log(response.ok)
    return response.ok; // Retorna true se a resposta for 2xx
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o envio do formulário
    const scoreNumber = Number(score);
    const isValid = await validateCredentials(titulo, description, gender, scoreNumber, nickname);

    if (isValid) {
      console.log("criou");
      
    } else {
      console.log("nao criou")
    }
  };
 async function teste(outroNickname:string) {
  const url = await  `http://localhost:3333/user/nickname/${outroNickname}`;
  const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const isValid = await response.ok;
      if (isValid) {
        console.log("achou");
        navigate('/outroUsuario', { state: { outroNickname, nickname } }); 
        
      } else {
        console.log("nao achou")
      }
      
}

async function voltar() {
 
        console.log("achou");
        navigate('/'); 
      
}
  // const validateCredentialss = async (outroNickname: string) => {
  //   // Construa a URL com os dados do nickname e senha
  //   const url = `/user/nickname/${outroNickname}`;
    
  //   const response = await fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   console.log(response.ok)
  //   if(response.ok){
  //     return true
  //   }else return false;

  // };

  // const newUser = async (e: React.FormEvent) => {
  //   e.preventDefault(); // Evita o envio do formulário
  //   const isValid = await validateCredentialss(outroNickname);
  //   if (isValid) {
  //     console.log("achou");
  //     navigate('/outroUsuario', { state: { outroNickname } }); 
      
  //   } else {
  //     console.log("nao achou")
  //   }
  // };
  



  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      

      
    <main className="my-10 w-full 2xl:max-w-full pt-2">
    <h1 className="text-4xl font-medium text-white text-left pb-20">seus filmes</h1>
      <section className='flex flex-col'>
        {filmes.map((filme)=>(
          <article key={filme.id} className='w-3/4 ml-9  bg-white rounded p-2 relative hover:scale-105 duration-200 my-2'>
          <p><span className='font-medium'>title:</span> {filme.title}</p>
          <p><span className='font-medium'>description:</span> {filme.description}</p>
          <p><span className='font-medium'>gender:</span> {filme.gender}</p>
          <p><span className='font-medium'>score:</span> {filme.score}</p>
        </article>
        ))}
      </section>
      
    </main>
    
 
    <div className='flex flex-col'>

    
    <form className="flex flex-row   w-11/12 mt-12 justify-start align-middle ">
      <input 
            type="text"
            placeholder="Pesquise o nome de um usuário"
            className="w-full mr-5  p-2 rounded"
            value={outroNickname}
            onChange={(e) => setNewnickname(e.target.value)} // Atualiza o estado da password
          />
          <button type="button" 
                      value="Entrar" 
                      className="cursor-pointer w-fit p-2 mr-44 bg-blue-700 rounded font-medium"
                      onClick={() => teste(outroNickname)}>Pesquisar
          </button>

          <button className=' text-red-700 font-medium bg-red-400 rounded px-6'
            onClick={() => voltar()}>
            Logout</button>
      </form>
    <div className="w-full max-h-screen  flex justify-start pb-5 pt-32">
      
    <form className="flex flex-col mb-6  w-10/12 mt-1 justify-center "onSubmit={handleLogin}  >
    <h1 className='text-4xl font-medium text-white text-left pb-10'>Adicionar filme</h1>
    <div className='bg-gray-800 py-10 px-10 rounded hover:scale-105 duration-200'>
    <label className="font-medium text-white">title:</label>
          <input 
            type="text"
            placeholder="Digite seu nickname"
            className="w-full mb-5 p-2 rounded"
            value={titulo}
            onChange={(e) => setTitle(e.target.value)} // Atualiza o estado do nickname
          />
          <label className="font-medium text-white">description:</label>
          <input 
            type="text"
            placeholder="Digite sua password"
            className="w-full mb-5 p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Atualiza o estado da password
          />
           <label className="font-medium text-white">gender:</label>
          <input 
            type="text"
            placeholder="Digite sua password"
            className="w-full mb-5 p-2 rounded"
            value={gender}
            onChange={(e) => setGender(e.target.value)} // Atualiza o estado da password
          />
           <label className="font-medium text-white">score:</label>
          <input 
            type="number"
            placeholder="Digite sua password"
            className="w-full mb-5 p-2 rounded"
            value={score}
            onChange={(e) => setScore(e.target.value)} // Atualiza o estado da password
          />
          <button type="submit" 
                      value="Entrar" 
                      className="cursor-pointer w-full p-2 bg-blue-700 rounded font-medium"
                      onClick={() => handleLogin}>Adicionar a lista
          </button>
    </div>
          
        </form>
        </div>
    </div>
  </div>

  );
};

export default NewPage;



//   async function getDadosClima() {
//     const apiUrl = `http://localhost:3333/user/nickname/${nickname}`;

//     try {
//         const res = await fetch(apiUrl);
//         const dados = await res.json();
//         return dados;
//     } catch (error) {
//         console.error("Erro ao buscar dados climáticos:", error);
//         return {};
//     }
// }
// const dados =  (getDadosClima());
// console.log("hehe")
// console.log(nickname)
// console.log(dados)



    // <div className="text-center text-red-700 ">
    //   <h1>Bem-vindo à nova página!</h1>
    //   <p>Nickname: {nickname}</p>
    //   <p>Password: {password}</p>
    // </div>