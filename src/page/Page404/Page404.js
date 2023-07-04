import React, { useEffect, useState } from 'react';
import {
  Number,
  Image,
  Container404,
  Container,
  Text,
  Link,
} from './Page404.styled';
import gooseImg from '../../images/icons/goose-404.svg';

export default function Page404() {
  const [darkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true' || false
  );
  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme);
    if (darkTheme) document.body.setAttribute('dark', '');
    else document.body.removeAttribute('dark');
  }, [darkTheme]);

  return (
    <Container>
      <Container404>
        <Number>4</Number>
        <Image alt="Goose on rocket" src={gooseImg} />
        <Number>4</Number>
      </Container404>
      <Text>
        We’re sorry, the page you requested could not be found. Please
        <Link to="/"> go back to the homepage</Link>.
      </Text>
    </Container>
  );
}
