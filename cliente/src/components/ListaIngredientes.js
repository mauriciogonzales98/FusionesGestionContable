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
                <td>{info.pu}</td>
            </tr>
        )
    })

    return(
        <div>
            <h2>Lista De Ingredientes</h2>
            <table className=''>
                    <thead>
                        <tr>
                        <th >Nombre</th>
                        <th >Peso</th>
                        <th >Precio</th>
                        <th >Precio unitario</th>
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