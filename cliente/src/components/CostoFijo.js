import React, {useState} from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import ShowCostoFijo from './ShowCostoFijo';

let total=0;

function CostoFijo(){

    //Hooks
    const[nombre, setNombre]=useState('');
    const[precio, setPrecio]=useState('');
    const[categoria, setCategoria]=useState('');
    const[cantidad, setCantidad]=useState('');

    const[cf, setCF]=useState('');
    const[viandas, setViandas]=useState('');
    const[costounitario, setCostoUnitario]=useState('');

    function addCostoFijo(){

        var costofijo = {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            id: uniqid()
        }
        console.log(costofijo);

        axios.post('/api/costofijo/addcostofijo', costofijo)
        .then(res=>{
            alert(res.data)
        })
        .then(err=>{console.log(err)})

        calcular();   
        
        // refreshPage();
    }
    
    // function refreshPage(){
    //     window.location.reload(false);
    // }
    
    async function calcular(){

        await axios.get('/api/costofijo/getcostofijo')
        .then(res=>{
            
            total = 0;
            Object.keys(res.data).forEach(key =>{
                total += Number(res.data[key].precio);
            })
        })
        .then(err=>{console.log(err)})

        console.log(total)
        updateCostofijo();
        updateCostoUnitario();
    }

    function updateCostofijo(){
        console.log(total);
        var newcostofijo = {
            nombre: "Costo Fijo",
            precio: total,
        }

        axios.post('/api/constantes/savecostofijo', newcostofijo)
        .then(res=>{
            alert(res.data)
        })
        .catch(err=>{console.log(err)})
    }

    function updateViandas(){
        var newviandas = {
            nombre: "Viandas",
            cantidad: cantidad
        }
        axios.post('/api/constantes/saveviandas', newviandas)
        .then(res=>{
            alert("Viandas actualizadas exitosamente");
            alert(res.data)
        })
        .catch(err=>{console.log(err)})

        updateCostoUnitario();
        refreshPage();
    }

    function refreshPage(){
        window.location.reload(false);
    }

    async function updateCostoUnitario(){
        await axios.get('/api/constantes/getcostofijo')
        .then(res=>{     
            setCF(res.data[0].precio);
        })
        .catch(err=>{console.log(err)})

        await axios.get('/api/constantes/getviandas')
        .then(res=>{   
            setViandas(res.data[0].cantidad);
        })
        .catch(err=>{console.log(err)})
        
        var temp = cf/viandas;
        setCostoUnitario(temp);
        console.log(costounitario);

        var newcostounitario = {
            nombre: "Costo Unitario",
            precio: costounitario
        }
        await axios.post('/api/constantes/savecostounitario', newcostounitario)
        .then(res=>{
            console.log("Costo actualizado exitosamente");
            alert(res.data)
        })
        .catch(err=>{console.log(err)})


    }

    return(
        <div className="container">

            <div className="row">
                <h2 className='mt-4'>Costo Fijo</h2>
            </div>
            <ShowCostoFijo/>

            <div className='row'>
                <div className="col-sm-3 offset-3">
                    <label htmlFor="viandas" className="form">Viandas</label>
                    <input value={cantidad} type="text" className='form-control' onChange={(e)=> {setCantidad(e.target.value)}}></input>
                </div>
                <button onClick={updateViandas} className='btn btn-success col-sm-1'>Actualizar</button>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <label htmlFor="nombre" className="form">Nombre</label>
                    <input type="text" className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="precio" className="form">Precio</label>
                    <input type="text" className='form-control' value={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                </div>
                <div className="col-sm-6 offset-3">
                    <label htmlFor="categoria" className="form" value={categoria} onChange={(e) => {setCategoria(e.target.value)}}>Categoria
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
                    <button onClick={addCostoFijo} className='btn btn-success col-sm-1'>Agregar</button>
                    &nbsp;
                    <button type="button" className='btn btn-warning col-sm-1' onClick={calcular}>Calcular</button>
                </div>
            </div>
        </div>
    )
}

export default CostoFijo;