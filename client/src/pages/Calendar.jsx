import Footer from "../components/Footer";
import ReactCalendar from "../components/ReactCalendar";

const Calendar = () => {
  return (
    <>
      <div className="calender-bg">
        <img
          src="/assets/logos/logocream.png"
          className="milan-top-logo"
          alt="milan-logo"
        />
        <ReactCalendar />
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
