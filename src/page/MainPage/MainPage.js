import React from 'react';
// import goose from './svg/goose.svg';
import ReviewsSlider from '../../components/Reviews/ReviewsSlider';
import { Link } from 'react-router-dom';
import Day from 'components/ChoosedDay/Day/Day';

export default function MainPage() {
  return (
    <>
      <section>
        {/* <img src={goose} alt="goose" /> */}
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
        <ReviewsSlider />
      </footer>
      <Day />
    </>
  );
}

// Був конфлікт тому я вирішив закоментувати
// import { AuthSection } from 'components/AuthSection/AuthSection';
// import { DescriptionSection } from 'components/Description/Description';
// export default function MainPage() {
//   return (
//     <>
//       <AuthSection />
//       <DescriptionSection />
