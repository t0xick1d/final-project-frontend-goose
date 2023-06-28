import {
  StatisticsContainer,
  ButtonWrapper,
  BtnContainer,
  OptionsContainer,
  IconSvg,
  List,
  Item,
} from './Statistics.styled';
// import { useState } from 'react';
import {
  format,
  parse,
  startOfToday,
} from 'date-fns';
import BtnPrevNext from 'components/CalendarBtnPrevNext/BtnPrevNext';
import Icons from '../../images/sprite.svg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  LabelList,
} from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Statistics = () => {
      const today = startOfToday();
      const [currentMonth, setCurrentMonth] = useState(format(today, 'dd MMMM yyyy'));

    
  const [data, setData] = useState(null);
  
    const firstDayCurrentMonth = parse(currentMonth, 'dd MMMM yyyy', new Date());


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `statistics?date=${format(firstDayCurrentMonth, 'yyyy-MM-dd')}`
            );
            setData(response.data);
            console.log(response.data);
            console.log(today);

          } catch (error) {
            console.log(error);
          }
        };


        fetchData();
      }, []);

      if (!data) {
        return <div>Loading...</div>;
      }
    
  

  return (
    <StatisticsContainer>
      <OptionsContainer>
        <BtnContainer>
          <ButtonWrapper type="button">
            {format(firstDayCurrentMonth, 'dd MMMM yyyy')}
          </ButtonWrapper>
          <BtnPrevNext />
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

      <BarChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label
            value="Pages of my website"
            offset={0}
            position="insideBottom"
          />
        </XAxis>
        <YAxis
          label={{
            value: 'pv of page',
            angle: -90,
            position: 'insideLeft',
            textAnchor: 'middle',
          }}
        />
        <Bar dataKey="pv" fill="#8884d8">
          <LabelList dataKey="name" position="insideTop" angle="45" />
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d">
          <LabelList dataKey="uv" position="top" />
        </Bar>
      </BarChart>
    </StatisticsContainer>
  );
};
export default Statistics;
