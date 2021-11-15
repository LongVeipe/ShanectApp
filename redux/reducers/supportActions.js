import {ACTION_TYPES, BASE_URL} from'../../constants'
import axios from 'axios'
export function showImageModal()
{
    return{
        type: ACTION_TYPES.SHOW_IMAGE_MODAL,
    }
}
export function closeImageModel(){
    return{
        type: ACTION_TYPES.CLOSE_IMAGE_MODAL,
    }
}
export function onScrollY(){
    return{
        type: ACTION_TYPES.ON_SCROLL_Y,
    }
}
export function onClicDetailFilter(){
    return{
        type: ACTION_TYPES.ON_CLICK_DETAIL_FILTER,  
    }
}
export function selectCategory(category){
    return{
        type: ACTION_TYPES.SELECT_CATEGORY,
        payload: {
            selectedCategory: category,
        }
    }
}
export function fetchCategories(){
    return async dispatch => {
        axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: 'categories'
        }).then(res => {
            dispatch({
                type: ACTION_TYPES.FETCH_CATEGORIES,
                payload: {
                    categories: res.data.filter(item=>item.type==1),
                }
            })
        }).catch(err => console.log(err))
    }
}
export function checkSubCategory(id){
    return {
        type: ACTION_TYPES.CHECK_SUBCATEGORY,
        payload: {
            idSubCategory: id,
        }
    }
}