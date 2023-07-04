import styled from 'styled-components';

export const SvgBtn = styled.svg`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: none;
  stroke: #111111;
`;

export const ModalContent = styled.div`
  position: absolute;

  ${({ position }) => {
    const { left, top } = position;
    return `    
        left: ${left + 185}px;
      top: ${top + 70}px;
      @media (min-width: 768px) {
      left: ${left + 205}px;
      top: ${top + 70}px;
  }

    `;
  }};
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 115px;
  background-color: var(--main-background-color);
  padding: 12px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  z-index: 5;

  @media (min-width: 768px) {
    width: 147px;
    min-height: 90px;
    padding: 20px 24px;
  }
`;

export const Button = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  background-color: transparent;
  outline: none;
  border: none;

  color: var(--basic-text-color);
  display: flex;
  justify-content: space-between;

  :hover {
    cursor: pointer;
    color: var(--button-bgd-color);
    svg {
      stroke: var(--accent-color);
    }
  }
`;
