import { useState } from 'react';
import {
  TypesContainer,
  // TypesContainerDay,
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

  const formattedDate = activeTab => {
    if (activeTab === 'Month') {
      // setActiveTab(activeTab)
      return format(ValidCurrentDate, 'yyyy-MM');
    }
    // setActiveTab(activeTab)
    return format(new Date(), 'yyyy-MM-dd');
  };

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <BtnContainer>
      <TypesContainer
        type="button"
        isActive={activeTab === 'Month'}
        onClick={() => handleTabClick('Month')}
      >
        <TypesTabs
          isActive={activeTab === 'Month'}
          to={`/calendar/month/${formattedDate('Month')}`}
        >
          Month
        </TypesTabs>
      </TypesContainer>
      <TypesContainer
        type="button"
        isActive={activeTab === 'Day'}
        lastChild={true}
        onClick={() => handleTabClick('Day')}
      >
        <TypesTabs
          isActive={activeTab === 'Day'}
          to={`/calendar/day/${formattedDate('Day')}`}
        >
          Day
        </TypesTabs>
      </TypesContainer>
    </BtnContainer>
  );
};

export default PeriodType;