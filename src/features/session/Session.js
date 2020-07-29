import React, { useContext } from 'react';
import styles from './Session.module.css';
import Context from '../../context/Context';

export function Session() {
    const { sessionLength, setSessionLength, timerType, setTime } = useContext(Context);

    const increment = () => {
        if (sessionLength < 3600) {
            setSessionLength(length => length + 60);
            if (timerType === 'Session') {
                setTime(time => time + 60);
            }
        }
    }

    const decrement = () => {
        if (sessionLength >= 120) {
            setSessionLength(length => length - 60);
            if (timerType === 'Session') {
                setTime(time => time - 60);
            }
        }
    }

    return (
        <div className={styles.container}>
            <h2 id="session-label" className={styles.title}>
                Session Length
            </h2>
            <button
                id="session-decrement"
                className={styles.decrement}
                onClick={decrement}
            > - </button>
            <span id="session-length" className={styles.sessionLength}>{sessionLength / 60}</span>
            <button
                id="session-increment"
                className={styles.increment}
                onClick={increment}
            > + </button>
        </div>
    );
}