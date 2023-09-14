import { useEffect, useState } from "react";
import Loading from "./loading";
import axios from "axios";
import "../profile & calender.css";

const ReactCalendar = () => {
  // Constants
  // State variables
  const [User, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
    supportedTeams: [],
    events: [],
  });
  const [loading, setLoading] = useState(false);
  const [transformedEventData, setTransformedEventData] = useState({});
  const [filteredEvents, setFilteredEvents] = useState({});
  const [currentMonth, setCurrentMonth] = useState("SEPTEMBER");
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch user profile
  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "profile", {
        withCredentials: true,
      })
      .then((response) => {
        const userData = response.data.user;
        setUser({
          avatar: userData.avatar_url,
          name: userData.display_name,
          email: userData.email,
          supportedTeams: userData.supportedTeams,
          events: userData.preferedEvents,
        });
      })
      .catch((error) => {
        console.error("Error fetching user details: ", error);
      });

    // Set 'valid' variable to true if user has already selected events and teams
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  // Fetch event data
  useEffect(() => {
    fetch("./eventsSchedule.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setTransformedEventData(data);
        console.log(transformedEventData);
      })
      .catch((error) => {
        console.error("Error fetching or parsing JSON:", error);
      });
  }, []);

  //filtering the Events Based on user selections
  useEffect(() => {
    const selectedTeams = User.supportedTeams;
    const selectedEvents = User.events;
    const updatedFilteredEvents = {};

    Object.keys(transformedEventData).forEach((date) => {
      const eventsOnDate = transformedEventData[date];
      const filteredDateEvents = eventsOnDate.filter((event) => {
        const teamsInBody = event.body.split(',').map((team) => team.trim());
        const isTeamSelected = selectedTeams.some((selectedTeam) =>
          teamsInBody.includes(selectedTeam)
        );
        const isEventSelected = selectedEvents.includes(event.title);

        return isTeamSelected && isEventSelected;
      });

      if (filteredDateEvents.length > 0) {
        updatedFilteredEvents[date] = filteredDateEvents;
      }
    });

    // Update the state with the filtered events
    setFilteredEvents(updatedFilteredEvents);
    console.log(updatedFilteredEvents);
  }, [User.supportedTeams, User.events, transformedEventData]);

  // Handle date click
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Handle month change
  const handleMonthChange = () => {
    setCurrentMonth(currentMonth === "SEPTEMBER" ? "OCTOBER" : "SEPTEMBER");
  };

  // Render calendar
  const renderCalendar = () => {
    const month = currentMonth === "SEPTEMBER" ? 8 : 9;
    const year = 2023;
    const calendarDays = [];
    const DAYS_IN_MONTH = new Date(year, month + 1, 0).getDate();
    const daysArray =
      currentMonth === "SEPTEMBER"
        ? ["Fr", "St", "Su", "Mn", "Tu", "Wd", "Th"]
        : ["Sn", "Mn", "Tu", "Wd", "Th", "Fr", "St"];

    // Render day headers
    for (let i = 0; i < 7; i++) {
      calendarDays.push(
        <div key={i} className="calendar-week-day">
          <div className="week-day">{daysArray[i]}</div>
        </div>
      );
    }

    // Render calendar days
    for (let i = 1; i <= DAYS_IN_MONTH; i++) {
      const formattedDate = `${(month + 1).toString().padStart(2, "0")}/${i
        .toString()
        .padStart(2, "0")}/${year}`;
      calendarDays.push(
        <div
          key={i + 36}
          className={`calendar-day ${
            selectedDate === formattedDate ? "selected" : ""
          }`}
          onClick={() => handleDateClick(formattedDate)}
        >
          <div className="day">{i}</div>
        </div>
      );
    }

    return calendarDays;
  };

  // Render events dialog
  const renderEventsDialog = () => {
    if (!selectedDate) return null;
    const events = transformedEventData[selectedDate] || [];
    const categories = [...new Set(events.map((event) => event.category))];

    return (
      <div>
        {categories.map((category) => (
          <EventsDialog
            key={category}
            selectedDate={selectedDate}
            events={events.filter((event) => event.category === category)}
            category={category}
          />
        ))}
      </div>
    );
  };

  // Events dialog component
  const EventsDialog = ({ selectedDate, events, category }) => {
    return (
      <div className="events-dialog">
        <div className="dialog-header">
          <span>{selectedDate}</span>
          <button
            onClick={() => setSelectedDate(null)}
            className="close-button"
          >
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

  // Render calendar container
  return (
    <div className="calendar-dov">
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{currentMonth}</h2>
          <button onClick={handleMonthChange}>{"<next/prev>"}</button>
        </div>
        <div className="calendar">{renderCalendar()}</div>
        {renderEventsDialog()}
      </div>
    </div>
  );
};

export default ReactCalendar;
