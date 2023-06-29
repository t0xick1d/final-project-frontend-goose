import React from 'react';
import ReviewsSlider from '../../components/Reviews/ReviewsSlider';
import { AuthSection } from 'components/AuthSection/AuthSection';
import { DescriptionSection } from 'components/Description/Description';

export default function MainPage() {
  return (
    <>
      <section>
        <AuthSection />
        <DescriptionSection />
      </section>
      <footer>
        <ReviewsSlider />
      </footer>
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
// {/* <img src={goose} alt="goose" /> */}
//         <h1>GooseTrack</h1>
//         <nav>
//           <li>
//             <Link to="/register">Sign up</Link>
//           </li>
//           <li>
//             <Link to="/login">Log in</Link>
//           </li>
//         </nav>
