import ReactCalendar from "../components/ReactCalendar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const handleclick = () => {
  //Use window.location.href to redirect the user to the specified URL
  window.location.href = 'http://localhost:8000/auth/google';
}

const Calendar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="main-bg">
      <div className="profile-icon" onClick={()=>navigate('/Profile')}>
        <ion-icon name="person" id="profile-ico"></ion-icon>
      </div>
      <ReactCalendar />
      <Footer />
    </div>
  );
};

export default Calendar;
