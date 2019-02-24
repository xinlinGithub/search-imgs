

// 这里面都是操作gallery 组件的就是展示瀑布流的组件
import {
    INIT_TITLE,
    FETCHING_IMG,
    FETCH_SUCC_IMG,
    FETCH_ERR_IMG,
    CHANGE_INDEX,
    RENSER_TO_FALSE,
} from "../types/index";

// 进入对应标题的瀑布流之前 先初始化一下
export const initTitle = req_col => {
    return {
        type: INIT_TITLE,
        payload: req_col
    }
}
// 发送请求图片
export const fetchingImgData = () => {
    return {
        type: FETCHING_IMG,
        payload: true
    }
}
// 请求成功
export const fetchSuccImg = json => {
    return {
        type: FETCH_SUCC_IMG,
        payload: json
    }
}
// 请求失败
export const fetchErrImg = err => {
    return {
        type: FETCH_ERR_IMG,
        payload: err
    }
}
// 每次请求图片后只操作请求过来的一部分 原有的图片就不操作了
// startIndex endIndex 方便把刚请求回来的图片截取出来 直接操作这一部分
// heightArr  每次操作图片后都得更新一下每列的高度 方便下次找到最小列
export const changeIndex = (startIndex, endIndex,heightArr) => {
    return {
        type:CHANGE_INDEX,
        payload: {startIndex, endIndex,heightArr}
    }
}
// 改变render 已达到判断是否需要跟新渲染的目的
export const renderToFalse = (flag) => {
    return {
        type: RENSER_TO_FALSE,
        payload: flag
    }
}
// 利用react中间件 可以接受一个函数式的action 去异步请求数据
export const getImgData = url => (dispatch, getState) => {
    dispatch(fetchingImgData(url));
    // 开始请求 异步请求数据时要发送两个dispatch 第一个说明 正在请求数据view重新渲染
    // 第二个请求数据结束 成功或失败
    // 在里面dispatch的一定是一个对象
    return fetch(url)
    .then(resp => resp.json())
    .then(json => dispatch(fetchSuccImg(json)))
    .catch(err => dispatch(fetchErrImg(err)));
}
