import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled('div')({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  color: 'darkslategray',
  backgroundColor: '#E3F3FF',
  minHeight: '100vh',
});

export const Container = styled('div')({
  width: '90%',

  paddingRight: 24,
  paddingLeft: 24,
  paddingTop: 40,
  paddingBottom: 40,

  marginRight: 20,
  marginLeft: 20,
  marginBottom: 16,

  borderRadius: '8px',

  '@media (min-width: 375px)': {
    maxWidth: 335,
  },
  '@media (min-width: 768px)': {
    maxWidth: 480,
  },

  color: 'darkslategray',
  backgroundColor: '#ffffff',
});

export const Title = styled('h1')({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '24px',

  margin: 0,
  padding: 0,

  marginBottom: 32,

  color: '#3E85F3',
  textShadow:
    '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
});

export const LogInBtn = styled(Link)({
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
  bottom: 0,
  left: '10%',

  display: 'none',

  '@media (min-width: 1440px)': {
    display: 'block',
  },
});
