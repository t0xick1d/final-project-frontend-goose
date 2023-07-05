import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import HeaderCalendar from './HeaderCalendar/HeaderCalendar';
import { format } from 'date-fns';

import Spinner from '../../components/Spiner/Spiner';

export default function CalendarPage() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const date = new Date(params.currentDate);

  const ValidCurrentDate = (() => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        // navigate(`/404`);
        return new Date();
      }
      return date;
    }
    // navigate(`/404`);
    return new Date();
  })();

  const formattedCurrentDate = format(ValidCurrentDate, 'yyyy-MM');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
      return;
    }
  }, [formattedCurrentDate, location.pathname, navigate]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <HeaderCalendar />
        <Outlet />
      </Suspense>
    </>
  );
}
