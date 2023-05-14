import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Usuarios from './Usuarios';
import Perfil from './perfil'
import Create from './create/createPerfil'

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Usuarios />}  />
        <Route path="/perfil/:id?" element={<Perfil />}  />
        <Route path="/create" element={<Create />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
