import React from 'react';


function ShowCostoFijo({ costos }) {
    var viewCostos = costos.map((costo, index) => {
        if (costo.precio) {
            return (
                <div className='grid grid-cols-2' key={index}>
                    <h4 className="flex text-2xl text-white">{costo.nombre}</h4> 
                    <h4 className="text-2xl text-white">${costo.precio}</h4>
                </div>
                
            )
        }
        else {
            return (
                <div className='grid grid-cols-2' key={index}>
                    <h4 className="flex text-2xl text-white">{costo.nombre}</h4> 
                    <h4 className="text-2xl text-white">{costo.cantidad}</h4>
                </div>
            )
        }

    })

    return (
        <div className="flex bg-black">
            <div className='grid grid-rows-3'>
                {viewCostos}
            </div>
            
        </div>
    )
}

export default ShowCostoFijo;