import {combineReducers} from 'redux'
import loginReducer from './loginReducer'

let reducers = combineReducers({
    loginReducer,
})

const rootReduce = (state, action) => {
    return reducers(state, action);
}

export default rootReduce;