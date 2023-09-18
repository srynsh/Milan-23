import { Link } from "react-router-dom";
import "../mainpage.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-img">
        <img src="./assets/logos/red logo.png" alt="Milan Logo" />
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
          <a href="tel:+918985947355">(+91) 8985947355</a>
          <p>Email us at:</p>
          <a href="mailto:milan.oc@gymkhana.iith.ac.in">
            milan.oc@gymkhana.iith.ac.in
          </a>
        </div>
        <div className="footer-links-follow">
          <h3>FOLLOW US</h3>
          <div className="footer-links-follow-icons">
            <a href="https://www.instagram.com/milan.iithyd/">
              <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
              <span class="sr-only">Visit Milan on Instagram</span>
            </a>
            <a href="https://youtube.com/@milanthegc?si=YGpf-L4UPb0oVJam">
              <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>
              <span class="sr-only">Visit Milan on YouTube</span>
            </a>
            <a href="https://www.linkedin.com/company/milanthegc/">
              <ion-icon name="logo-linkedin" aria-hidden="true"></ion-icon>
              <span class="sr-only">Visit Milan on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
