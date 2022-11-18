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
        <div className="md:container md:mx-auto space-y-8">

            <div className="flex justify-center space-y-3">
                <h1 className="text-6xl">Costo Fijo</h1>
            </div>
            {/* <ShowCostoFijo costos={costos} /> */}

            <div className=''>
                <div className="text-2xl space-x-2">
                    <label htmlFor="viandas" className="">Viandas</label>
                    <input value={cantidadViandas} type="number" className='border-2 border-solid rounded-md border-gray-600' onChange={(e) => { setCantidadViandas(e.target.value) }}></input>
                    <button className="h-10 w-32 border border-solid rounded-md border-orange-400 bg-orange-400 hover:border-orange-500 hover:bg-orange-500" onClick={updateViandas} disabled={!(cantidadViandas > 0)}>Actualizar</button>
                </div>
            </div>
            <div className="flex columns-2 justify-center space-x-2">
                <ShowCostoFijo costos={costos} />
                <div className='grid grid-rows-3'>
                    <div className="flex justify-between space-x-4">
                        <label htmlFor="nombre" className="text-2xl">Nombre</label>
                        <input type="text" className='border-2 border-solid rounded-md border-gray-600' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                    </div>
                    <div className="flex justify-between space-x-4">
                        <label htmlFor="precio" className="text-2xl">Precio</label>
                        <input type="text" className='border-2 border-solid rounded-md border-gray-600' value={precio} onChange={(e) => { setPrecio(e.target.value) }}></input>
                    </div>
                    <div className="flex justify-between text-2xl space-x-4">
                        <label htmlFor="categoria" className="" value={categoria} onChange={(e) => { setCategoria(e.target.value) }}>Categoria
                        </label>
                            <select className='border-2 border-solid rounded-md border-gray-600'>
                                <option value=''></option>
                                <option value='Servicio'>Servicio</option>
                                <option value='impuesto'>Impuesto</option>
                                <option value='Mercaderia'>Mercaderia</option>
                                <option value='Sueldo'>Sueldo</option>
                                <option value='Otro'>Otro</option>
                            </select>
                    </div>
                    <div className='text-xl'>
                        <button onClick={addCostoFijo} disabled={!nombre || !precio || !categoria} className='h-10 w-24 justify-centerborder border-solid rounded-md border-orange-400 bg-orange-400 hover:border-orange-500 hover:bg-orange-500'>Agregar</button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default CostoFijo;