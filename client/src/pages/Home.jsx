import { useState } from "react";
import { NavLink } from "react-router-dom";
import CoverflowGallery from "../components/Swiper";
import BlockRace from "../components/BlockRace";
import Footer from "../components/Footer";
import { OverallScores } from "../components/OvrLeaderboard";
import '../mainpage.css'
import { useCookies } from 'react-cookie';

const Home = () => {
  const [raceGraph, setRaceGraph] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies()

  const authcookie = cookies.authtoken;


  const handleLogin = () => {
    // You can add your login logic here, e.g., making an API call to verify credentials.
    // For this example, we'll simulate a successful login after a button click.
    // use auth call back
    window.location.href = import.meta.env.VITE_BACKEND_URL + 'auth/google';
    //setLoggedIn(true);
  };

  const handleLogout = () => {
    removeCookie('authtoken', { path: '/' });
  }
  return (
    <>
    {/* <img src='/assets/logos/logocream.png' className="milan-top-logo" alt="milan-logo"/> */}
      <div className="main">
        <div className="main-bg">
          <div className="main-bg-vector">
            <section className="main-top">
              <div className="main-head">
                {/* {authcookie ?
                  <NavLink onClick={handleLogout} className={'top-8 sm:right-4 md:right-32 lg:right-64 absolute text-white rounded p-2 text-lg bg-[#390035] hover:shadow-xl transition hover:scale-110 z-10'}>
                    LOGOUT
                  </NavLink> :
                  <NavLink onClick={handleLogin} className={'top-8 sm:right-4 md:right-32 lg:right-64 absolute text-white rounded p-2 text-lg bg-[#390035] hover:shadow-xl transition hover:scale-110 z-10'}>
                    LOGIN
                  </NavLink>} */}
                <div className="main-head-img">
                  <img src="./assets/logos/logocream.png" alt="Official Milan Logo 2023" />
                </div>
                <div className="main-head-text">
                  <h1>MILAN</h1>
                  <h2>THE GENERAL CHAMPIONSHIP OF IITH</h2>
                </div>
              </div>
            </section>
            <section className="main-mid">
              <div className="main-mid-text">
                <div className="main-mid-text-head">
                  <h2>WELCOME TO MILAN</h2>
                  <h2>IIT HYDERABAD</h2>
                </div>
                <div className="main-mid-text-desc">
                  <p>
                    "Milan," the general championship of IIT, consisting of sports, cultural,
                    and sci-tech events, is going to take place from 22nd September to 1st October.
                    It consists of 24 cultural, 13 sports, 12 sci-tech and 4 collaborative club events,
                    making a total of 53 events. There will be 5 trophies, out of which one is the
                    grand Overall Championship crowned to the all-round performers.
                    A high voltage competition between 18 hostels will be witnessed this time.
                    This is the 4th edition of Milan, presented by PureEV.
                  </p>
                </div>
              </div>
              <div className="main-mid-carousel">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/YYgBsC1Ee10?si=dnGQXs66GlHqU5Pz?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
		  loading="lazy"
                ></iframe>
              </div>
            </section>
            <section className="main-mascot">
              <div className="mascot-image">
                <img src="./assets/logos/pablo.png" alt="Pablo Mascot" />
              </div>
              <div className="mascot-desc">
                Introducing our mesmerizing mascot <br />
                <span className="pablo">PABLO</span>
                <br /> the harbinger of luck and boundless excitement! 🎉🐾 Get
                ready to embrace the positive vibes and cheer it brings to every
                corner of our event. From boosting confidence to fostering
                unity, our mascot is here to write add another chapter of
                success and unforgettable memories. For the first time ever in
                Milan, a mascot is becoming a part of our incredible journey.
                Let its presence light up the event with optimism and joy, as we
                embark on this adventure together. Believe in the magic, feel
                the energy, and let the good times roll with our lucky charm by
                your side.🌟 Do watch out for this guy!
              </div>
            </section>
            <section className="main-ovr">
              <div className="main-ovr-head">
                <p>Overall Leaderboard</p>
              </div>
              <div className="main-ovr-subhead">
                <div
                  className="main-ovr-subhead1"
                  onClick={() => {
                    setRaceGraph(true);
                  }}
                >
                  <p>Leaderboard</p>
                </div>
                <div
                  className="main-ovr-subhead1"
                  onClick={() => {
                    setRaceGraph(false);
                  }}
                >
                  <p>Blocks Race</p>
                </div>
              </div>
              <div className="main-ovr-stat">
                {raceGraph ? <OverallScores /> : <BlockRace />}
              </div>
            </section>
            <section className="main-pic">
              <CoverflowGallery />
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
