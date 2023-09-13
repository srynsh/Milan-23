import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Navbar({ showNav, setShowNav }) {
  return (
    <div className={showNav ? "navbar" : "navbar-hide"}>
      <div className="navbar-blur" onClick={()=> setShowNav(!showNav)}/>
      <div className={showNav ? "navbar-options" : "navbar-options-hide"}>
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
          to="/events"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          EVENTS
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
          to="/Profile"
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
