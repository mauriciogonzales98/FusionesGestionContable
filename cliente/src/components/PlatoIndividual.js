import React from 'react';

function PlatoIndividual({plato}){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{plato.idplato}</li>
                        <li className='list-group-item'>{plato.nombre}</li>
                        <li className='list-group-item'>{plato.ingrediente}</li>
                        <li className='list-group-item'>{plato.precio}</li>
                    </ul>

                    <button className='btn btn-success'>Editar</button>
                    &nbsp;
                    <button className='btn btn-danger'>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )
}

export default PlatoIndividual;