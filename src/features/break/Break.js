import React, { useContext } from 'react';
import styles from './Break.module.css';
import Context from '../../context/Context';

export function Break() {
    const { breakLength, setBreakLength, timerType, setTime } = useContext(Context);

    const increment = () => {
        if (breakLength < 3600) {
            setBreakLength(length => length + 60);
            if (timerType === 'Break') {
                setTime(time => time + 60);
            }
        }
    }

    const decrement = () => {
        if (breakLength >= 120) {
            setBreakLength(length => length - 60);
            if (timerType === 'Break') {
                setTime(time => time - 60);
            }
        }
    }

    return (
        <div className={styles.container}>
            <h2 id="break-label" className={styles.title}>
                Break Length
            </h2>
            <button
                id="break-decrement"
                className={styles.decrement}
                onClick={decrement}
            > - </button>
            <span id="break-length" className={styles.breakLength}>{breakLength / 60}</span>
            <button
                id="break-increment"
                className={styles.increment}
                onClick={increment}
            > + </button>
        </div>
    );
}