export const getLocalStorage = () => {
    const countFromLocalStorage = localStorage.getItem('count')
    return countFromLocalStorage ? Number(countFromLocalStorage) : 0
}