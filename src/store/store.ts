import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "../reducer/counterReducer";
import {loadState, saveState} from "../utilsForLocalStorage/utilsForLocalStorage";

const rootReducer = combineReducers({
    counter: counterReducer, //TODO: counter здесь и в preloadedState
})




const preloadedState = loadState();
export const store = createStore(rootReducer, preloadedState ? { counter: preloadedState } : undefined)

store.subscribe(()=>{
    saveState(store.getState().counter)
  })


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// @ts-ignore
window.store = store

//--------------------------------------------------------

// import {combineReducers, legacy_createStore as createStore} from "redux";
// import {counterReducer} from "../reducer/counterReducer";
//
// const rootReducer = combineReducers({
//     counter: counterReducer, //TODO: counter здесь и в preloadedState
// })
//
//
// let preloadedState
// const persistedTodosString = localStorage.getItem('count')
// if (persistedTodosString) {
//     preloadedState = {
//         counter: JSON.parse(persistedTodosString) //TODO: counter здесь и в preloadedState
//     }
// }
//
//
// export const store = createStore(
//     rootReducer,
//     preloadedState
// )
//
// store.subscribe(()=>{
//     localStorage.setItem('count', String(store.getState().counter))
// })
//
//
// export type AppStore = typeof store
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
//
// // @ts-ignore
// window.store = store

//--------------------------------------------------------
// import {combineReducers, legacy_createStore as createStore} from "redux";
// import {counterReducer} from "../reducer/counterReducer";
//
// const rootReducer = combineReducers({
//     counter: counterReducer,
// })
//
//
// export const store = createStore(rootReducer)
//
// export type AppStore = typeof store
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = AppStore['dispatch']
//
// // @ts-ignore
// window.store = store