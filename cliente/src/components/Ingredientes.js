import React, {useState} from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import ListaIngredientes from './ListaIngredientes';

function AddIngrediente(){

    //Hooks
    const[nombre, setNombre]=useState('');
    const[peso, setPeso]=useState('');
    const[precio, setPrecio]=useState('');

    function addIngrediente(){
        var ingrediente = {
            nombre: nombre,
            peso: peso,
            precio: precio,
            pu: precio/peso,
            id: uniqid()
        }
        console.log(ingrediente);

        axios.post('/api/ingredientes/addingrediente', ingrediente)
        .then(res=>{
            alert(res.data)
        })
        .then(err=>{console.log(err)})

        refreshPage();
    }
    
    function refreshPage(){
        window.location.reload(false);
    }

    function updateIngredientes(){

        axios.get('/api/ingredientes/obteneringredientes')
        .then(res=>{
            
            alert(res.data[0].nombre)
        })
        .then(err=>{console.log(err)})

        
    }

    return(
        <div className="">

            <ListaIngredientes/>
            <div className="row">
                <h2 className='mt-4'>Agregar Ingrediente</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <label htmlFor="nombre" className="form">Nombre</label>
                    <input type="text" className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="peso" className="form">Peso</label>
                    <input type="text" className='form-control' value={peso} onChange={(e) => {setPeso(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="precio" className="form">Precio</label>
                    <input type="text" className='form-control' value={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                </div>
                
                <div className='row justify-content-md-center'>
                    <button onClick={addIngrediente} className='btn btn-success col-sm-1'>Agregar</button>
                    &nbsp;
                    <button onClick={updateIngredientes} type="button" className='btn btn-warning col-sm-1'>Actualizar</button>
                </div>
            </div>
        </div>
    )
}

export default AddIngrediente;