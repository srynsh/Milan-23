import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../mainpage.css";
import { useCookies } from "react-cookie";

function Navbar({ showNav, setShowNav }) {
  const loginStyle = {
    position: "relative",
    top: "-4vh",
    right: "0vh",
    background: "#700035",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: 700,
    fontFamily: "Amboy",
    letterSpacing: "0.03rem",
    fontSize: "1.2rem",
    boxShadow: "2px 4px 10px #888",
    color: "white",
  };

  const [cookies, setCookie, removeCookie] = useCookies();

  const authcookie = cookies.authtoken;

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

  const handleLogin = () => {
    // You can add your login logic here, e.g., making an API call to verify credentials.
    // For this example, we'll simulate a successful login after a button click.
    // use auth call back
    window.location.href = import.meta.env.VITE_BACKEND_URL + "auth/google";
    //setLoggedIn(true);
  };

  const handleLogout = () => {
    removeCookie("authtoken", { path: "/" });
  };
  return (
    <div className={showNav ? "navbar" : "navbar-hide"}>
      <div className="navbar-blur" onClick={() => setShowNav(!showNav)} />
      <div className={showNav ? "navbar-options" : "navbar-options-hide"}>
        {authcookie ? (
          <NavLink onClick={handleLogout} style={loginStyle}>LOGOUT</NavLink>
        ) : (
          <NavLink onClick={handleLogin} style={loginStyle}>LOGIN</NavLink>
        )}
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          HOME
        </NavLink>
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/leaderboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          LEADERBOARD
        </NavLink>
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/livescore"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          LIVE SCORE
        </NavLink>
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/calendar"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          CALENDAR
        </NavLink>
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/sponsors"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          SPONSORS
        </NavLink>
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/team"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          TEAM
        </NavLink>
        <NavLink
          onClick={() => setShowNav(!showNav)}
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
