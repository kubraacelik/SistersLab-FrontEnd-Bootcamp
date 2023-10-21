import React from 'react'

function DataTable({ title, data, string, number }) {
    return (
        <div style={{margin: "25px"}}>
            <h2>{title}</h2>
            <p>{string}</p>
            <p>Number: {number}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map(car => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable