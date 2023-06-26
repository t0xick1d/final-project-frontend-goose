    import styled from 'styled-components';
    import { NavLink } from 'react-router-dom';

    const size = {
    tablet: '768px',
    desktop: '1440px',
    };

    export const device = {
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    };

    export const SideBarContainer = styled.div`
    z-index: 10;
    min-height: 100%;
    width: 225px;
    left: -10px;
    position: fixed;
    justify-content: flex-start;
    background-color: white;
    @media ${device.tablet} {
        max-width: 289px;
    }
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: 0.3s ease-in-out;
    `;

    export const SideBarDiv = styled.div`
    padding-top: 24px;
    padding-left: 20px;
    padding-right: 20px;
    @media ${device.tablet} {
        padding-top: 24px;
        padding-left: 32px;
        padding-right: 32px;
    }
    @media ${device.desktop} {
        padding: 24px;
    }
    `;

    export const LogoConrainer = styled.div`
    gap: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

    export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #343434;
    `;

    export const LogoIcon = styled.img`
    width: 36px;
    height: 35px;
    margin-right: 6px;

    @media ${device.tablet} {
        width: 60px;
        height: 58px;
    }

    @media ${device.desktop} {
        width: 71px;
        height: 68px;
        margin-right: 10px;
    }
    `;

    export const LogoSvg = styled.svg`
    width: 80px;
    height: 22px;
    fill: #3e85f3;

    @media ${device.tablet} {
        width: 90px;
        height: 24px;
    }

    @media ${device.desktop} {
        width: 120px;
    }
    `;

    export const CloseBtn = styled.button`
    display: flex;
    font-size: 20px;
    align-items: center;
    text-align: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0px;
    @media ${device.tablet} {
        font-size: 33px;
    }

    @media ${device.desktop} {
        display: none;
    }
    `;

    export const SideBarNav = styled.div`
    width: 100%;
    margin-top: 64px;
    @media ${device.tablet} {
        margin-top: 50px;
    }
    `;

    export const TitleSideBar = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: grey;
    margin-bottom: 24px;
    margin-top: 64px;

    @media ${device.tablet} {
        margin-top: 50px;
    }

    @media ${device.desktop} {
        margin-bottom: 32px;
        margin-top: 32px;
    }
    `;

    export const SideBarLink = styled.ul`
    padding-left: 0;
    @media ${device.tablet} {
        gap: 16px;
    }
    `;

    export const IconUser = styled.svg`
    fill: #34343480;
    stroke: #ffffff;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    @media ${device.tablet} {
        margin-right: 10px;
    }
    `;

    export const CalendarIcon = styled.svg`
    margin-right: 8px;
    width: 20px;
    height: 20px;
    fill: #34343480;
    @media ${device.tablet} {
        margin-right: 10px;
    }
    &.active,
    :hover,
    :focus {
        stroke: #e3f3ff;
        fill: #3e85f3;
    }
`;

    export const StatisticsIcon = styled.svg`
    margin-right: 8px;
    width: 20px;
    height: 20px;
    fill: #34343480;
    @media ${device.tablet} {
        margin-right: 10px;
    }
    `;

        export const LogoutIcon = styled.svg`
          margin-right: 6px;
          width: 18px;
          height: 18px;
          fill: #34343480;
          @media ${device.tablet} {
            margin-right: 11px;
            width: 20px;
            height: 20px;
          }
        `;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    color: #34343480;
    align-items: center;
    margin-right: 0;
    text-decoration: none
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    height: 40px;
    padding-left: 12px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin-bottom: 16px;
    border-radius: 8px;

    display: flex;
    justify-content: flex-start;

    > :not(:last-child) {
        margin-bottom: 18px;
    }

    &.active,
    :hover,
    :focus {
    fill: #3e85f3;
    color: #3e85f3;
    background: #e3f3ff;
    stroke: #e3f3ff;

        ${StatisticsIcon} {
        stroke: #e3f3ff;
        fill: #3e85f3;
    },
    
    }

    @media ${device.tablet} {
    height: 56px;
    padding-left: 20px;
    }
`;

export const LogOutBtn = styled.button`
    width: 131px;
    height: 46px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    position: absolute;

    left: 20px;
    bottom: 24px;

    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF
    letter-spacing: -0.02em;
    background-color: #3E85F3
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 16px;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    :focus {
        cursor: pointer;
        background-color: #2b78ef;
    }

    @media ${device.tablet} {
        width: 141px;
        height: 56px;
        gap: 11px;
        left: 32px;
    }

    @media ${device.desktop} {
        width: 141px;
        height: 56px;
        left: 24px;
    }
    `;
