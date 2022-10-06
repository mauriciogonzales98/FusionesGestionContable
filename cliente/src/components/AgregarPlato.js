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
            ingredientes: [{ing: ingrediente, peso: peso},],
            precio: precio,
            idplato: uniqid()
        }
        console.log(plato);

        axios.post('/api/platos/agregarplato', plato)
        .then(res=>{
            alert(res.data)
        })
        .then(err=>{console.log(err)})
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
                <div className="col-sm-6 offset-3">
                    <label htmlFor="ingrediente" className="form">Ingrediente</label>
                    <input type="text" className='form-control' value={ingrediente} onChange={(e) => {setIngrediente(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="ingrediente" className="form">Peso</label>
                    <input type="text" className='form-control' value={peso} onChange={(e) => {setPeso(e.target.value)}}></input>
                </div>
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