import './App.css';
import ListaPlatos from './components/ListaPlatos';
import EditarPlato from './components/EditarPlato';
import AgregarPlato from './components/AgregarPlato';
import AddIngrediente from './components/Ingredientes';
import CostoFijo from './components/CostoFijo';
import Platos from './components/Platos'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App md:container">
      <nav className="p-2 text-xl bg-black">
        <div className="flex row space-x-1">
            <a className="flex p-3 text-white hover:text-orange-500" href="/">Fusiones Gestion Comercial</a>
            <button className="border-solid" type="button"></button>
            <span className=''></span>
            <div className="relative flex-wrap"> 
              <ul className="flex flex-col lg:flex-row list-none lg:mr-auto space-x-4 justify-center">
                <li className="nav-item p-3  text-white hover:text-orange-500">
                  <a className="" href="/agregarplato">Agregar Plato</a>
                </li>
                <li className="nav-item p-3  text-white hover:text-orange-500">
                  <a className="" href="/ingredientes">Ingredientes</a>
                </li>
                <li className="nav-item p-3  text-white hover:text-orange-500">
                  <a className="" href="/platos">Platos</a>
                </li>
                <li className="nav-item p-3  text-white hover:text-orange-500">
                  <a className="" href="/costofijo">Costo Fijo</a>
                </li>
              </ul>
            </div>
          </div>
</nav>
    <button className="btn bg-purple-700 border-solid hover:border-dotted rounded-md">weon</button>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaPlatos/>}></Route>
        <Route path='/platos' element={<Platos/>}></Route>
        <Route path='/agregarplato' element={<AgregarPlato/>}></Route>
        <Route path='/editarplato' element={<EditarPlato/>}></Route>
        <Route path='/ingredientes' element={<AddIngrediente/>}></Route>
        <Route path='/costofijo' element={<CostoFijo/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
