import React, { useState, useEffect } from 'react';


function ShowCostoFijo({ costos }) {
    var viewCostos = costos.map((costo) => {
        if (costo.precio) {
            return (
                <h4>{costo.nombre}: ${costo.precio}</h4>
            )
        }
        else {
            return (
                <h4>{costo.nombre}: {costo.cantidad}</h4>
            )
        }

    })

    return (
        <div className="container">
            {viewCostos}
        </div>
    )
}

export default ShowCostoFijo;