import { useEffect } from 'react';

const GoogleCalendarScheduling = () => {
  useEffect(() => {
    const loadCalendar = () => {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0CffoEFaHob2InTR33G5tstHCYBReVqFnezYniv6Ud16MOHla2nYV0FIN1osN_uHkuTGvM6f_d?gv=true',
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
