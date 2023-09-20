import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import SocketContext from "../context/socket";
import "../admin-page.css";

function Tennis({ id, team1, team2, score1, score2, setscore1, setscore2 }) {
  const [updatescore1, settupdatescore1] = useState(score1);
  const [updatescore2, settupdatescore2] = useState(score2);
  const [updatesetscore1, settupdatesetscore1] = useState(setscore1);
  const [updatesetscore2, settupdatesetscore2] = useState(setscore2);
  const [setindex1, updatesetindex1] = useState(0);
  const [setindex2, updatesetindex2] = useState(0);
  const socket = useContext(SocketContext);

  const setscores = ["0", "15", "30", "40", "Adv", "_"];
  useEffect(() => {
    settupdatescore1(score1);
  }, [score1]);
  useEffect(() => {
    settupdatescore2(score2);
  }, [score2]);
  useEffect(() => {
    settupdatesetscore1(setscore1);
    updatesetindex1(
      setscores.findIndex((score) => {
        score === setscore1;
      })
    );
  }, [setscore1]);
  useEffect(() => {
    settupdatesetscore2(setscore2);
    updatesetindex2(
      setscores.findIndex((score) => {
        score === setscore2;
      })
    );
  }, [setscore2]);

  const updatescore = async () => {
    socket.emit("update_score", {
      id: id,
      score1: updatescore1,
      score2: updatescore2,
      setscore1: updatesetscore1,
      setscore2: updatesetscore2,
    });
  };
  const removematch = async () => {
    socket.emit("remove_match", {
      id: id,
    });
  };

  return (
    <div className="fhtb">
      <h1>TENNIS</h1>
      <button className="rm-match" onClick={removematch}>
        End Match
      </button>
      <div className="fhtb-s">
        <div className="fhtb-sc">
          <h2>{team1}</h2>
          <div className="fhtb-sc-w">
            <button
              onClick={() => {
                settupdatescore1(updatescore1 - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={updatescore1}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            />
            <button
              onClick={() => {
                settupdatescore1(updatescore1 + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="fhtb-sc-w">
            <button
              onClick={() => {
                if (setindex1 < 1) {
                  settupdatesetscore1(setscores[setscores.length - 1]);
                  updatesetindex1(setscores.length - 1);
                } else {
                  settupdatesetscore1(setscores[setindex1 - 1]);
                  updatesetindex1(setindex1 - 1);
                }
              }}
            >
              -
            </button>
            <input
              type="text"
              value={updatesetscore1}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            />
            <button
              onClick={() => {
                if (setindex1 < setscores.length - 1) {
                  settupdatesetscore1(setscores[setindex1 + 1]);
                  updatesetindex1(setindex1 + 1);
                } else {
                  settupdatesetscore1(setscores[0]);
                  updatesetindex1(0);
                }
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="fhtb-sc">
          <h2>{team2}</h2>
          <div className="fhtb-sc-w">
            <button
              onClick={() => {
                settupdatescore2(updatescore2 - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={updatescore2}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            />
            <button
              onClick={() => {
                settupdatescore2(updatescore2 + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="fhtb-sc-w">
            <button
              onClick={() => {
                if (setindex2 < 1) {
                  settupdatesetscore2(setscores[setscores.length - 1]);
                  updatesetindex2(setscores.length - 1);
                } else {
                  settupdatesetscore2(setscores[setindex2 - 1]);
                  updatesetindex2(setindex2 - 1);
                }
              }}
            >
              -
            </button>
            <input
              type="text"
              value={updatesetscore2}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            />
            <button
              onClick={() => {
                if (setindex2 < setscores.length - 1) {
                  settupdatesetscore2(setscores[setindex2 + 1]);
                  updatesetindex2(setindex2 + 1);
                } else {
                  settupdatesetscore2(setscores[0]);
                  updatesetindex2(0);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button className="up" onClick={updatescore}>
        Submit
      </button>
    </div>
  );
}

export default Tennis;
