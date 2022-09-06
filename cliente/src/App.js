import './App.css';
import ListaPlatos from './components/ListaPlatos';
import EditarPlato from './components/EditarPlato';
import AgregarPlato from './components/AgregarPlato';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Fusiones Gestion Comercial</h1>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaPlatos/>}></Route>
        <Route path='/agregarplato' element={<AgregarPlato/>}></Route>
        <Route path='/editarplato' element={<EditarPlato/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
