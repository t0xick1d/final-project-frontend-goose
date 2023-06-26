import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'darkslategray',
  backgroundColor: '#E3F3FF',
  minHeight: '100vh',
});

export const Container = styled('div')({
  position: 'relative',

  width: '90%',

  paddingRight: 24,
  paddingLeft: 24,
  paddingTop: 40,
  paddingBottom: 40,

  marginRight: 20,
  marginLeft: 20,
  marginBottom: 16,

  borderRadius: '8px',

  color: 'darkslategray',
  backgroundColor: '#ffffff',

  '@media (min-width: 375px)': {
    maxWidth: 335,
  },
  '@media (min-width: 768px)': {
    maxWidth: 480,
  },
});

export const Title = styled('h1')({
  color: '#3E85F3',
  textShadow:
    '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '24px',

  margin: 0,
  padding: 0,

  marginBottom: 32,
});

export const ItemWrapp = styled('div')({
  position: 'relative',
});

export const StyledLabel = styled('label')(props => ({
  display: 'block',

  fontSize: '12px',
  fontWeight: 600,
  marginBottom: 8,

  color: props.color ? 'red' : '#111',
}));

export const StyledInput = styled('input')(props => ({
  width: '100%',

  color: '#111',
  fontSize: '14px',
  lineHeight: '18px',

  height: 48,

  borderRadius: '8px',
  border: '1px solid',

  borderColor: props.color ? 'red' : 'rgba(220, 227, 229, 0.60)',

  marginBottom: 24,
  paddingLeft: 14,

  ':hover': {
    border: '1px solid #111',
  },

  '::placeholder': {
    color: '#DCE3E5',
  },
}));

export const Error = styled('p')({
  position: 'absolute',
  top: 72,
  left: 10,

  color: '#DA1414',
  fontSize: '12px',
  lineHeight: '14px',
  margin: 0,
  padding: 0,
});

export const ErrorIcon = styled('img')({
  position: 'absolute',
  top: 34,
  right: 20,
});

export const LogInBtn = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  letterSpacing: '-0.28px',

  width: '100%',
  height: 46,

  border: 'none',

  borderRadius: '16px',

  background: '#3E85F3',
  boxShadow: ' 4px 2px 16px 0px rgba(136, 165, 191, 0.48)',

  cursor: 'pointer',

  color: '#ffffff',

  ':hover': {
    background: '#2B78EF',
  },
  '@media (min-width: 768px)': {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.36px',
  },
});

export const SignUpBtn = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '14px',

  textDecorationLine: 'underline',

  textShadow:
    '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
  color: '#3E85F3',

  ':hover': {
    textDecorationLine: 'none',
  },

  '@media (min-width: 768px)': {
    fontSize: '18px',
    lineHeight: '24px',
  },
});

export const MainImg = styled('img')({
  position: 'absolute',
  bottom: '10%',
  right: '11%',

  display: 'none',

  '@media (min-width: 1440px)': {
    display: 'block',
  },
});
