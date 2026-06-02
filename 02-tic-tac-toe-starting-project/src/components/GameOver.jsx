export default function GameOver( {winner, hasDraw, player, onRematch}) {

    return <div id="game-over">
        <h2>Game Over</h2> 
        {hasDraw ? <p>Draw</p> : <p>{player} wins!</p>}
        <p><button onClick={onRematch}>Rematch!</button></p>
    </div>
}