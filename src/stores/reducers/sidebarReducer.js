
// 引入要使用的类型  操作侧边栏
import { 
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERR,
    SHOW_SIDEBAR,
    HIDDEN_SIDE_BAR
} from "../types/index";
const sidebarReducer = (sidebarStatus = {}, action) => {
    let newState = JSON.parse(JSON.stringify(sidebarStatus));
    switch(action.type) {
        case HIDDEN_SIDE_BAR:
        case SHOW_SIDEBAR: 
            newState.focus = action.payload.focus;
            return newState;
        case FETCHING_DATA:
        case FETCH_DATA_ERR:
            newState.data_sort = action.payload;
            return newState;
        case FETCH_DATA_SUCCESS:
            newState.data_sort = action.payload.data;
            return newState;
    }
    return newState;
}


export default sidebarReducer;

