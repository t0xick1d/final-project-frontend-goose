import { ChartWrapper, Text } from './Statistics.styled';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
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

const totalTasks = Math.max(
  todo.forDay.quantity,
  todo.forMonth.quantity,
  inProgres.forDay.quantity,
  inProgres.forMonth.quantity,
  done.forDay.quantity,
  done.forMonth.quantity
);

const chartData = [
  {
    name: 'Todo',
    day: todo.forDay.quantity,
    dayPercentage: (todo.forDay.quantity / totalTasks) * 100,
    month: todo.forMonth.quantity,
    monthPercentage: (todo.forMonth.quantity / totalTasks) * 100,
  },
  {
    name: 'In Progress',
    day: inProgres.forDay.quantity,
    dayPercentage: (inProgres.forDay.quantity / totalTasks) * 100,
    month: inProgres.forMonth.quantity,
    monthPercentage: (inProgres.forMonth.quantity / totalTasks) * 100,
  },
  {
    name: 'Done',
    day: done.forDay.quantity,
    dayPercentage: (done.forDay.quantity / totalTasks) * 100,
    month: done.forMonth.quantity,
    monthPercentage: (done.forMonth.quantity / totalTasks) * 100,
  },
];


    const CustomLabel = ({ x, y, width, value }) => (
     <g transform={`translate(${x + width / 2},${y + 4})`}>
    <text
      x={1}
      y={0}
      dy={4}
      textAnchor="middle"
      fill="#343434"
      fontSize={12}
      fontWeight={500}
    >
      {!isNaN(value) && value !== 0 ? `${value.toFixed(0)}%` : ''}
    </text>
  </g>
);

return (
  <ChartWrapper>
    <Text>Tasks </Text>
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={chartData}
        barGap={8}
        barSize={22}
        margin={{
          top: 5,
          right: 40,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          stroke="#E3F3FF"
          strokeWidth={1}
          strokeDasharray="none"
          vertical={false}
        />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} />
        <YAxis
          tickFormatter={value => value}
          domain={[0, 'dataMax']}
          allowDataOverflow={true}
          scale="linear"
          tickCount={totalTasks + 1}
          tickLine={false}
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
            <stop offset="0%" stopColor="rgb(255, 210, 221)" stopOpacity={0} />
            <stop
              offset="100%"
              stopColor="rgb(255, 210, 221)"
              stopOpacity={1}
            />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(62, 133, 243)" stopOpacity={0} />
            <stop offset="100%" stopColor="rgb(62, 133, 243)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
      </BarChart>
    </ResponsiveContainer>
  </ChartWrapper>
);
};

export default Chart;
