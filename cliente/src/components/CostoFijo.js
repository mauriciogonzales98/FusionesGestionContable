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
        <div className="md:container md:mx-auto">

            <div className="">
                <h2 className="text-3xl">Costo Fijo</h2>
            </div>
            {/* <ShowCostoFijo costos={costos} /> */}

            <div className=''>
                <div className="">
                    <label htmlFor="viandas" className="">Viandas</label>
                    <input value={cantidadViandas} type="number" className='' onChange={(e) => { setCantidadViandas(e.target.value) }}></input>
                </div>
                <button onClick={updateViandas} disabled={!(cantidadViandas > 0)} className=''>Actualizar</button>
            </div>
            <div className="columns-2">
                <ShowCostoFijo costos={costos} />
                <div>
                <div className="">
                    <label htmlFor="nombre" className="">Nombre</label>
                    <input type="text" className='' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                </div>
                <div className="">
                    <label htmlFor="precio" className="">Precio</label>
                    <input type="text" className='' value={precio} onChange={(e) => { setPrecio(e.target.value) }}></input>
                </div>
                <div className="">
                    <label htmlFor="categoria" className="" value={categoria} onChange={(e) => { setCategoria(e.target.value) }}>Categoria
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
                </div>

                <div className=''>
                    <button onClick={addCostoFijo} disabled={!nombre || !precio || !categoria} className=''>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default CostoFijo;