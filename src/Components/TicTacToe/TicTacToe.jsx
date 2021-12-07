import { useState, useEffect } from "react";
import { Patterns } from "./Patterns";
import Square from "./Square";
import styles from "/src/styles.module.css";
function TicTacToe() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [results, setResults] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);
  //winner
  useEffect(() => {
    if (results.state !== "none") {
      alert(`Game Finished! Winning Player is: ${results.winner}`);
      restartGame();
    }
  }, [results]);
  function chooseSquare(square) {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
  }
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResults({ winner: player, state: "Won" });
      }
    });
  };
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled === true) {
      setResults({ winner: "No One", state: "Tie" });
    }
  };
  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };
  return (
    <>
      <h2>TIC TAC TOE</h2>
      <h3>HAVE SOME FUN!</h3>
      <div className={styles.board}>
        <div className={styles.row}>
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className={styles.row}>
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className={styles.row}>
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
