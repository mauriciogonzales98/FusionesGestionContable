import React, {useState} from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

function AgregarPlato(){

    //Hooks
    const[nombre, setNombre] = useState('');
    const[ingrediente, setIngrediente] = useState('');
    const[precio, setPrecio] = useState('');

    function agregarPlato(){
        var plato = {
            nombre: nombre,
            ingrediente: ingrediente,
            precio: precio,
            idplato: uniqid()
        }
        console.log(plato);

        axios.post('/api/plato/agregarplato')
        .then(res => {
            alert(res.data)
        })
        .then(err => {console.log(err)})
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
                    <label htmlFor="ingrediente" className="form"value={ingrediente} onChange={(e) => {setIngrediente(e.target.value)}}>Ingrediente</label>
                    <input type="text" className='form-control'></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="precio" className="form"value={precio} onChange={(e) => {setPrecio(e.target.value)}}>Precio</label>
                    <input type="text" className='form-control'></input>
                </div>

                <button onClick={agregarPlato} className='btn btn-success'>Guardar plato</button>
            </div>
        </div>
    )
}

export default AgregarPlato;