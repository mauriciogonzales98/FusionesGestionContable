import React, { useState, useEffect } from "react";
import axios from "axios";
import ModifyDeleteButtons from "./ModifyDeleteButtons";

function ListaCostosFijos() {

    const [costosFijos, setCostosFijos] = useState([]);

    useEffect(() => listarCostosfijos, []);

    async function listarCostosfijos() {
        const defaultCostosfijos = [{ nombre: "default", precio: "0", categoria: "N/A" }];
        try {
            const newCostosFijos = await axios.get('/api/costosfijos/getallcostosfijos');
            setCostosFijos(newCostosFijos?.data ?? defaultCostosfijos);
        }
        catch (err) {
            console.log("Cannot get CostosFijos", err);
            setCostosFijos(defaultCostosfijos);
        }
    }

    const itemsRow = costosFijos.map((item, index) => {
        return (
            <tr className='grid grid-cols-4 text-lg space-x-8' key={index}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.categoria}</td>
                {/* <td>{item.id}</td> */}
                <ModifyDeleteButtons id={item.id}/>
                {/* <td><button>test</button></td> */}
            </tr>
        )
    })

    return (
        <div className='flex col-1 justify-center'>
            <table className='text-white grid'>
                <thead>
                    <tr className='grid grid-cols-4  text-xl text-center space-x-8'>
                        <th >Nombre</th>
                        <th >Precio</th>
                        <th >Categoria</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {itemsRow}
                </tbody>
            </table>
        </div>
    );
}

export default ListaCostosFijos;