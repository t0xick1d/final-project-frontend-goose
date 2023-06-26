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

export const Text = styled('p')({
  marginBottom: 20,
});

export const AppLink = styled(Link)({
  color: '#3E85F3',
});
