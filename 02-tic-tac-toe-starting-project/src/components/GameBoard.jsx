export default function GameBoard({ onSelectSquare, board }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayer;
    //         return updatedGameBoard;
    //     });
        
    //     onSelectSquare();
    // }


    return ( <ol id="game-board">
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex) => (
                        <li key={cellIndex}>
                            <button  onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>
            )        
        )}
    </ol>
    )
}