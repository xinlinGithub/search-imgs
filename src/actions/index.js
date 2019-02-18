import { 
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERR,
    SHOW_SIDEBAR,
    HIDDEN_SIDE_BAR
} from "../types/index";
// 这里面是操作侧边栏的


// 操作数据的时候用 需要despatch出去 
// 里面是一些工具函数返回一个具有type属性的对象
// 引入中间件后 可以返回成函数的形式 有两个参数despatch,getState

// 显示侧边栏
export const showSideBar = () => {
    return {
        type: SHOW_SIDEBAR,
        payload: {focus: true}
    }
}

// 请求侧边栏的数据 请求的地址sort.json是自己写的模拟数据 在public文件夹中
export const fetchingDataSort = (url) => {
    return {
        type: FETCHING_DATA,
        payload: url
    }
}
// 请求成功
export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}
// 请求失败
export const fatchDataErr = (err) => {
    return {
        type: FETCH_DATA_ERR,
        payload: err
    }
}
// 隐藏侧边栏
export const hiddenSideBar = () => {
    return {
        type: HIDDEN_SIDE_BAR,
        payload: false
    }
}
// 异步请求数据
export const getDataSort = (url) => (dispatch, getState) => {
    dispatch(fetchingDataSort(url));
    return fetch(url)
        .then(resp => resp.json())//resp.json()会自动返回一个promise对象 可以.then .catch
        .then(json => dispatch(fetchDataSuccess(json)))
        .catch(err => dispatch(fatchDataErr(err)))
}
