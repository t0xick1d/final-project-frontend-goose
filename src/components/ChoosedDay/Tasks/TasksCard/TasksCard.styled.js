import styled from 'styled-components';

export const Item = styled.li`
  display: block;
  border-radius: 8px;
  border: 1px solid var(--task-border-color);
  background: var(--outlet-background-color);
  width: 299px;
  height: 112px;
  padding: 14px;

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  overflow: hidden;
  color: var(--title-text-main-color);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 32px;
`;
export const Avatar = styled.img`
  display: flex;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;
`;
export const Grade = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  border-radius: 4px;
  background: ${props =>
    props.color === 'low'
      ? 'var(--task-low-color)'
      : props.color === 'medium'
      ? 'var(--task-med-color)'
      : 'var(--task-high-color)'};
  color: var(--text-priority-high-color);
  text-align: center;
  font-size: 10px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 12px;

  padding: 4px 12px;
  margin-left: 8px;
`;
export const List = styled.ul`
  display: flex;
  margin-left: auto;
  list-style: none;
  overflow: hidden;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 0;
  flex-wrap: wrap;
  align-content: flex-end;
  color: var(--title-text-main-color);
`;
export const SvgBtn = styled.svg`
  fill: currentColor;
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: none;
  stroke: var(--title-text-main-color);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    stroke: var(--accent);
    transform: scale(1.2);
  }
`;

// fill: currentColor;
// `;
// export const Dropdown = styled.div`
//   position: absolute;
//   margin-top: 16px;
//   width: 99px;
//   height: 50px;
//   display: ${props => (props.visible ? 'inline-flex' : 'none')};
//   /* display: block; */
//   padding: 20px 24px;
//   justify-content: flex-start;
//   align-items: center;
//   border-radius: 8px;
//   background: #fff;
//   box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
//   gap: 14px;
//   flex-wrap: wrap;
//   flex-direction: row;
// `;
// export const DropdownElement = styled.div`
//   min-width: 99px;
//   display: flex;
//   align-items: center;
// `;
// export const DropdownText = styled.p`
//   color: var(--calendar-date-color);
//   font-size: 14px;
//   font-family: Inter;
//   font-weight: 500;
//   line-height: 18px;
//   margin: 0px;
//   margin-right: auto;
// `;

export const DropdownBtn = styled.button`
  border: none;
  color: transparent;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const ModalDeleteWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ModalDeleteFont = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
`;

export const ModalDeleteTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ModalDeleteText = styled.h3`
  margin-bottom: 20px;
  font-weight: 400;
`;

export const ModalCalcelButton = styled.button`
  appearance: button;
  background-color: #0276ff;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  padding: 12px 14px;
  text-align: center;
  text-transform: none;
  transition: color 0.13s ease-in-out, background 0.13s ease-in-out,
    opacity 0.13s ease-in-out, box-shadow 0.13s ease-in-out;
  margin-right: 30px;
  &:active {
    background-color: #006ae8;
  }

  &:hover {
    background-color: #1c84ff;
  }
`;

export const ModalDeleteButton = styled.button`
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  font-size: 16px;
  font-weight: 800;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;
