import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import {api} from './service/api'


interface filmesProps{
    id:string,
    title  :  String;
    description  :   String;
    gender  : String;
    score : number;
  }

const outroUser = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { outroNickname, nickname } = location.state || {}; 

  console.log(outroNickname);
  console.log(nickname);  // Verifique se o nickname está correto

  useEffect(()=>{
    loadUser();
    },[])

  const [errorMessage, setErrorMessage] = useState('');

  const[filmes, setFilme]=useState<filmesProps[]>([])

  

  async function loadUser() {
    const response = await (await api.get(`/user/nickname/${outroNickname}`)).data.posts
    setFilme(response)
    console.log(response)
  }

  async function teste(nickname:string) {
    const url = await  `http://localhost:3333/user/nickname/${nickname}`;
    const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const isValid = await response.ok;
        if (isValid) {
          console.log("achou");
          navigate('/usuario', { state: { nickname } }); 
          
        } else {
          console.log("nao achou")
        }
        
  }
  // Exemplo de função para criar conta


  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
    <main className="my-10 w-full 2xl:max-w-full pt-2">
    <h1 className="text-4xl font-medium text-white text-left pb-20">filmes do {outroNickname}</h1>
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
    <div className="my-10 w-full  pt-2  flex justify-end">
        <button type="submit" 
                      value="Entrar" 
                      className="cursor-pointer w-44 h-10 p-2 bg-blue-700 rounded font-medium text-center  mr-24"
                      onClick={() => teste(nickname)}>Voltar</button>
    </div>
    </div>
  );
};

export default outroUser;
