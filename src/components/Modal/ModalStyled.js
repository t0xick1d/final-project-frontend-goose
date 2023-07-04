import styled from 'styled-components';
import Box from '@mui/material/Box';

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--modal-background-color);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  color: var(--title-text-main-color);
`;
