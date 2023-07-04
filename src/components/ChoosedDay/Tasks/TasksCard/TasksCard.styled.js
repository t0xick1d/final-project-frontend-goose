import styled from 'styled-components';

export const Item = styled.li`
  display: block;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;
  max-width: 299px;
  height: 112px;

  padding: 14px;
  margin-bottom: 18px;

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
  color: #111;
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

  border-radius: 4px;
  background: ${props =>
    props.color === 'low'
      ? '#72c2f8'
      : props.color === 'medium'
      ? '#F3B249'
      : '#EA3D65'};
  color: #f7f6f9;
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
`;
export const SvgBtn = styled.svg`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: none;
  stroke: #111111;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    stroke: var(--accent-color);
    transform: scale(1.2);
  }
`;

export const DropdownBtn = styled.button`
  border: none;
  color: transparent;
  background-color: transparent;
  padding: 0;
`;
