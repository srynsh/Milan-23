import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import SocketContext from "../context/socket";

function Cricket({
  id,
  team1,
  team2,
  score1,
  score2,
  wicket1,
  wicket2,
  over1,
  over2,
}) {
  const socket = useContext(SocketContext);

  const [updatescore1, settupdatescore1] = useState(score1);
  const [updatescore2, settupdatescore2] = useState(score2);
  const [updatewicket1, settupdatewicket1] = useState(wicket1);
  const [updatewicket2, settupdatewicket2] = useState(wicket2);
  const [updateover1, setupdateover1] = useState(over1);
  const [updateover2, setupdateover2] = useState(over2);

  useEffect(() => {
    settupdatescore1(score1);
  }, [score1]);

  useEffect(() => {
    settupdatescore2(score2);
  }, [score2]);

  useEffect(() => {
    settupdatewicket1(wicket1);
  }, [wicket1]);

  useEffect(() => {
    settupdatewicket2(wicket2);
  }, [wicket2]);

  useEffect(() => {
    setupdateover1(over1);
  }, [over1]);

  useEffect(() => {
    setupdateover2(over2);
  }, [over2]);

  const updatescore = async () => {
    socket.emit("update_score", {
      id: id,
      score1: parseInt(updatescore1),
      score2: parseInt(updatescore2),
      wicket1: parseInt(updatewicket1),
      wicket2: parseInt(updatewicket2),
      over1: parseInt(updateover1),
      over2: parseInt(updateover2),
    });
  };
  const removematch = async () => {
    socket.emit("remove_match", {
      id: id,
    });
  };

  return (
    <div className="fhtb">
      <h1>Cricket</h1>
      <button className="rm-match" onClick={removematch}>
        End Match
      </button>
      <div className="fhtb-s">
        <div className="fhtb-sc">
          <h2>{team1}</h2>
          <div className="fhtb-sc-w">
            <input
              type="number"
              value={updatescore1}
              onChange={(e) => {
                settupdatescore1(e.target.value);
              }}
            />{" "}
            /
            <input
              type="number"
              value={updatewicket1}
              onChange={(e) => {
                settupdatewicket1(e.target.value);
              }}
            />
          </div>
          <div className="fhtb-sc-w">
            <input
              type="number"
              value={updateover1}
              onChange={(e) => {
                setupdateover1(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="fhtb-sc">
          <h2>{team2}</h2>
          <div className="fhtb-sc-w">
            <input
              type="number"
              value={updatescore2}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            />
            /
            <input
              type="number"
              value={updatewicket2}
              onChange={(e) => {
                settupdatewicket2(e.target.value);
              }}
            />
          </div>
          <div className="fhtb-sc-w">
            <input
              type="number"
              value={updateover2}
              onChange={(e) => {
                setupdateover2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <button className="up" onClick={updatescore}>
        Submit
      </button>
    </div>
  );
}

export default Cricket;
