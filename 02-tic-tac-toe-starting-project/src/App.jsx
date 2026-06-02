import { useState } from "react";

import Players from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  'X' : "Player 1",
  'O' : "Player 2"
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];  
    const thirdSquare =  gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare];
      break;
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {  
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }
  return gameBoard;
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const currentActivePlayer = deriveActivePlayer(prevGameTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentActivePlayer
        },
        ...prevGameTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [playerSymbol]: newName
      }
    })
  };

  return (
     <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Players initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
            <Players initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        { (winner || hasDraw ) && <GameOver winner={winner} hasDraw={hasDraw} player={players[winner]} onRematch={handleRematch}/> }
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          board={gameBoard} 
        />
      </div>
      <Log turns={gameTurns}/>
     </main>
  )
}
export default App
