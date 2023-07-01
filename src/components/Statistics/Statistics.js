import {
  StatisticsContainer,
  ButtonWrapper,
  BtnContainer,
  OptionsContainer,
  IconSvg,
  List,
  Item,
  ChartWrapper,
} from './Statistics.styled';
import { format, parseISO, startOfToday, parse } from 'date-fns';
import BtnPrevNext from 'components/CalendarBtnPrevNext/BtnPrevNext';
import Icons from '../../images/sprite.svg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'components/Calendar/Calendar';
import { useSelector } from 'react-redux';

const Statistics = () => {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(
    format(today, 'dd MMMM yyyy')
  );
  const [data, setData] = useState(null);
  const [firstDayCurrentMonth, setFirstDayCurrentMonth] = useState(
    parseISO(format(today, 'yyyy-MM-dd'))
  );
  const [showCalendar, setShowCalendar] = useState(false); // Доданий стан для показу/приховування календаря

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

  const { todo, inProgres, done, totalForDay, totalForMonth } = data;

  const todoByDay = (todo.forDay.quantity / totalForDay) * 100;
  const inProgressByDay = (inProgres.forDay.quantity / totalForDay) * 100;
  const doneByDay = (done.forDay.quantity / totalForDay) * 100;

  const todoByMonth = (todo.forMonth.quantity / totalForMonth) * 100;
  const inProgressByMonth = (inProgres.forMonth.quantity / totalForMonth) * 100;
  const doneByMonth = (done.forMonth.quantity / totalForMonth) * 100;

  const handleDateChange = newDate => {
    const parsedDate = parse(newDate, 'dd MMMM yyyy', new Date());
    setFirstDayCurrentMonth(parsedDate);
    setCurrentMonth(format(parsedDate, 'dd MMMM yyyy'));
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(prevState => !prevState);
  };

  // const dataExaple = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //   },
    
  // ];

  return (
    <StatisticsContainer>
      <OptionsContainer>
        <BtnContainer>
          <ButtonWrapper type="button" onClick={toggleCalendar}>
            {format(firstDayCurrentMonth, 'dd MMMM yyyy')}
          </ButtonWrapper>
          <BtnPrevNext onDateChange={handleDateChange} viewType="day" />
        </BtnContainer>
        <List>
          <Item>
            <IconSvg>
              <use href={`${Icons}#icon-Ellipse-3-1`}></use>
            </IconSvg>
            By Day
          </Item>
          <Item>
            <IconSvg>
              <use href={`${Icons}#icon-Ellipse-4-1`}></use>
            </IconSvg>
            By Month
          </Item>
        </List>
      </OptionsContainer>
      <ChartWrapper>
        <BarChart
          width={307}
          height={413}
          margin={{ top: 40 }}
          padding={{ right: 14, left: 14 }}
          data={[
            { name: 'todo', pv: todoByDay, uv: todoByMonth },
            {
              name: 'inprogress',
              pv: inProgressByDay,
              uv: inProgressByMonth,
            },
            { name: 'done', pv: doneByDay, uv: doneByMonth },
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ChartWrapper>
           {showCalendar && (
        <Calendar onDateChange={handleDateChange} /> 
      )}
    </StatisticsContainer>
  );
};

export default Statistics;

