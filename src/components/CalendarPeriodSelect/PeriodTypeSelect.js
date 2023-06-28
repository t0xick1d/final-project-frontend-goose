import { useState } from 'react';
import {
  TypesContainerMonth,
  TypesContainerDay,
  TypesTabs,
  BtnContainer,
} from './PeriodTypes.styled';

const PeriodType = () => {
  const [activeTab, setActiveTab] = useState('Month');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <BtnContainer>
      <TypesContainerMonth type="button" isActive={activeTab === 'Month'}>
        <TypesTabs to="/month/:currentDate" onClick={() => handleTabClick('Month')}>
          Month
        </TypesTabs>
      </TypesContainerMonth>
      <TypesContainerDay type="button" isActive={activeTab === 'Day'}>
        <TypesTabs to="/day/:currentDate" onClick={() => handleTabClick('Day')}>
          Day
        </TypesTabs>
      </TypesContainerDay>
    </BtnContainer>
  );
};

export default PeriodType;
