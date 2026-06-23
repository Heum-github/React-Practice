import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge( { title, targetTime } ) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    const timerRef = useRef();
    const dialog = useRef();

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        dialog.current.open();
    }

    function handleStart() {
        timerRef.current = setInterval(() => {
            setTimeRemaining((prev) => prev - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timerRef.current);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            {timerIsActive && <p>Time's up! </p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : "" }
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
                {timerIsActive ? "Time is running" : "Timer inactive"}
            </p>
        </section>
    </>
    );
}
