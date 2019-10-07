/**
 * Created by hao.cheng on 2017/4/22.
 */
import React from 'react';
import { RadialBarChart, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
    { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
];

const RechartsRadialBarChart = () => (
    <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={data}>
            {/* <RadialBar
                startAngle={90}
                endAngle={-270}
                minAngle={15}
                label
                background
                clockWise
                dataKey="uv"
            /> */}
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="right"
            />
            <Tooltip />
        </RadialBarChart>
    </ResponsiveContainer>
);

export default RechartsRadialBarChart;
