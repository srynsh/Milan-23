import { useRef, useState, useEffect } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TeamHeadList from "../components/TeamHeadList";
import TeamCoreList from "../components/TeamCoreList";

const Team = () => {
  // FOR WINDOW SIZE
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      {windowSize[0] > 1200 ? (
        <div className="team-page">
          {/* {showNav ? (
            <>
              <div className="close-btn" onClick={() => setShowNav(false)}>
                <div className="close-line-1"></div>
                <div className="close-line-2"></div>
              </div>
              <Navbar />
            </>
          ) : (
            <div className="hamburger" onClick={() => setShowNav(true)}>
              <div className="ham-rec1"></div>
              <div className="ham-rec1"></div>
              <div className="ham-rec1"></div>
            </div>
          )} */}
          <>
            <OCsection />
            <TeamListDivDesktop />
            {/* <DomainsDesktop /> */}
          </>
        </div>
      ) : (
        <div className="team-page">
          {/* {showNav ? (
            <>
              <div className="close-btn" onClick={() => setShowNav(false)}>
                <div className="close-line-1"></div>
                <div className="close-line-2"></div>
              </div>
              <Navbar />
            </>
          ) : (
            <div className="hamburger" onClick={() => setShowNav(true)}>
              <div className="ham-rec1"></div>
              <div className="ham-rec1"></div>
              <div className="ham-rec1"></div>
            </div>
          )} */}
          <OCsection />
          {/* <DomainsMobile2 /> */}
          {teamListDivMobile}
        </div>
      )}
    </>
  );
};

const OCsection = () => {
  return (
    <section className="tp-oc">
      <div className="tp-logo">
        <img src="./assets/logos/red logo.png" />
      </div>
      <div className="tp-oc-head">OVERALL COORDINATOR</div>
      <div className="tp-oc-img">
        <img
          src="./assets/team/OC_uwu - Milan Overall Coordinator.jpeg"
          className="tp-oc-img-f"
        />
      </div>
      <div className="tp-oc-name">SAI HARISH MADIREDDI</div>
    </section>
  );
};

const DomainsDesktop = () => {
  // FRAMER MOTION
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["0%", "0%", "-47%", "-47%"]
  );

  return (
    <div className="tp-domain-space" ref={targetRef}>
      <section className="tp-domain">
        <motion.div style={{ x }} className="tp-domain-warp">
          <div className="tp-domain-head">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-head-h">HEAD</div>
            <div className="tp-domain-head-w">
              <div className="tp-domain-head-i">
                <div className="tp-domain-head-f"></div>
                <div className="tp-domain-head-name">ADHEENA S</div>
              </div>
            </div>
          </div>
          <div className="tp-domain-core">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-core-h">CORES</div>
            <div className="tp-domain-core-i">
              <div className="tp-domain-core-i-c">
                <img
                  src="./assets/team/Adhith T.jpg"
                  className="tp-domain-core-i-c-f"
                ></img>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const DomainsMobile = () => {
  return (
    <div className="tp-domain-space">
      <section className="tp-domain">
        <div className="tp-domain-warp">
          <div className="tp-domain-head">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-head-h">HEADS</div>
            <div className="tp-domain-head-i">
              <div className="tp-domain-head-f"></div>
              <div className="tp-domain-head-name">ADHEENA S</div>
            </div>
          </div>
          <div className="tp-domain-core">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-core-h">CORES</div>
            <div className="tp-domain-core-i">
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

const teamListDivMobile = TeamCoreList.map((item, index) => {
  const heads = item.heads.map((head, index) => {
    return (
      <div className="tp-domain-head-i" key={index}>
        <img className="tp-domain-head-f" src={head} />
        <div className="tp-domain-head-name">
          {head
            .replace("./assets/team/", "")
            .replace(".jpg", "")
            .replace(".JPG", "")
            .replace(".jpeg", "")
            .toUpperCase()}
        </div>
      </div>
    );
  });

  const cores = item.cores.map((core, index) => {
    return (
      <div className="tp-domain-core-i-c" key={index}>
        <img className="tp-domain-core-i-c-f" src={core} />
        <div className="tp-domain-core-i-c-name">
          {core
            .replace("./assets/team/", "")
            .replace(".jpeg", "")
            .replace(".jpg", "")
            .replace(".JPG", "")
            .toUpperCase()}
        </div>
      </div>
    );
  });

  return (
    <section className="tp-domain">
      <div className="tp-domain-head">
        <div className="tp-domain-name">{item.dom.toUpperCase()}</div>
        <div className="tp-domain-head-h">HEADS</div>
        {heads}
      </div>
      <div className="tp-domain-core">
        {/* <div className="tp-domain-name">{item.dom.toUpperCase()}</div> */}
        <div className="tp-domain-core-h">CORES</div>
        <div className="tp-domain-core-i">{cores}</div>
      </div>
    </section>
  );
});

const TeamListDivDesktop = () => {
  return TeamCoreList.map((item, index) => {
    const heads = item.heads.map((head, index) => {
      return (
        <div className="tp-domain-head-i" key={index}>
          <img className="tp-domain-head-f" src={head} />
          <div className="tp-domain-head-name">
            {head
              .replace("./assets/team/", "")
              .replace(".jpeg", "")
              .replace(".jpg", "")
              .toUpperCase()}
          </div>
        </div>
      );
    });

    const cores = item.cores.map((core, index) => {
      return (
        <div className="tp-domain-core-i-c" key={index}>
          <img className="tp-domain-core-i-c-f" src={core} />
          <div className="tp-domain-core-i-c-name">
            {core
              .replace("./assets/team/", "")
              .replace(".jpeg", "")
              .replace(".jpg", "")
              .toUpperCase()}
          </div>
        </div>
      );
    });

    return (
      <DomainsDesktop2
        heads={heads}
        cores={cores}
        dom={item.dom.toUpperCase()}
      />
    );
  });
};

const DomainsDesktop2 = (props) => {
  // FRAMER MOTION
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["0%", "0%", "-47%", "-47%"]
  );

  return (
    <div className="tp-domain-space" ref={targetRef}>
      <section className="tp-domain">
        <motion.div style={{ x }} className="tp-domain-warp">
          <div className="tp-domain-head">
            <div className="tp-domain-name">{props.dom}</div>
            <div className="tp-domain-head-h">HEAD</div>
            <div className="tp-domain-head-w">{props.heads}</div>
          </div>
          <div className="tp-domain-core">
            <div className="tp-domain-name">{props.dom}</div>
            <div className="tp-domain-core-h">CORES</div>
            <div className="tp-domain-core-i">{props.cores}</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
