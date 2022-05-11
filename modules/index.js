import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
//import read, { readSaga } from './trip/read'
//import update, { updateSaga } from './trip/update'
import write, { writeSaga } from './trip/write'
//import remove, { removeSaga } from './trip/remove'
import {HYDRATE}  from 'next-redux-wrapper'
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action)
                return {...state, ...action.payload}
            default:
                return state;
        }
    },
    write
    //read, 
    //update, 
    //remove
})
export function* rootSaga(){
    yield all([writeSaga()])
}
export default rootReducer