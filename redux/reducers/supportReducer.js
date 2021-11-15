import {Animated} from 'react-native';
import {ACTION_TYPES, DEFINES} from '../../constants';

let defaultState = {
  isVisibleModal: false,
  scrollY: new Animated.Value(0),
  isVisibleDetailFilter: false,
  categories: [],
  selectedCategory: null,
  checkedSubCategories: [],
};

initCheckedSubCategories = category => {
  return category.subCategory.map((sub, index) => {
    return {
      ...sub,
      id: index,
      checked: false,
    };
  });
};
let supportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_IMAGE_MODAL:
      return {
        ...state,
        isVisibleModal: true,
      };
    case ACTION_TYPES.CLOSE_IMAGE_MODAL:
      return {
        ...state,
        isVisibleModal: false,
      };
    case ACTION_TYPES.ON_SCROLL_Y:
      return {
        ...state,
        isVisibleDetailFilter: false,
      };
    case ACTION_TYPES.ON_CLICK_DETAIL_FILTER:
      return {
        ...state,
        isVisibleDetailFilter: !state.isVisibleDetailFilter,
      };
    case ACTION_TYPES.FETCH_CATEGORIES:
      const newCategories = action.payload.categories;
      return {
        ...state,
        categories: newCategories,
        selectedCategory: newCategories?.length != 0 ? newCategories[0] : null,
        checkedSubCategories: initCheckedSubCategories(newCategories[0])
      };
    case ACTION_TYPES.SELECT_CATEGORY:
      prevCateId = state.selectedCategory._id;
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
        checkedSubCategories:
          action.payload.selectedCategory._id == prevCateId
            ? state.checkedSubCategories
            : initCheckedSubCategories(action.payload.selectedCategory),
      };
    case ACTION_TYPES.CHECK_SUBCATEGORY:
      let newCheckedSubCategories = [...state.checkedSubCategories];
      newCheckedSubCategories[action.payload.idSubCategory].checked = !newCheckedSubCategories[action.payload.idSubCategory].checked
      return{
        ...state,
        checkedSubCategories: newCheckedSubCategories,
      }
    default:
      return state;
  }
};

export default supportReducer;
