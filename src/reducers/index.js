// 根据派发出的actions 匹配type执行相关操作

import {combineReducers} from "redux";
import sidebarReducer from './sidebarReducer';
import galleryReducer from "./galleryReducer";
const reducer = combineReducers({
    // 这里的属性名一定要与store中的初始数据对应起来 如果初始数据写到store中 
    // 而不是每个组件的reducer中 store的preloaderState就得是含有若干对象的对象 且属性名与此对应
    sidebarStatus: sidebarReducer,
    galleryStatus: galleryReducer
})

export default reducer;