import React from 'react';
import goose from './svg/goose.svg';
import ReviewsSlider from '../../components/Reviews/ReviewsSlider';

export default function MainPage() {
  return (
    <>
      <section>
        <img src={goose} alt="goose" />
        <h1>GooseTrack</h1>
        <nav>
          <li>
            <a href="/final-project-frontend-goose">Sign up</a>
          </li>
          <li>
            <a href="/final-project-frontend-goose">Log in</a>
          </li>
        </nav>
      </section>
      <footer>
        <ReviewsSlider />
      </footer>
    </>
  );
}
