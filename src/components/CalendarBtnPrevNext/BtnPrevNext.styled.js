import styled from 'styled-components';

const size = {
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const BtnPrevContainer = styled.button`
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--calendartable-border-color);
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;
  background-color: var(--main-background-color);
  width: 36px;
  height: 30px;
  margin: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: var(--title-text-main-color);
  }
  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
  :hover {
    transform: scale(1.2);
    svg {
      fill: var(--accent);
    }
  }
`;

export const BtnNextContainer = styled.button`
  border-radius: 0 8px 8px 0;
  border: 1px solid var(--calendartable-border-color);
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;

  background-color: var(--calendar-bg-color);
  width: 36px;
  height: 30px;
  margin: 0;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: var(--title-text-main-color);
  }

  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
  :hover {
    transform: scale(1.2);
    svg {
      fill: var(--accent);
    }
  }
`;

export const BtnPrevNextContainer = styled.div`
  display: flex;
`;
export const TextWrapper = styled.div`
  /* width: 109px;
  height: 30px;
  color: #fff;
  background: var(--button-bgd-color); */

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 109px;
  height: 30px;
  color: var(--white-color);
  background: var(--accent-background-color);

  border: none;
  border-radius: 8px;
  /* padding: 6px 12px; */
  /* cursor: pointer; */
  margin-bottom: 18px;
  /* text-align: center; */
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-right: 8px;
    width: 131px;

    /* @media screen and (min-width: 768px) {
    margin-right: 8px;
    min-width: 131px; */

    height: 34px;
    margin-bottom: 0;
  }
`;
