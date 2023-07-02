import { useState } from 'react';
import {
  TypesContainerMonth,
  TypesContainerDay,
  TypesTabs,
  BtnContainer,
} from './PeriodTypes.styled';

import { useParams } from 'react-router-dom/dist';
import { format } from 'date-fns';

const PeriodType = () => {
  const [activeTab, setActiveTab] = useState('Month');

  const params = useParams();

  const date = new Date(params.currentDate);

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      }
    }
    return date;
  })();

  const formattedDate = () => {
    if (activeTab === 'Month') {
      return format(ValidCurrentDate, 'yyyy-MM');
    }

    return format(ValidCurrentDate, 'yyyy-MM-dd');
  };

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <BtnContainer>
      <TypesContainerMonth type="button" isActive={activeTab === 'Month'}>
        <TypesTabs
          // to="/calendar/month/:currentDate"
          to={`/calendar/month/${formattedDate()}`}
          onClick={() => handleTabClick('Month')}
        >
          Month
        </TypesTabs>
      </TypesContainerMonth>
      <TypesContainerDay type="button" isActive={activeTab === 'Day'}>
        <TypesTabs
          // to="/calendar/day/:currentDate"
          to={`/calendar/day/${formattedDate()}`}
          onClick={() => handleTabClick('Day')}
        >
          Day
        </TypesTabs>
      </TypesContainerDay>
    </BtnContainer>
  );
};

export default PeriodType;
