import { ChartWrapper } from './Statistics.styled';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    Text,
} from 'recharts';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const Chart = ({ firstDayCurrentMonth, setFirstDayCurrentMonth }) => {
const [data, setData] = useState(null);

const token = useSelector(state => state.auth.token);

useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get(
        `statistics?date=${format(firstDayCurrentMonth, 'yyyy-MM-dd')}`,
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        );
        setData(response.data);
    } catch (error) {
        console.log(error);
    }
    };
    fetchData();
}, [firstDayCurrentMonth, token]);

if (!data) {
    return <div>Loading...</div>;
}
const { todo, inProgres, done } = data;

const totalTasks =
    todo.forDay.quantity + inProgres.forDay.quantity + done.forDay.quantity;
const totalTasksMonth =
    todo.forMonth.quantity +
    inProgres.forMonth.quantity +
    done.forMonth.quantity;

const chartData = [
    {
    name: 'Todo',
    day: todo.forDay.quantity,
    dayPercentage: (todo.forDay.quantity / totalTasks) * 100,
    month: todo.forMonth.quantity,
    monthPercentage: (todo.forMonth.quantity / totalTasksMonth) * 100,
    },
    {
    name: 'In Progress',
    day: inProgres.forDay.quantity,
    dayPercentage: (inProgres.forDay.quantity / totalTasks) * 100,
    month: inProgres.forMonth.quantity,
    monthPercentage: (inProgres.forMonth.quantity / totalTasksMonth) * 100,
    },
    {
    name: 'Done',
    day: done.forDay.quantity,
    dayPercentage: (done.forDay.quantity / totalTasks) * 100,
    month: done.forMonth.quantity,
    monthPercentage: (done.forMonth.quantity / totalTasksMonth) * 100,
    },
];

const CustomLabel = ({ x, y, width, value }) => (
    <Text
    x={x + width / 2}
    y={y + 4}
    fill="#333"
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize={16}
    >
    {!isNaN(value) && value !== 0 ? `${value.toFixed(0)}%` : ''}
    </Text>
);

return (
    <ChartWrapper>
    <ResponsiveContainer width={800} height={400}>
        <BarChart
        data={chartData}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        barCategoryGap={75}
        barGap={10}
        barSize={27}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
            tickFormatter={value => value}
            domain={[0, 'dataMax']}
            allowDataOverflow={true}
            scale="linear"
            tickCount={totalTasks + 1}
        />
        <Tooltip />
        <Bar dataKey="day" fill="url(#gradient1)" radius={[0, 0, 10, 10]}>
            <LabelList
            dataKey="dayPercentage"
            position="top"
            content={<CustomLabel />}
            />
        </Bar>
        <Bar dataKey="month" fill="url(#gradient2)" radius={[0, 0, 10, 10]}>
            <LabelList
            dataKey="monthPercentage"
            position="top"
            content={<CustomLabel />}
            />
        </Bar>
        <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop
                offset="0%"
                stopColor="rgb(255, 210, 221)"
                stopOpacity={0}
            />
            <stop
                offset="100%"
                stopColor="rgb(255, 210, 221)"
                stopOpacity={1}
            />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(62, 133, 243)" stopOpacity={0} />
            <stop
                offset="100%"
                stopColor="rgb(62, 133, 243)"
                stopOpacity={1}
            />
            </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        </BarChart>
    </ResponsiveContainer>
    </ChartWrapper>
);
};

export default Chart;
