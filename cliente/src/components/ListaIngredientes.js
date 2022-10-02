import axios from 'axios';
import React, {useEffect, useState} from 'react';


function ListaIngredientes(){

    const [dataingredientes, setdataingredientes]=useState([]);

    useEffect(()=>{
        axios.get('api/ingredientes/obteneringredientes').then(res => {
            console.log(res.data);
            setdataingredientes(res.data);
        }).catch(err => {
        console.log(err);
        })
    }, [])

    const tableRows = dataingredientes.map((info) =>{
        return (
            <tr>
                <td>{info.nombre}</td>
                <td>{info.peso}</td>
                <td>{info.precio}</td>
                <td><select>
                        <option value=""></option>
                        <option value="verduleria">Verduleria</option>
                        <option value="carniceria">Carniceria</option>
                        <option value="otro">Otro</option>
                    </select>
                </td>
            </tr>
        )
    })

    return(
        <div>
            <h2>Lista De Ingredientes</h2>
            <table className='table table-dark mt-4'>
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Extra test</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {tableRows}
                    </tbody>
                </table>
        </div>
    )
}

export default ListaIngredientes;