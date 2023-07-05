import { ChartWrapper, Text, Container } from './Statistics.styled';

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
import { useMediaQuery } from '@mui/material';
import Spiner from '../Spiner/Spiner';

const Chart = ({ firstDayCurrentMonth, setFirstDayCurrentMonth }) => {
  const [data, setData] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Задайте відповідний розмір екрану для мобільної версії

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
    return <Spiner />;
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
      dayPercentage: todo.forDay.percents,
      month: todo.forMonth.quantity,
      monthPercentage: todo.forMonth.percents,
    },
    {
      name: 'In Progress',
      day: inProgres.forDay.quantity,
      dayPercentage: inProgres.forDay.percents,
      month: inProgres.forMonth.quantity,
      monthPercentage: inProgres.forMonth.percents,
    },
    {
      name: 'Done',
      day: done.forDay.quantity,
      dayPercentage: done.forDay.percents,
      month: done.forMonth.quantity,
      monthPercentage: done.forMonth.percents,
    },
  ];

  const CustomLabel = ({ x, y, width, value }) => (
    <g transform={`translate(${x + width / 2},${y + 4})`}>
      <text
        x={2}
        y={3}
        dy={0}
        textAnchor="middle"
        fill="var(--calendar-date-color)"
        fontSize={isMobile ? 12 : 16}
        fontWeight={500}
      >
        {!isNaN(value) && value !== 0 ? `${value.toFixed(0)}%` : ''}
      </text>
    </g>
  );

  return (
    <ChartWrapper>
      <Container>
        <Text>Tasks </Text>
        <ResponsiveContainer width="100%" height={266}>
          <BarChart
            data={chartData}
            barGap={isMobile ? 8 : 14}
            barSize={isMobile ? 22 : 27}
          >
            <CartesianGrid
              stroke="var(--border-statistics)"
              strokeWidth={1}
              strokeDasharray="none"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: 'var(--calendar-date-color)' }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickFormatter={value => value}
              domain={[0, 'dataMax']}
              allowDataOverflow={true}
              scale="linear"
              axisLine={false}
              tickCount={totalTasks}
              tickLine={false}
              tickMargin={30}
              tick={{ fill: 'var(--calendar-date-color)' }}
            />
            <Tooltip />
            <Bar dataKey="day" fill="url(#gradient1)" radius={[0, 0, 10, 10]}>
              <LabelList
                dataKey="dayPercentage"
                position="top"
                content={<CustomLabel />}
                fill="var(--calendar-date-color)"
              />
            </Bar>
            <Bar dataKey="month" fill="url(#gradient2)" radius={[0, 0, 10, 10]}>
              <LabelList
                dataKey="monthPercentage"
                position="top"
                content={<CustomLabel />}
                fill="var(--calendar-date-color)"
              />
            </Bar>
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--priority-high-color)"
                  stopOpacity={0}
                />
                <stop
                  offset="100%"
                  stopColor="var(--priority-high-color)"
                  stopOpacity={1}
                />
              </linearGradient>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity={0} />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </ChartWrapper>
  );
};

export default Chart;
