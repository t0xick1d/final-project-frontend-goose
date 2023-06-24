import React from 'react';
import goose from './svg/goose.svg';
import Reviews from '../../components/Reviews/Reviews';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <section>
        <img src={goose} alt="goose" />
        <h1>GooseTrack</h1>
        <nav>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </nav>
      </section>
      <footer>
        <Reviews />
      </footer>
    </>
  );
}
