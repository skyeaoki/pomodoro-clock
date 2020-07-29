import React, { useState, useEffect, useContext } from 'react';
import styles from './Timer.module.css';
import Context from '../../context/Context';

export function Timer() {
    const {
        breakLength, setBreakLength,
        sessionLength, setSessionLength,
        time, setTime,
        timerType, setTimerType
    } = useContext(Context);
    const [ticking, setTicking] = useState(false);
    const minutes = ('0' + Math.floor(time / 60)).slice(-2);
    const seconds = ('0' + time % 60).slice(-2);

    // Start timer
    useEffect(() => {
        if (ticking) {
            const tick = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
            return () => {
                clearInterval(tick);
            };
        }
    }, [ticking, setTime]);

    // Switch timer type( break / session )
    useEffect(() => {
        if (time === 0) {
            document.getElementById("beep").play();
            // Switch timer type
            setTimerType(type => type === 'Session' ? 'Break' : 'Session');
            // Switch time
            setTime(timerType === 'Session' ? breakLength : sessionLength);
        }
    }, [time, setTimerType, timerType, breakLength, sessionLength, setTime]);

    // Toggle timer on/off
    const onStartStop = () => {
        setTicking(ticking => !ticking);
    };

    // Reset timer
    const reset = () => {
        const beep = document.getElementById("beep");
        beep.pause();
        beep.currentTime = 0;
        setTicking(false);
        setTime(1500);
        setTimerType('Session');
        setSessionLength(1500);
        setBreakLength(300);
    };

    return (
        <div className={styles.container}>
            <h2 id="timer-label" className={styles.timerLabel}>{timerType}</h2>
            <button
                id="start_stop"
                className={styles.startStop}
                onClick={onStartStop}>
                Start/ Stop
            </button>
            <button
                id="reset"
                className={styles.reset}
                onClick={reset}>
                Reset
            </button>
            <audio id="beep">
                <source src="beep.mp3" />
            </audio>
            <p id="time-left" className={styles.timeLeft}>{minutes}:{seconds}</p>
        </div>
    );
}