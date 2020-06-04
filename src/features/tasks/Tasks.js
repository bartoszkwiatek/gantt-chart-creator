import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setCookieConsent,
    addCategory,
    addTask,
    selectCookieConsent,
    selectCustomCategories,
    selectTasks
} from './tasksSlice';

const Tasks = () => {

    const tasks = useSelector(selectTasks);
    const consent = useSelector(selectCookieConsent)
    const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <React.Fragment>
            Cookies allowed: {consent ? 'yes' : 'no'}
            <button
                //   className={styles.button}
                aria-label="Cookie consent"
                onClick={() => dispatch(setCookieConsent())}
            >
                Accept cookies
            </button>
            <div>
                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <li key={index}>
                                <h1>{task.name}</h1>
                                <h2>Start: {(task.startDate)}</h2>
                                <p>Desc: {(task.description)}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )

}

export { Tasks }