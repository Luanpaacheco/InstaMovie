// import { useLocation } from 'react-router-dom';

const NewPage = () => {
//   const location = useLocation();
//   const { nickname, password } = location.state || {}; // Obtém os dados do estado

  return (
    <div className="text-center text-green-400 ">
      <h1>Bem-vindo à nova página!</h1>
      <p>Nickname: </p>
      <p>Password: </p>
    </div>
  );
};

export default NewPage;