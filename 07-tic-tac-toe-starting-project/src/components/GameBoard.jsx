const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

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
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex) => (
                        <li key={cellIndex}>
                            <button  onClick={() => onSelectSquare(rowIndex, cellIndex)}>{playerSymbol}</button>
                            

                        </li>
                    ))}
                </ol>
            </li>
            )        
        )}
    </ol>
    )
}