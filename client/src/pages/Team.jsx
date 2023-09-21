import TeamCoreList from "../components/TeamCoreList";
import Footer from "../components/Footer";
import '../mainpage.css'

const Team = () => {
  return (
    <>
      <div className="team-page">
    <img src='/assets/logos/red logo.png' className="milan-top-logo" alt="milan-logo"/>
        <OCsection />
        <TeamList />
      </div>
      <Footer />
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

const TeamList = () =>
  TeamCoreList.map((item, index) => {
    const heads = item.heads.map((head, index) => {
      return (
        <div className="tp-domain-head-i" key={index}>
          <img className="tp-domain-head-f" src={head} />
          <div className="tp-domain-head-name">
            {head
              .replace("./assets/team/", "")
              .replace(".JPEG", "")
              .replace(".jpg", "")
              .replace(".JPG", "")
              .replace(".jpeg", "")
              .toUpperCase()
              .split(" ")
              .slice(0,2)
              .join(" ")}
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
              .replace(".JPEG", "")
              .replace(".jpg", "")
              .replace(".png", "")
              .replace(".PNG", "")
              .replace(".JPG", "")
              .toUpperCase()
              .split(" ")
              .slice(0,2)
              .join(" ")}
          </div>
        </div>
      );
    });

    return (
      <section className="tp-domain" key={index}>
        <div className="tp-domain-head">
          <div className="tp-domain-name">{item.dom.toUpperCase()}</div>
          <div className="tp-domain-head-h">HEADS</div>
          <div className="tp-domain-head-c">{heads}</div>
        </div>
        <div className="tp-domain-core">
          {/* <div className="tp-domain-name">{item.dom.toUpperCase()}</div> */}
          <div className="tp-domain-core-h">CORES</div>
          <div className="tp-domain-core-i">{cores}</div>
        </div>
      </section>
    );
  });

export default Team;
