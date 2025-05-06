import React from "react";

const FloatingInput = ({ type, id, placeholder }) => {
    return (
        <div class="form-floating mb-3">
            <input type={type} class="form-control" id={id} placeholder={placeholder} />
            <label for={id}>{placeholder}</label>
        </div>
    )
}

export default FloatingInput;