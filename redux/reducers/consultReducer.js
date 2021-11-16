import { ACTION_TYPES } from "../../constants";
import {Animated} from 'react-native'

let defaultState = {
    scrollY: new Animated.Value(0),
}

let consultReducer = (state = defaultState, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}

export default consultReducer;