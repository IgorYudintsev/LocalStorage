import {getLocalStorage} from "../demons/getLocalStorage";

// const initialState: number = getLocalStorage()
const initialState: number = 0
//TODO: с подключением preloadedState в store в initialState кладем 0 и все норм работает
export const counterReducer = (state = initialState, action: counterReducerACTypes):number => {
    switch (action.type) {
        case 'INCREMENT':{
            return state+1
        }
        case 'CLEAR':{
            return 0
        }

        default: return  state
    }
}


type counterReducerACTypes= IncrementACType | clearACACType
type  IncrementACType=ReturnType<typeof incrementAC>
export const incrementAC=()=>{
    return{
        type: 'INCREMENT'
    }as const
}

type  clearACACType=ReturnType<typeof clearAC>
export const clearAC=()=>{
    return{
        type: 'CLEAR'
    }as const
}