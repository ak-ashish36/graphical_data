import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


function Graph() {
    const data = [
        { name: 'Msi Download', Time: 40},
        { name: 'Msi Install',Time: 70},
        { name: 'Task 1', Time: 45 },
        { name: 'Task 2', Time: 25 }
    ];
    return (
        <div class>
            <h1>Plus01 Vm Graph</h1>
            <BarChart width={1000} height={600} data={data}>
                <Bar dataKey="Time" fill="blue" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Tooltip />
            </BarChart>
        </div>
    )
}

export default Graph;