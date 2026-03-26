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

const ChartRating = ({ ratings }) => {

    const data = ratings;

    return (
        <div>
            <h4 className='text-2xl font-semibold'>Rating</h4>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    {/* value axis */}
                    <XAxis type="number" />

                    {/* label axis */}
                    <YAxis dataKey="name" type="category" />

                    <Tooltip />

                    <Bar dataKey="count" fill="#FF8811" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartRating;