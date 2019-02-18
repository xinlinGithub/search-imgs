// 统一的数据管理仓库

// 引入创建数据仓库工具 和 介入中间件函数去操作异步；
import { createStore, applyMiddleware } from "redux";
// 打印日志
import logger from "redux-logger";
// 中间件使用得辅助模块
// 本来dispatch的只能是对象 他的目的是可以dispatch一个函数 进行异步操作
import thunk from "redux-thunk";
import reducer from "./../reducers/index";

// 初始state状态
const initState = {
  sidebarStatus: {
    focus: false, //默认side隐藏
    data_sort: [] //side里面的列表
  },
  galleryStatus: {
    // 数据获取时的状态
    isFetching: false, //是否正在请求数据
    need_render: false, //是否有新的数据需要渲染
    startIndex: 0, //操作dom 用于截取请求回来的dom 每次只操作请求回来的那一块
    endIndex: 0, //操作dom

    // 瀑布流
    column: 3, // 默认两列
    heightArr: [], //默认两列初始高度 需要在reducer中根据column 制造一个长度一致的数组

    // 请求数据
    resp: {}, //获取数据内容
    totalNum: 0, //获取的数据总数
    return_number: 10, //请求数据后返回的数据总数
    img_list: [], // 请求过来的总图片信息列表
    lastest_list: [], //最近一次请求回来的信息列表
    request_rn: 10, // url一次请求的数据数
    request_pn: 0, //url请求的其实索引
    request_col: "搜索" //url请求参数
  }
};

const store = createStore(reducer, initState, applyMiddleware(thunk, logger));

export default store;
