import { useState } from "react";
import CoverflowGallery from "../components/Swiper";
import BlockRace from "../components/BlockRace";
import Footer from "../components/Footer";
import { OverallScores } from "../components/OvrLeaderboard";
import '../mainpage.css'


const Home = () => {
  const [raceGraph, setRaceGraph] = useState(true);
  return (
    <>
      <div className="main">
        <div className="main-bg">
          <div className="main-bg-vector">
            <section className="main-top">
              <div className="main-head">
                <div className="main-head-img">
                  <img src="./assets/logos/logocream.png" />
                </div>
                <div className="main-head-text">
                  <h1>MILAN</h1>
                  <h3>THE GENERAL CHAMPIONSHIP OF IITH</h3>
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
                    "Milan" is the annual techno-cultural-sports General
                    Championship of IIT Hyderabad. It consists of 19 Sports, 18
                    Cultural and 11 technical events conducted between all the
                    hostel blocks. In this second edition of Milan,presented by
                    SBI YONO, the sports, cultural, and technical events will
                    start from 9th September and will conclude on 18th September
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
                ></iframe>
              </div>
            </section>
            <section className="main-mascot">
              <div className="mascot-image">
                <img src="./assets/logos/pablo.png" alt="mascot" />
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
                <p>Overall LeaderBoard</p>
              </div>
              <div className="main-ovr-subhead">
                <div
                  className="main-ovr-subhead1"
                  onClick={() => {
                    setRaceGraph(true);
                  }}
                >
                  <p>LeaderBoard</p>
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
