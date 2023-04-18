import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Usuarios from './Usuarios';
import Perfil from './perfil'

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Usuarios />}  />
        <Route path="/perfil" element={<Perfil />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
