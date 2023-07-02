import { useEffect } from 'react';
import { Data } from '../common/Data';

const GoogleCalendarScheduling = ({language}) => {
  useEffect(() => {
    const loadCalendar = () => {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gcKmY01opz5BqfU2mLkHVN2UtcqyqfMQlH13JAEdUsluHCSD_eg-H3wtUYosT4y5VF8-IBO8d?gv=true',
        color: '#039BE5',
        label: Data.booking[language ? 'en' : 'nr'].textlabel,
        target: document.getElementById('calendar-scheduling-button'),
      });
    };

    if (typeof calendar === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = loadCalendar;
      document.body.appendChild(script);
    } else {
      loadCalendar();
    }
  }, []);

  return (
    <div id="calendar-scheduling-button">
    </div>
  );
};

export default GoogleCalendarScheduling;
