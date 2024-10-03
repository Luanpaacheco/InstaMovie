import { useLocation } from 'react-router-dom';

const NewPage = () => {
  const location = useLocation();
  const { nickname, password } = location.state || {}; // Obtém os dados do estado

  return (
    <div className="text-center text-red-700 ">
      <h1>Bem-vindo à nova página!</h1>
      <p>Nickname: {nickname}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default NewPage;
