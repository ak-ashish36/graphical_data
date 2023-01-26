import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


function VerticalBar() {
    const data = [
        { VM: 'Plus00', MsiInstall: 30,task1:20,task2:18},
        { VM: 'Plus01',MsiInstall: 25,task1:22,task2:30},
    ];
    return (
        <div class>
            <h1>Plus00 vs Plus01</h1>
            <BarChart width={1000} height={600} data={data}>
                <Bar dataKey="MsiInstall" fill="blue" />
                <Bar dataKey="task1" fill="red" />
                <Bar dataKey="task2" fill="green" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="VM" />
                <YAxis />
                <Legend />
                <Tooltip />
            </BarChart>
        </div>
    )
}

export default VerticalBar