import React, { Component } from "react";
import "./Gallery.less";
import Waterfull from "./../Waterfull/Waterfull";

// 加载img图片时内部自带一个complete属性 可以看他有没有加载完成 
// 返回true 或false; 只有都加载完成后才渲染到页面 此时才可以监听scroll事件
// 当再次请求更多数据时 取消scroll事件 防止多次触发

// 仅仅是获取数据 更新主题 其他的事交给waterfull组件去做
class Gallery extends Component {
  waterfull = React.createRef();
  componentDidMount() {
    const { req_col } = this.props.location.state;
      this.handleInitTitle(req_col);
      this.getPicData(req_col);
  }
  render() {
    const { req_col } = this.props.location.state;
    const {
      img_list,
      totalNum,
      heightArr,
      column,
      request_pn,
      request_rn,
      need_render,
      isFetching,
      startIndex,
      endIndex,
      handleIndex,
      changeRenderStatus,
    } = this.props;
    return (
      <div className="watefull-wrap">
        {typeof img_list === "object" && img_list.length > 0 && isFetching === false ? (
          <Waterfull
            img_list={img_list}
            totalNum={totalNum}
            heightArr={heightArr}
            column={column}
            startIndex={startIndex}
            endIndex={endIndex}
            need_render={need_render}
            req_col={req_col}
            getPicData={this.getPicData}
            handleIndex={handleIndex}
            changeRenderStatus={changeRenderStatus}
          />
        ) : null}
      </div>
    );
  }
  shouldComponentUpdate (nextProps, nextState) {
    // 做一步拦截 显示瀑布流的组件时 再点击其他组件比如菜单 有可能改变store里面的数据
    // 恰好在这个组件中也用到 就会进行一次重复更新 这是无用的 并且有害的 这是就不让他更新
    // 只有请求图片后才让他更新渲染
    if(nextProps.need_render || nextProps.req_col !== this.props.req_col) {
      return true;
    }
    return false;
  }

  handleInitTitle = req_col => {
    // 每次重新进入这个主要组件时 都重新初始化一下数据 防止不同请求之间数据影响
    const { handleTitle } = this.props;
    handleTitle(req_col);
  };
  getPicData = () => {
    // const searchText = this.props.match.params.search;
    const searchText = this.props.location.search;
    const word = this.props.location.state.req_col;
    const { fetchImgData, request_pn, request_rn, req_col } = this.props;
    let url;
    if (typeof searchText === "string" && searchText.length > 0) {
      url = `/search/avatarjson?tn=resultjsonavatarnew&ie=utf-8&word=${word} &pn=${request_pn}&rn=${request_rn}`;
    } else {
      url = `/data/imgs?col=${word}&tag=全部&sort=1&pn=${request_pn}&rn=${request_rn}&p=channel&from=1`;
    }
    fetchImgData(url);
  };
}

export default Gallery;
