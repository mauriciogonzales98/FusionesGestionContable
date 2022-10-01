import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PlatoIndividual from './PlatoIndividual';


function ListaPlatos(){

    const [dataplatos, setdataplatos]=useState([]);

    useEffect(()=>{
        axios.get('api/platos/obtenerplatos').then(res => {
            console.log(res.data);
            setdataplatos(res.data);
        }).catch(err => {
        console.log(err);
        })
    }, [])

    //Mapear lista de platos en objeto
    const listaplatos = dataplatos.map(plato => {
        return(
            <div>
                <PlatoIndividual plato={plato}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista Platos</h2>
            {listaplatos}
        </div>
    )
}

export default ListaPlatos;