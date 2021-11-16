import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import supportReducer from './supportReducer'
import consultReducer from './consultReducer'

let reducers = combineReducers({
    loginReducer,
    registerReducer,
    supportReducer,
    consultReducer,
})

const rootReduce = (state, action) => {
    return reducers(state, action);
}

export default rootReduce;