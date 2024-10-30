//

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('count');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};



export const saveState = (state:number) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('count', serializedState);
    } catch {
        // ignore write errors
    }
};