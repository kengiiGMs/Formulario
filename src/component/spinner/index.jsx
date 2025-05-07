import React from "react";

const Spinner = ({ width, height }) => {
    return (
        <div class="spinner-border" role="status" style={{ width: width, height: height }}>
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;