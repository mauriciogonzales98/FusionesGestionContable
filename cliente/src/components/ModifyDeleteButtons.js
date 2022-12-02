import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons" 
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

    deleteCostofijo(id){
        try{
            axios.get('api/costosfijos/deletecostofijo', id);
        }
        catch(err){
            console.log("error al borrar",err);
        }
    }

    render(){
        return(
            <td className="space-x-3">
                {/* modificar */}
                <button> <FontAwesomeIcon icon={ faPenToSquare } /></button>
                {/* borrar */}
                <button onClick={()=> this.deleteCostofijo(this.props.id)}> <FontAwesomeIcon icon={ faTrash }/></button> 
            </td>
        )
    }
}


export default ModifyDeleteButtons;