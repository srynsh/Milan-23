import ReactCalendar from "../components/ReactCalendar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="profile-icon" onClick={()=> navigate('/profile')}>
        <ion-icon name="person" id="profile-ico"></ion-icon>
      </div>
      <ReactCalendar />
      <Footer />
    </div>
  );
};

export default Calendar;
