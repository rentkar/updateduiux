import React, {useState, useEffect} from "react";
import { Modal } from "react-bootstrap";
import g1 from "../images/games/game1.jpg";
import g2 from "../images/games/game2.jpg";
import g3 from "../images/games/game3.jpg";
import g4 from "../images/games/game4.jpg";
import g5 from "../images/games/game5.jpg";
import g6 from "../images/games/game6.jpg";
import g7 from "../images/games/game7.jpg";

const itemList = [
  {
    img: g1,
    name: "game 1",
  },
  {
    img: g2,
    name: "game 2",
  },
  {
    img: g3,
    name: "game 3",
  },
  {
    img: g4,
    name: "game 4",
  },
  {
    img: g5,
    name: "game 5",
  },
  {
    img: g6,
    name: "game 6",
  },
  {
    img: g7,
    name: "game 7",
  },
];

function AddGamesModal(props) {
  const [searchGame, setSearchGame] = useState();

  useEffect(() => {
    const game = localStorage.getItem("freeGame");
    props.onGameChange(game);
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="game__modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="title" id="contained-modal-title-vcenter">
          <input
            className="game__inpt"
            placeholder="Search Your Free Game"
            type="text"
            value={searchGame}
            onChange={(e) => setSearchGame(e.target.value)}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="games row">
          {itemList.map((e) => {
            return (
              <div
                className="game"
                onClick={() => {
                  // onSetFreeGame()
                  props.onGameChange(JSON.stringify(e));
                  localStorage.setItem(`freeGame${props.itemNum}`, JSON.stringify(e));
                }}
              >
                <img src={e.img} />
                <p>{e.name}</p>
              </div>
            );
          })}
          {/* <div className="game">
            <img src={g1} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g2} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g3} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g4} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g5} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g6} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g7} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g1} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g2} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g7} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g1} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g2} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g3} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g4} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g5} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g6} />
            <p>Game</p>
          </div>
          <div className="game">
            <img src={g7} />
            <p>Game</p>
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddGamesModal;