import { useEffect } from 'react';

const GoogleCalendarScheduling = () => {
  useEffect(() => {
    const loadCalendar = () => {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gcKmY01opz5BqfU2mLkHVN2UtcqyqfMQlH13JAEdUsluHCSD_eg-H3wtUYosT4y5VF8-IBO8d?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
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



// <!-- Google Calendar Appointment Scheduling begin -->
// <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
// <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
// <script>
// (function() {
//   var target = document.currentScript;
//   window.addEventListener('load', function() {
//     calendar.schedulingButton.load({
//       url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gcKmY01opz5BqfU2mLkHVN2UtcqyqfMQlH13JAEdUsluHCSD_eg-H3wtUYosT4y5VF8-IBO8d?gv=true',
//       color: '#039BE5',
//       label: 'Book an appointment',
//       target,
//     });
//   });
// })();
// </script>
// <!-- end Google Calendar Appointment Scheduling --></link>