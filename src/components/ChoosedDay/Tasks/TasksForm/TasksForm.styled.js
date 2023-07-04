import styled from 'styled-components';
import { Field } from 'formik';

export const ButtonCloseModal = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
  color: var(--title-text-main-color);
`;

export const CloseModal = styled.svg`
  fill: currentColor;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ContainerForm = styled.div`
  max-width: 303px;
  min-height: 336px;
  border-radius: 8px;
  border: 1px solid var(--task-border-color);
  background: var(--modal-background-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 18px 14px 18px;
  @media screen and (min-width: 768px) {
    padding: 14px 28px 14px 28px;
    max-width: 396px;
    min-height: 360px;
  }
`;

export const FormField = styled.label`
  display: flex;
  gap: 2px;
  flex-direction: column;
  color: var(--modal-input-lable-color);
  font-size: 12px;
  font-weight: 500;
  line-height: calc(14 / 12);
  margin-bottom: 8px;
`;
export const FieldText = styled(Field)`
  min-width: 267px;
  max-height: 42px;
  border: none;
  :not(.border-exempt) {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  hyphens: none;
  border-radius: 8px;
  background: var(--task-field-color);
  padding: 12px 14px;
  color: var(--calendar-date-color);
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-bottom: 16px;
  ::placeholder {
    color: var(--calendar-date-color);
  }
  :focus::placeholder {
    color: transparent;
  }
  &:focus {
    outline-color: transparent;
  }
  @media screen and (min-width: 768px) {
    min-width: 340px;
    min-height: 46px;
    margin-bottom: 18px;
  }
`;
// Style time
export const TimeBox = styled.ul`
  padding: 0;
  display: flex;
  gap: 15px;
  margin-bottom: 16px;
`;
export const FieldTime = styled(Field)`
  border-radius: 8px;
  padding: 12px 14px;
  background: var(--task-field-color);
  border: none;
  :not(.border-exempt) {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  min-width: 126px;
  height: 42px;

  color: var(--calendar-date-color);
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &:focus {
    outline-color: transparent;
  }
  @media screen and (min-width: 768px) {
    width: 163px;
    height: 46px;
    margin-bottom: 28px;
  }
`;

// Style Radio buttons
export const PriorityBox = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  margin-bottom: 32px;
`;

export const RadioLow = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #72c2f8;
  margin-right: 6px;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1.3px solid rgba(114, 194, 248, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 14px;
    }
  }
`;
export const RadioMedium = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #f3b249;
  margin-right: 6px;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1.3px solid rgba(243, 178, 73, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 14px;
    }
  }
`;
export const RadioHigh = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #ea3d65;
  margin-right: 6px;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1.3px solid rgba(234, 61, 101, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 14px;
    }
  }
`;

export const RadioLabel = styled.span`
  color: var(--calendar-date-color);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(14 / 12);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
export const FieldRadioButton = styled(Field)`
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:checked + span::before {
    display: block;
  }
`;
// Style Button
export const ButtonBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 26px;
`;

export const ButtonAdd = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 42px;

  border-radius: 8px;
  background: #3e85f3;
  border: none;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: (18 / 14);

  &:focus,
  :hover {
    border: 1px solid #efefef;
    box-shadow: 4px 2px 16px 0px rgba(62, 133, 243, 0.48);
  }
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 48px;
  }
`;
export const PlusIcon = styled.svg`
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 118px;
  height: 42px;
  padding: 12px 35px;

  border-radius: 8px;
  background: #efefef;
  border: none;
  cursor: pointer;

  color: #111;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: (18 / 14);
  &:focus,
  :hover {
    border: 1px solid #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(62, 133, 243, 0.48);
  }
  @media screen and (min-width: 768px) {
    width: 144px;
    height: 48px;
  }
`;
export const ButtonEdit = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #3e85f3;
  width: 267px;
  height: 42px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  &:focus,
  :hover {
    border: 1px solid #efefef;
    box-shadow: 4px 2px 16px 0px rgba(62, 133, 243, 0.48);
  }
  @media screen and (min-width: 768px) {
    width: 340px;
    height: 48px;
  }
`;
export const PencilIcon = styled.svg`
  fill: #fff;
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
