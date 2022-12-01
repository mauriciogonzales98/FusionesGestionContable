import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function ModifyDeleteButtons(){

    return(
        <td className="space-x-3">
            <button> <FontAwesomeIcon icon={ faPenToSquare } /></button>
            <button> <FontAwesomeIcon icon={ faTrash } /></button>
            {/* <button>+</button>
            <button>-</button> */}
        </td>
    )
}

export default ModifyDeleteButtons;