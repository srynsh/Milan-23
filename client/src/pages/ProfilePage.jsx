import Footer from "../components/Footer";
import Profile from "../components/Profile";
import "../profile & calender.css";

const ProfilePage = () => {
  return (
    <>
    <img src='/assets/logos/logocream.png' className="milan-top-logo" alt="milan-logo"/>
      <div className="calender-bg">
      <Profile />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
