import React, { Component } from 'react';
import "./Container.less"
class Containter extends Component {
// 一个大的容器组件 没有什么逻辑操作 主要是处理一个遮罩层
  render () {
      const { focus, handleHiddenSide } = this.props;
    return (
      <div className="container">
        {this.props.children}
        {/* 一个遮罩层 用来隐去侧边栏 */}
        {focus ? <div className="topShadow" onClick={handleHiddenSide}>
        </div> : null}
      </div>
    )
  }

}

export default Containter;