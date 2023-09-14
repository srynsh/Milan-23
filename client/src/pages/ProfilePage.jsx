import Profile from "../components/Profile";
import "../profile & calender.css";

const ProfilePage = () => {
  return (
    <>
      <div className="main-bg" style={{
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        padding: "25.8vh 0",
      }}>
      <Profile />
      </div>
    </>
  );
};

export default ProfilePage;
