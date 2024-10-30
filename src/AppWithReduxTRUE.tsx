import React, {useEffect, useState} from 'react';
import './App.css';

import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {countSelector} from "./selectors/countSelector";
import {clearAC, incrementAC} from "./reducer/counterReducer";
import {getLocalStorage} from "./demons/getLocalStorage";


function AppWithReduxTRUE() {
    const dispatch = useAppDispatch()
    const count = useAppSelector(countSelector)


    // const setLocalStorageHandler = () => {
    //     localStorage.setItem('count', String(count))
    // }

    // useEffect(() => {
    //     setLocalStorageHandler()
    // }, [count])


    // const getLocalStorageHandler = () => {
    //     getLocalStorage()
    // }
    //

    const setCountHandler = () => {
        dispatch(incrementAC())
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('count')
        dispatch(clearAC())
    }



    return (
        <div className="App">
            <h3>{count}</h3>
            <button onClick={setCountHandler}>+</button>
            {/*<button onClick={setLocalStorageHandler}>SetLocalStorage</button>*/}
            {/*<button onClick={getLocalStorageHandler}>GetLocalStorage</button>*/}
            <button onClick={removeLocalStorageHandler}>ClearLocalStorage</button>
        </div>
    );
}

export default AppWithReduxTRUE;

