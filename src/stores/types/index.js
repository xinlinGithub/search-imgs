
//一些action匹配类型
// 使用es6新型数据结构Symbol 可以创建一个唯一的Symbol类型的数据 里面的参数是他的参数
// 展示侧边栏sidebar
export const SHOW_SIDEBAR = Symbol("SHOW_SIDEBAR");
// 正在请求sidebar数据
export const FETCHING_DATA = Symbol("FETCHING_DATA");
// 请求数据失败
export const FETCH_DATA_ERR = Symbol("FETCH_DATA_ERR");
// 请求数据成功
export const FETCH_DATA_SUCCESS = Symbol("FETCH_DATA_SUCCESS");
// 隐藏侧边栏 通过操作focus
export const HIDDEN_SIDE_BAR = Symbol("HIDDEN_SIDE_BAR");


// galleryAction 用的类型
// 初始化瀑布流数据
export const INIT_TITLE = Symbol("INIT_TITLE");
// 正在请求图片
export const FETCHING_IMG = Symbol("FETCHING_IMG");
// 请求图片成功
export const FETCH_SUCC_IMG = Symbol("FETCH_SUCC_IMG");
// 请求图片失败
export const FETCH_ERR_IMG = Symbol("FETCH_ERR_IMG");
// 改变startindex endindex 和 heightArr的值
export const CHANGE_INDEX = Symbol("CHANGE_INDEX");
// 改变render的值
export const RENSER_TO_FALSE = Symbol("RENSER_TO_FALSE");

    