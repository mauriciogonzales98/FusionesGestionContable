import './App.css';
import ListaPlatos from './components/ListaPlatos';
import EditarPlato from './components/EditarPlato';

function App() {
  return (
    <div className="App">
      <h1>Fusiones Gestion Comercial</h1>
      <ListaPlatos/>
      <EditarPlato/>
    </div>
  );
}

export default App;
