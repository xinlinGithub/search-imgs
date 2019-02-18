import { 
    INIT_TITLE,
    FETCHING_IMG,
    FETCH_SUCC_IMG,
    FETCH_ERR_IMG,
    CHANGE_INDEX,
    RENSER_TO_FALSE,
} from "../types/index";

// 操作瀑布流

const galleryReducer = (state={}, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANGE_INDEX:
            newState.startIndex = action.payload.startIndex;
            newState.endIndex = action.payload.endIndex;
            newState.heightArr = [...action.payload.heightArr];
            return newState;
        case RENSER_TO_FALSE:
            newState.need_render = action.payload;
            return newState;
        case INIT_TITLE:
            newState.request_col = action.payload;
            newState.request_pn = 0;
            newState.need_render = false;
            newState.startIndex = 0;
            newState.endIndex = 0;
            newState.img_list = [];
            newState.lastest_list = [];
            newState.totalNum = 0;
            let len = newState.column;
            newState.heightArr = new Array(len).fill(0);
            return newState;
        case FETCHING_IMG:
            newState.isFetching = action.payload;
        case FETCH_ERR_IMG:
            newState.need_render = false;
            return newState;
        case FETCH_SUCC_IMG:
        // 因为有的请求过来的图片为11张 需要截取一下 否则会出现误差
            const imgs = action.payload.imgs.slice(0, newState.request_rn)
            newState.img_list = [].concat(newState.img_list,imgs);
            newState.lastest_list = imgs
            newState.resp = action.payload;
            newState.isFetching = false;
            newState.totalNum = action.payload.imgtotal || action.payload.totalNum;
            newState.need_render = true;
            newState.request_pn = newState.request_rn + newState.request_pn;
            return newState;
        default :
            return newState;
    }
    return newState;
}

export default galleryReducer;