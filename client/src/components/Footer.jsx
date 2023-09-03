const Footer = () => {
  return (
    <footer>
      <div className="footer-img">
        <img src="./assets/logos/red logo.png" />
      </div>
      <div className="footer-links">
        <div className="footer-links-location">
          <h3>LOCATED AT</h3>
          <p>Indian Institute of Technology Hyderabad</p>
          <p>Near NH-65, Sangareddy, Kandi</p>
          <p>Telangana 502285</p>
        </div>
        <div className="footer-links-contact">
          <h3>CONTACT US</h3>
          <p>Phone:</p>
          <a href="tel:+919946525172">(+91) 9946525172</a>
          <p>Email us at:</p>
          <a href="mailto:milan.oc@gymkhana.iith.ac.in">
            milan.oc@gymkhana.iith.ac.in
          </a>
        </div>
        <div className="footer-links-follow">
          <h3>FOLLOW US</h3>
          <div className="footer-links-follow-icons">
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
