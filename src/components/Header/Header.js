import React, { Component } from "react";
import "./Header.less";
// 标题头组件
class Header extends Component {
  render() {
    const { handleShowSideBar, request_col } = this.props;
    return (
      <div className="header">
        <div className="header-left" onClick={handleShowSideBar}>
        {/* 来写一个菜单Icon */}
          <span />
          <span />
          <span />
        </div>
        <div className="header-mid">{request_col}</div>
      </div>
    );
  }
}

export default Header;
