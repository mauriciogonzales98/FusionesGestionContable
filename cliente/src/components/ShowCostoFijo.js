import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ShowCostoFijo(){
 
    // const[cf, setCF]=useState(0);
    // const[viandas, setViandas]=useState(1);
    // const[costounitario, setCostoUnitario]=useState(0);
    const[costos, setCostos]=useState([]);

     useEffect(() => {
        
        axios.get('api/constantes/getallconst').then(res => {
            console.log(res.data);
            setCostos(res.data);
        }).catch(err => {
        console.log(err);
        })

    }, []);

    var viewCostos = costos.map((costo) =>{
        if(costo.precio){
            return(
                <h4>{costo.nombre}: ${costo.precio}</h4>
            )
        }
        else{
            return(
                <h4>{costo.nombre}: {costo.cantidad}</h4>
            )
        }
        
    })

    return(
        <div className="container">
            {viewCostos}
        </div>
    )
}

export default ShowCostoFijo;