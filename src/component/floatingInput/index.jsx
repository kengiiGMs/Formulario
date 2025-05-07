import React from "react";

const FloatingInput = ({ type, id, placeholder, onChange }) => {
    return (
        <div class="form-floating mb-3">
            <input type={type} class="form-control" id={id} placeholder={placeholder} onChange={onChange} />
            <label for={id}>{placeholder}</label>
        </div>
    )
}

export default FloatingInput;