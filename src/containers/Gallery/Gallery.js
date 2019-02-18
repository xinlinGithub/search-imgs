
import Gallery from './../../components/Gallery/Gallery';
import { fetchingDataSort } from '../../actions/index';
import { connect } from 'react-redux';
import {
    initTitle,
    getImgData,
    changeIndex,
    renderToFalse,
    // changeLayout
} from "../../actions/galleryAction"
const mapStateToProps = state => {
    return {
        req_col: state.galleryStatus.request_col,//搜索关键词
        request_rn: state.galleryStatus.request_rn,//每次搜索总数
        request_pn: state.galleryStatus.request_pn,//每次搜索的起始索引
        img_list: state.galleryStatus.img_list,// 每次请求的图片列表
        resp: state.galleryStatus.resp,// 请求的原数据内容
        isFetching: state.galleryStatus.isFetching,// 是否正在获取数据
        totalNum: state.galleryStatus.totalNum,//搜索关键词拿到的数据总数
        column: state.galleryStatus.column,//瀑布流的列数
        heightArr: state.galleryStatus.heightArr,//每列的高度
        need_render: state.galleryStatus.need_render,//是否需要渲染
        startIndex: state.galleryStatus.startIndex,
        endIndex: state.galleryStatus.endIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleTitle: (req_col) => {
            dispatch(initTitle(req_col))
        },
        fetchImgData: url => {
            dispatch(getImgData(url))
        },
        handleIndex: (startIndex, endIndex,heightArr) => {
            dispatch(changeIndex(startIndex, endIndex,heightArr))
        },
        changeRenderStatus: () => {
            dispatch(renderToFalse(false))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);