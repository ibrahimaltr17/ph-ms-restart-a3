import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const ChartRating = () => {

    const data = [
        { name: "Jan", sales: 400 },
        { name: "Feb", sales: 300 },
        { name: "Mar", sales: 500 },
        { name: "Apr", sales: 200 },
    ];
    return (
        <div>
            <h4 className='text-2xl font-semibold'>Rating</h4>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    layout="vertical" // 👈 IMPORTANT
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    {/* X axis = values */}
                    <XAxis type="number" />

                    {/* Y axis = categories */}
                    <YAxis dataKey="name" type="category" />

                    <Tooltip />

                    <Bar dataKey="sales" fill="#FF8811" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartRating;