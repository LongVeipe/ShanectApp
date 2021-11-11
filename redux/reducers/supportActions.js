import {ACTION_TYPES} from'../../constants'

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
export function onScrollY(filterTrans, tabsTrans){
    return{
        type: ACTION_TYPES.ON_SCROLL_Y,
        payload:{
            filterTrans: filterTrans,
            tabsTrans: tabsTrans
        }
    }
}
export function onClicDetailFilter(){
    return{
        type: ACTION_TYPES.ON_CLICK_DETAIL_FILTER,  
    }
}