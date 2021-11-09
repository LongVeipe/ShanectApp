import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import supportReducer from './supportReducer'

let reducers = combineReducers({
    loginReducer,
    registerReducer,
    supportReducer,
})

const rootReduce = (state, action) => {
    return reducers(state, action);
}

export default rootReduce;