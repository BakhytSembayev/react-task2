import React, { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
   
    const [steps, setSteps] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

  
    const handleNext = () => {
        if (activeIndex < steps.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRestart = () => {
        setActiveIndex(0);
    };

   
    const isFirstStep = activeIndex === 0;
    const isLastStep = activeIndex === steps.length - 1;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles['steps-content']}>
                        
                        {steps[activeIndex].content}
                    </div>
                    <ul className={styles['steps-list']}>
                        
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`${styles['steps-item']} ${index === activeIndex ? styles.active : ''} ${index < activeIndex ? styles.done : ''}`}
                            >
                                <button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>{index + 1}</button>
                                {step.title}
                            </li>
                        ))}
                    </ul>
                    <div className={styles['buttons-container']}>
                        
                        <button className={styles.button} onClick={handlePrev} disabled={isFirstStep}>Назад</button>
                       
                        <button className={styles.button} onClick={isLastStep ? handleRestart : handleNext}>
                            {isLastStep ? 'Начать сначала' : 'Далее'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
