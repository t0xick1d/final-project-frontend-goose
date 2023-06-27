import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  BtnPrevNextContainer,
  BtnPrevContainer,
  BtnNextContainer,
} from './BtnPrevNext.styled';

const BtnPrevNext = () => {


  return (
    <BtnPrevNextContainer>
      <BtnPrevContainer type="button">
          <FaChevronLeft />
      </BtnPrevContainer>
      <BtnNextContainer type="button">
          <FaChevronRight />
      </BtnNextContainer>
    </BtnPrevNextContainer>
  );
};

export default BtnPrevNext;
