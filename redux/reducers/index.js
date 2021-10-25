import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'

let reducers = combineReducers({
    loginReducer,
    registerReducer,
})

const rootReduce = (state, action) => {
    return reducers(state, action);
}

export default rootReduce;