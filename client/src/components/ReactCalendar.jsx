import React, { useState } from 'react';
import '../profile & calender.css';

const eventsData = {
  '2023-09-01': [
    { id: 1, title: 'Event 1', body: 'Event 1 description', time: '10:00 AM', category: 'Culti' },
    { id: 2, title: 'Event 2', body: 'Event 2 description', time: '2:00 PM', category: 'Sci-Fi' }
  ],
  '2023-09-15': [
    { id: 3, title: 'Event 3', body: 'Event 3 description', time: '3:30 PM', category: 'Sports' }
  ],
  '2023-10-05': [
    { id: 4, title: 'Event 4', body: 'Event 4 description', time: '11:00 AM', category: 'Culti' }
  ],
  '2023-10-20': [
    { id: 5, title: 'Event 5', body: 'Event 5 description', time: '4:00 PM', category: 'Sci-Fi' },
    { id: 6, title: 'Event 6', body: 'Event 6 description', time: '6:30 PM', category: 'Sports' }
  ],
};

const ReactCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState('September');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = () => {
    setCurrentMonth(currentMonth === 'September' ? 'October' : 'September');
  };

  const renderCalendar = () => {
    const month = currentMonth === 'September' ? 8 : 9;
    const year = 2023;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = [];
    const daysArray = currentMonth === 'September' ? ["Fr", "St", "Su", "Mn", "Tu", "Wd", "Th"] : ["Sn", "Mn", "Tu", "Wd", "Th", "Fr", "St"];
    for(let i=0;i<7;i++){
      calendarDays.push(
        <div
          key={i}
          className="calendar-week-day"
        >
          <div className='week-day'>{daysArray[i]}</div>
        </div>
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      calendarDays.push(
        <div
          key={i+6}
          className={`calendar-day ${selectedDate === date ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <div className="day">{i}</div>
        </div>
      );
    }

    return calendarDays;
  };

  const EventsDialog = ({ selectedDate, events, category }) => {
    return (
      <div className="events-dialog">
        <div className="dialog-header">
          <span>{selectedDate}</span>
          <button onClick={() => setSelectedDate(null)} className="close-button">
            Close
          </button>
        </div>
        <div className="events-list">
          <h3>{`${category} Events:`}</h3>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <h4>{event.title}</h4>
                  <p>{event.body}</p>
                  <p>Time: {event.time}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>{`No ${category} events for this day.`}</p>
          )}
        </div>
      </div>
    );
  };

  const renderEventsDialog = () => {
    if (!selectedDate) return null;
    const events = eventsData[selectedDate] || [];

    // Filter events by category
    const cultiEvents = events.filter(event => event.category === 'Culti');
    const sciFiEvents = events.filter(event => event.category === 'Sci-Fi');
    const sportsEvents = events.filter(event => event.category === 'Sports');

    return (
      <div>
        <EventsDialog selectedDate={selectedDate} events={cultiEvents} category="Culti" />
        <EventsDialog selectedDate={selectedDate} events={sciFiEvents} category="Sci-Fi" />
        <EventsDialog selectedDate={selectedDate} events={sportsEvents} category="Sports" />
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>{currentMonth}</h2>
        <button onClick={handleMonthChange}>Change Month</button>
      </div>
      <div className="calendar">{renderCalendar()}</div>
      {renderEventsDialog()}
    </div>
  );
};

export default ReactCalendar;
