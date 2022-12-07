import React from "react";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
// import { faTrash } from "@fortawesome/free-solid-svg-icons" 
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

// function ModifyDeleteButtons( { deleteCostofijo }){

//     return(
//         <td className="space-x-3">
//             {/* modificar */}
//             <button onClick={deleteCostofijo}> <FontAwesomeIcon icon={ faPenToSquare } /></button>
//             {/* borrar */}
//             <button> <FontAwesomeIcon icon={ faTrash } /></button> 
//         </td>
//     )
// }

class ModifyDeleteButtons extends React.Component{
    
    state = {
        toggle: true
    }

    deleteCostofijo(idCostofijo){ 
        try{
            //todo: Actualizar el costo fijo cuando se elimina un elemento.
            axios.post('api/costosfijos/deletecostofijo', {id: idCostofijo});
        }
        catch(err){
            console.log("error al borrar",err);
        }
    }

    render(){
        return(
            <td className="space-x-3">
                {/* modificar */}
                {/* <button> <FontAwesomeIcon icon={ faPenToSquare } /></button> */}
                <button>
                    {this.props.id}
                    {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> */}
                </button>
                {/* borrar */}
                <button onClick={()=> this.deleteCostofijo(this.props.id)}> 
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    {/* <FontAwesomeIcon icon={ faTrash }/> */}
                </button> 
            </td>
        )
    }
}


export default ModifyDeleteButtons;