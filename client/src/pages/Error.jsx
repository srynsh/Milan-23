import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <div className="mascot-image">
        <img src="./assets/logos/pablo.jpeg" alt="mascot" />
      </div>
      <div className="error-page-text">
        ERROR 404<br/>
        Return to
        <Link to="/" className="error-page-t-m">
          MILAN
        </Link>
      </div>
    </div>
  );
};

export default Error;
