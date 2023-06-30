import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Svg } from './ThemeToggle.styled';
import icon from 'images/sprite.svg';

export const ThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true' || false
  );

  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme);
    if (darkTheme) document.body.setAttribute('dark', '');
    else document.body.removeAttribute('dark');
  }, [darkTheme]);

  return (
    <label>
      <Input
        type="checkbox"
        onChange={() => {
          setDarkTheme(!darkTheme);
        }}
      />

      <Svg>
        <use href={icon + (darkTheme ? '#icon-sun' : '#icon-moon')}></use>
      </Svg>
    </label>
  );
};
