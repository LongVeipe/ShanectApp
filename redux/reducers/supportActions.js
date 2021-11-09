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

export function initFilterHeight(height){
    return{
        type: ACTION_TYPES.INIT_FILTER_HEIGHT,
        payload:{
            filterHeight: height,
        }
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