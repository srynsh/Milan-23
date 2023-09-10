import Profile from "../components/Profile";
import Footer from "../components/Footer";
import "../profile & calender.css";

const ProfilePage = () => {
  return (
    <div>
      <div className="main-bg profile-bg" style={{
        width: "99vw",
        justifyContent: "center",
        alignItems: "center",
        padding: "15vh 0 12vh 0",
        display:'flex',
      }}>
      <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
