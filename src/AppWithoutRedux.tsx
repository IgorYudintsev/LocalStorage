import React, {useEffect, useState} from 'react';
import './App.css';

function AppWithoutRedux() {
    const getLocalStorage = () => {
        const countFromLocalStorage = localStorage.getItem('count')
        return countFromLocalStorage ? Number(countFromLocalStorage) : 0
    }

    //TODO: положил в InitialState getLocalStorage т.к.    useEffect(() => {setLocalStorageHandler()}, [count])
    // зачищал локалСторадж при перезагрузке страницы-теперь в InitialState лежит значение из локалСторадж
    const [count, setCount] = useState<number>(getLocalStorage())

    const setLocalStorageHandler = () => {
        localStorage.setItem('count', String(count))
    }

    useEffect(() => {
        setLocalStorageHandler()
    }, [count])

    useEffect(() => {
        getLocalStorage()
    }, [])

    const getLocalStorageHandler = () => {
        getLocalStorage()
    }

    const setCountHandler = () => {
        setCount(count + 1)
        //TODO: если здесь сетать ЛокалСторадж, то будет рассинхрон ЮсСтейта
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('count')
        setCount(0)
    }

    return (
        <div className="App">
            <h3>{count}</h3>
            <button onClick={setCountHandler}>+</button>
            <button onClick={setLocalStorageHandler}>SetLocalStorage</button>
            <button onClick={getLocalStorageHandler}>GetLocalStorage</button>
            <button onClick={removeLocalStorageHandler}>ClearLocalStorage</button>
        </div>
    );
}

export default AppWithoutRedux;
