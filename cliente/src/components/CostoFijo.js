import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import ShowCostoFijo from './ShowCostoFijo';

function CostoFijo() {
    const [costos, setCostos] = useState([]);

    const [cantidadViandas, setCantidadViandas] = useState('');

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    useEffect(() => initCostos, [])

    async function initCostos() {
        const costosPorDefecto = [{ nombre: 'Costo Fijo', precio: '--' }, { nombre: 'Viandas', cantidad: '--' }, { nombre: 'Costo Unitario', precio: '--' }]
        try {
            const initialCostos = await axios.get('/api/constantes/getallconst')
            // TODO: poner por defecto valores vacios, para que muestre "Costo Fijo: --"
            setCostos(initialCostos?.data ?? costosPorDefecto)
            setCantidadViandas(initialCostos?.data?.find(x => x.nombre === 'Viandas')?.cantidad ?? '')
        } catch (error) {
            setCostos(costosPorDefecto)
        }
    }


    async function updateViandas() {
        try {
            const newCostos = await axios.post('/api/constantes/saveviandas', { cantidad: cantidadViandas })
            setCostos(newCostos?.data ?? [])
        } catch (error) {
            console.log('Error saveviandas:', error)
        }
    }

    async function addCostoFijo() {
        var costofijo = {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            id: uniqid()
        }

        try {
            const newCostos = await axios.post('/api/costofijo/addcostofijo', costofijo)
            setCostos(newCostos?.data ?? [])
        }
        catch (error) {
            console.log('Error addcostofijo:', error)
        }

    }


    return (
        <div className="container">

            <div className="row">
                <h2 className='text-blue-450'>Costo Fijo</h2>
            </div>
            <ShowCostoFijo costos={costos} />

            <div className='row'>
                <div className="col-sm-3 offset-3">
                    <label htmlFor="viandas" className="form">Viandas</label>
                    <input value={cantidadViandas} type="number" className='form-control' onChange={(e) => { setCantidadViandas(e.target.value) }}></input>
                </div>
                <button onClick={updateViandas} disabled={!(cantidadViandas > 0)} className='btn btn-success col-sm-1'>Actualizar</button>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <label htmlFor="nombre" className="form">Nombre</label>
                    <input type="text" className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="precio" className="form">Precio</label>
                    <input type="text" className='form-control' value={precio} onChange={(e) => { setPrecio(e.target.value) }}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="categoria" className="form" value={categoria} onChange={(e) => { setCategoria(e.target.value) }}>Categoria
                        <select>
                            <option value=''></option>
                            <option value='Servicio'>Servicio</option>
                            <option value='impuesto'>Impuesto</option>
                            <option value='Mercaderia'>Mercaderia</option>
                            <option value='Sueldo'>Sueldo</option>
                            <option value='Otro'>Otro</option>
                        </select>
                    </label>
                </div>

                <div className='row justify-content-md-center'>
                    <button onClick={addCostoFijo} disabled={!nombre || !precio || !categoria} className='btn btn-success col-sm-1'>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default CostoFijo;