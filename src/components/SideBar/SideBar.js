import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.less";
// 侧边栏组件
import userImg from "../../image/user.jpeg";
class SideBar extends Component {
  state = {
    focus: false,
    sideList: ["宠物", "美景", "明星"]
  };
  componentDidMount() {
    const p = this.props;
    p.getSideData();
  }
  render() {
    const { focus, dataSort, handleHiddenSidebar } = this.props;
    const Nav = //因为中间会有无关的dispatch发送action 产生无关的数据 所以 先判断一下 做一次错误防护
      typeof dataSort === "object" && dataSort.length > 0
        ? dataSort.map((item, index) => (
            <li className="side-item" key={item.col + index}>
              <NavLink
                // key={item.col + index}
                onClick={handleHiddenSidebar}
                to={{
                  pathname: item.subUrl,
                  state: { req_col: item.col, req_title: item.col }
                }}
              >
                {item.col}
              </NavLink>
            </li>
          ))
        : null;
        
    return (
      <div className={focus ? "side-wrap" : "side-wrap side-wrap-hidden"}>
        <div className="side-user">
          <div className="user-img">
            <img src={userImg} alt="头像" />
          </div>
          <h2 className="user-name">
            <span>用户名：</span>任你搜索
          </h2>
        </div>
        <ul className="side-menu">
          <h2>搜索列表</h2>
          <li className="side-item">
            <NavLink
              onClick={handleHiddenSidebar}
              // 只有匹配到了才会有这个样式 否则没有的 不显示
              to={{
                pathname: "/search",
                state: { req_col: "搜索", req_title: "搜索" }
              }}
            >
              搜索
            </NavLink>
          </li>
          {Nav}
        </ul>
      </div>
    );
  }
}

export default SideBar;
