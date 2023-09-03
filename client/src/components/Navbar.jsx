import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Navbar({ showNav }) {
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="navbar">
      {showNav && <motion.div className="navbar-blur"></motion.div>}
      <motion.div
        animate={{
          width: showNav ? "650px" : "0px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="navbar-options"
      >
        {showNav && (
          <NavLink
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
        )}
        {showNav && (
          <NavLink
            to="/schedule"
            className={({ isActive, isPending }) =>
              isPending
                ? "navbar-pending"
                : isActive
                ? "navbar-active"
                : "navbar-pending"
            }
          >
            SCHEDULE
          </NavLink>
        )}
        {showNav && (
          <NavLink
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
        )}
        {showNav && (
          <NavLink
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
        )}
        {showNav && (
          <NavLink
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
        )}
        {showNav && (
          <NavLink
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
        )}
      </motion.div>
    </div>
  );
}

export default Navbar;
