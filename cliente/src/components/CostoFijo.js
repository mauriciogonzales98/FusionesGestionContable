import React, {useState, useEffect} from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

function CostoFijo(){

    //Hooks
    const[nombre, setNombre]=useState('');
    const[precio, setPrecio]=useState('');
    const[categoria, setCategoria]=useState('');

    function addCostoFijo(){

        var costofijo = {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            id: uniqid()
        }
        console.log(costofijo);

        axios.post('/api/costofijo/addcostofijo', costofijo)
        .then(res=>{
            alert(res.data)
        })
        .then(err=>{console.log(err)})

        // refreshPage();
    }
    
    function refreshPage(){
        window.location.reload(false);
    }
    

    return(
        <div className="container">

            <div className="row">
                <h2 className='mt-4'>Costo Fijo</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <label htmlFor="nombre" className="form">Nombre</label>
                    <input type="text" className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="precio" className="form">Precio</label>
                    <input type="text" className='form-control' value={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="categoria" className="form" value={categoria} onChange={(e) => {setCategoria(e.target.value)}}>Categoria
                        <select>
                            <option value=''></option>
                            <option value='Servicio'>Servicio</option>
                            <option value='impuesto'>Impuesto</option>
                            <option value='Mercaderia'>Mercaderia</option>
                            <option value='Sueldo'>Sueldo</option>
                            <option value='Otro'>Otro</option>
                        </select>
                    </label>
                </div>
                
                <div className='row justify-content-md-center'>
                    <button onClick={addCostoFijo} className='btn btn-success col-sm-1'>Agregar</button>
                    &nbsp;
                    <button type="button" className='btn btn-warning col-sm-1'>Actualizar</button>
                </div>
            </div>
        </div>
    )
}

export default CostoFijo;