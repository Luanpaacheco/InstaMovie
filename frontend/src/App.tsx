import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // Certifique-se de que o caminho está correto
import Usuario from './Usuario';
import CriarConta from './CriarConta' // Certifique-se de que o caminho está correto
import OutroUsuario from './outroUsuario'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/criarConta" element={<CriarConta />} />
      <Route path="/outroUsuario" element={<OutroUsuario />} />
    </Routes>
  );
};

export default App;
