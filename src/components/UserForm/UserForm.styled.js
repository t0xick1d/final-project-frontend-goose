import styled from 'styled-components';
import { Field, Form } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;

  background: var(--main-background-color);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }

  h2 {
    margin-top: 59px;
    margin-bottom: 4px;

    height: 18px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: calc(18 / 14);

    color: var(--title-text-main-color);

    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
      margin-top: 0px;
      font-size: 18px;
      line-height: calc(18 / 18);
    }
  }
`;

export const User = styled.p`
  margin-bottom: 40px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);

  color: var(--modal-input-text-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const Forms = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: unset;
  }
`;

export const BlockInput = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 299px;
  height: 392px;

  p {
    margin-bottom: 8px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(14 / 12);
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    height: 264px;
  }
`;

export const Input = styled(Field)`
  position: relative;
  width: 299px;
  height: 42px;

  margin-bottom: 18px;

  padding-left: 18px;

  border: 1px solid var(--input-border-color);
  border-radius: 8px;
  background: var(--main-background-color);

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 16);

  color: var(--title-text-main-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    width: 354px;
    height: 46px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: flex-end;
  color: red;
  font-size: 10;
  margin-top: -18px;
`;

export const DatePick = styled(DatePicker)`
  width: 299px;
  height: 42px;

  margin-bottom: 18px;
  padding-left: 18px;

  border: 1px solid var(--input-border-color);
  border-radius: 8px;
  background: var(--main-background-color);

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: var(--title-text-main-color);

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;

    margin-bottom: 24px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ImgBtn = styled.img`
  width: 14px;
  height: 14px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const LabelImg = styled.label`
  position: absolute;
  left: 43px;
  top: 62px;
  @media screen and (min-width: 768px) {
    left: 76px;
    top: 106px;
  }
`;

export const ContainerImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  left: 115px;
  top: -30px;

  width: 72px;
  height: 72px;

  border: 2px solid var(--accent-background-color);
  border-radius: 50%;
  background: var(--main-background-color);

  @media screen and (min-width: 768px) {
    position: relative;
    margin-top: 40px;
    margin-bottom: 14px;

    left: 0px;
    top: 0px;

    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
`;

export const SvgAvatar = styled.svg`
  width: 48px;
  height: 48px;

  border-radius: 50%;
`;

export const VectorPng = styled.svg`
  position: absolute;

  transform: rotate(270deg);

  stroke: var(--title-text-main-color);
  fill: none;

  cursor: pointer;

  left: 260px;
  bottom: 175px;

  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    left: 310px;
    bottom: 219px;
  }
  @media screen and (min-width: 1440px) {
    left: 314px;
    bottom: 118px;
  }
`;

export const LabelBtn = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);

  color: var(--label-text-color);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Btn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;

  padding: 0;

  width: 195px;
  height: 46px;

  border-radius: 16px;
  border: none;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);

  background: var(--accent-background-color);
  color: var(--btn-text-color);

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    margin-top: 22px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
  }

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #2b78ef;
  }
  &:active {
    filter: blur(0.1rem);
  }
`;
