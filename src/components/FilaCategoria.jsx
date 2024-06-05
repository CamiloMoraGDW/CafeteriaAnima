// src/components/FilaCategoria.js
import React from 'react';

function FilaCategoria({ categoria }) {
    return (
        <tr>
            <td colSpan="3" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                {categoria}
            </td>
        </tr>
    );
}

export default FilaCategoria;
