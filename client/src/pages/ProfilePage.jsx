import Profile from '../components/Profile'
import Footer from '../components/Footer'
import "../profile & calender.css";

const ProfilePage = () => {
  return (
    <div>
      <div className='box'>
        <Profile/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage;
