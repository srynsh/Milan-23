import ReactCalendar from "../components/ReactCalendar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  
  const handleClick =()=>{
    window.location.href = 'https://cb84-106-195-71-118.ngrok-free.app/auth/google'; 
  };
  const navigate=useNavigate();
  return (
    <div>
      <div className="profile-icon" onClick={()=>handleClick()}>
        <ion-icon name="person" id="profile-ico"></ion-icon>
      </div>
      <ReactCalendar />
      <Footer />
    </div>
  );
};

export default Calendar;
