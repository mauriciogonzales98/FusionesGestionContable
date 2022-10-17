import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ShowCostoFijo(){
 
    const[cf, setCF]=useState(0);
    const[viandas, setViandas]=useState(1);
    const[costounitario, setCostoUnitario]=useState(0);


    useEffect(() => {
        axios.get('/api/constantes/getcostofijo')
        .then(res=>{     
            setCF(res.data[0].precio);
        })
        .catch(err=>{console.log(err.response.data)})

        axios.get('/api/constantes/getviandas')
        .then(res=>{     
            setViandas(res.data[0].cantidad);
        })
        .catch(err=>{console.log(err)})

        axios.get('/api/constantes/getcostounitario')
        .then(res=>{
            console.log(res.data[0].precio);
            setCostoUnitario(res.data[0].precio);
        })
        
    }, []);

    return(
        <div className="container">

            <div className="row">
            <h4>Costo total: ${cf}</h4>
            <h4>Cantidad de viandas: {viandas}</h4>
            <h4>Costo Unitario: ${costounitario}</h4>
            </div>
        </div>
    )
}

export default ShowCostoFijo;