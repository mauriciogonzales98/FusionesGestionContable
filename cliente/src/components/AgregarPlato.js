import React, {useState} from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

function AgregarPlato(){

    //Hooks
    const[nombre, setNombre]=useState('');
    const[ingredientes, setIngredientes]=useState([]);
    const[ingrediente, setIngrediente]=useState('');
    const[peso, setPeso]=useState('');
    const[precio, setPrecio]=useState('');

    function agregarPlato(){
        
        var plato = {
            nombre: nombre,
            ingredientes: ingredientes,
            precio: precio,
            idplato: uniqid()
        }
        console.log(plato);

        axios.post('/api/platos/agregarplato', plato)
        .then(res=>{
            alert(res.data)
        })
        .then(err=>{console.log(err)})

        setNombre('');
        setIngrediente('');
        setPeso('');
        setPrecio('');
    }

    function agregarIngrediente(){
        ingredientes.push({ing: ingrediente, peso: peso});
        console.log(ingredientes);
        clearInput();
    }

    function clearInput(){
        setIngrediente('');
        setPeso('');
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className='mt-4'>Agregar Plato</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <label htmlFor="nombre" className="form">Nombre</label>
                    <input type="text" className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>

                <h4>Lista De Ingredientes</h4>
                    <table className='table table-dark mt-4'>
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Peso</th>
                            </tr>
                        </thead>
                        <tbody> 
                        </tbody>
                    </table>

                <div className="col-sm-6 offset-3">
                    <label htmlFor="ingrediente" className="form">Ingrediente</label>
                    <input type="text" className='form-control' value={ingrediente} onChange={(e) => {setIngrediente(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="ingrediente" className="form">Peso</label>
                    <input type="text" className='form-control' value={peso} onChange={(e) => {setPeso(e.target.value)}}></input>
                </div>
                <button onClick={agregarIngrediente} className='btn btn-success col'>Agregar</button>

                <div className="col-sm-6 offset-3">
                    <label htmlFor="precio" className="form">Precio</label>
                    <input type="text" className='form-control' value={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                </div>

                <button onClick={agregarPlato} className='btn btn-success'>Guardar plato</button>
            </div>
        </div>
    )
}

export default AgregarPlato;