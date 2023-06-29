import styled from 'styled-components';

export const ItemWrapp = styled('div')({
  position: 'relative',
});

export const StyledLabel = styled('label')(
  ({ color = { error: '', touched: false } }) => ({
    display: 'block',

    fontSize: '12px',
    fontWeight: 600,
    marginBottom: 8,

    color:
      color.error && color.touched
        ? 'red'
        : !color.error && color.touched
        ? 'green'
        : '#111',
  })
);

export const StyledInput = styled('input')(
  ({ color = { error: '', touched: false } }) => ({
    width: '100%',

    color: '#111',
    fontSize: '14px',
    lineHeight: '18px',

    height: 48,

    borderRadius: '8px',
    border: '1px solid',

    borderColor:
      color.error && color.touched
        ? 'red'
        : !color.error && color.touched
        ? 'green'
        : 'rgba(220, 227, 229, 0.60)',

    marginBottom: 24,
    paddingLeft: 14,

    ':hover': {
      border: '1px solid #111',
    },

    '::placeholder': {
      color: '#DCE3E5',
    },
  })
);

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

export const Success = styled('p')({
  position: 'absolute',
  top: 72,
  left: 10,

  color: 'green',
  fontSize: '12px',
  lineHeight: '14px',
  margin: 0,
  padding: 0,
});

export const ValidationIcon = styled('img')({
  position: 'absolute',
  top: 34,
  right: 20,
});

export const SignUpBtn = styled('button')({
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
