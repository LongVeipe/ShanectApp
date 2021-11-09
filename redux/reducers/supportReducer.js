import { Animated } from 'react-native';
import {ACTION_TYPES, DEFINES} from '../../constants';

let defaultState = {
  isVisibleModal: false,
  scrollY: new Animated.Value(0),
  filterTrans: 0,
  tabsTrans: 0,
};

let supportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_IMAGE_MODAL:
        return {
            ...state,
            isVisibleModal: true,
        }
    case ACTION_TYPES.CLOSE_IMAGE_MODAL:
        return{
            ...state,
            isVisibleModal: false,
        }
    case ACTION_TYPES.INIT_FILTER_HEIGHT:
        return{
            ...state,
            filterHeight: action.payload.filterHeight,
        }
    case ACTION_TYPES.ON_SCROLL_Y:
        return{
            ...state,
            filterTrans: action.payload.filterTrans,
            tabsTrans: action.payload.tabsTrans,
        }
    default:
        return state
}
};


export default supportReducer;