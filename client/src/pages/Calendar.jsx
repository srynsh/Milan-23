import ReactCalendar from "../components/ReactCalendar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// const handleclick = () => {
//   //Use window.location.href to redirect the user to the specified URL
//   window.location.href = import.meta.env.VITE_BACKEND_URL+'/auth/google';
// }

const Calendar = () => {
   const navigate = useNavigate();
  return (
    <div className="calender-bg">
      {/* <div className="profile-icon" onClick={handleclick}>
        <ion-icon name="person" id="profile-ico"></ion-icon>
      </div> */}
      <ReactCalendar />
    </div>
  );
};

export default Calendar;
