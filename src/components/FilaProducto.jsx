// src/components/FilaProducto.js
import React from 'react';

function FilaProducto({ producto }) {
    const { nombre, precio, stock } = producto;
    const nombreEstilo = stock === 0 ? { textDecoration: 'line-through' } : {};

    return (
        <tr>
            <td style={nombreEstilo}>{nombre}</td>
            <td>{precio}</td>
            <td>{stock}</td>
        </tr>
    );
}

export default FilaProducto;
