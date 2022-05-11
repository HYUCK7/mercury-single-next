import {createAction, handleActions} from 'redux-actions';
import {
    call, delay, put , takeLatest, select} from 'redux-saga/effects'
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization : "JWT fefege..."
}
export const initialState = {
    writeUser: null,
    isWrited: false,
    writeError: null
}
const WRITE_REQUEST = 'trip/WRITE_REQUEST';
const WRITE_SUCCESS = 'trip/WRITE_SUCCESS';
const WRITE_FAILURE = 'trip/WRITE_FAILURE';

export const writeRequest = createAction(WRITE_REQUEST, data => data)

export function* writeSaga(){
    yield takeLatest(WRITE_REQUEST, commenting)
}
function* commenting(action){
    try{
        const response = yield call(writeApi, action.payload)
        const result = response.data
        console.log("server response" + JSON.stringify(result))
        yield put({type: WRITE_SUCCESS, payload: result})
    } catch(error){
        yield put({type: WRITE_FAILURE , payload: error.message})
    }
}
const writeApi = payload => axios.post(
    `${SERVER}/trip/write`, payload, {headers}
)
const write = handleActions({
    [HYDRATE]: (state, action) => ({
    ...state,
    ...action.payload
    }),
    [WRITE_SUCCESS]: (state, action) => ({
        ...state,
        writeUser: action.payload,
        isWrited: true
    }),
    [WRITE_FAILURE]: (state, action) => ({
        ...state,
        writeError: action.payload
    })
}, initialState)
export default write