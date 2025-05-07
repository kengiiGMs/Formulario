import React from "react";

const Table = ({ thead, tbody }) => {
    return (
        <table className="table">
            <thead>{thead}</thead>
            <tbody className="table-group-divider">{tbody}</tbody>
        </table>
    )
}

export default Table;