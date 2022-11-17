import React from 'react';


function ShowCostoFijo({ costos }) {
    var viewCostos = costos.map((costo) => {
        if (costo.precio) {
            return (
                <div className='grid grid-cols-2 divide-x'>
                    <h4 className="text-2xl">{costo.nombre}</h4> 
                    <h4>${costo.precio}</h4>
                </div>
                
            )
        }
        else {
            return (
                <div className='grid grid-cols-2 divide-x'>
                    <h4 className="text-2xl">{costo.nombre}</h4> 
                    <h4>{costo.cantidad}</h4>
                </div>
            )
        }

    })

    return (
        <div className="flex border">
            <div className='grid grid-rows-3 divide-y'>
                {viewCostos}
            </div>
            
        </div>
    )
}

export default ShowCostoFijo;