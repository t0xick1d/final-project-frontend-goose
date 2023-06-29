import image1 from './image/image1-mb.jpg';
import image2 from './image/image2-mb.jpg';
import image3 from './image/image3-mb.jpg';
export const DescriptionSection = () => {
  return (
    <section>
      <ul>
        <li>
          <ul>
            <li>
              <p>1.</p>
            </li>
            <li>
              <p>Calendar</p>
            </li>
            <li>
              <p>view</p>
            </li>
            <p>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </p>
            <img src={image1} alt="project desine" />
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <p>2.</p>
            </li>
            <li>
              <p>SIDEBAR</p>
            </li>
            <p>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </p>
            <img src={image2} alt="project desine" />
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <p>3.</p>
            </li>
            <li>
              <p>all in</p>
            </li>
            <li>
              <p>one</p>
            </li>
            <li>
              <p>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </p>
              <img src={image3} alt="project desine" />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
