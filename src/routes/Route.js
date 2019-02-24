// 进行一些相关的路由配置

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import SideBar from "./../containers/SideBar/SideBar";
import Header from "./../containers/Header/Header";
import Search from "./../components/Search/Search";
import Container from "../containers/Container/Container";
import Gallery from "./../containers/Gallery/Gallery";
class Routes extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <SideBar />
          {/* <Switch> */}
          {/* switch组件必须写到外面 否则在Container内不起作用 但是写在外面也相当于不起作用 */}
          {/* 当使用switch时就不会重复挂载同一个组件 就是说如果多个路径共用同一个组件时 切换路径时就不会重新挂载
            这样会造成一定的问题 使数据无法及时更新成自己想要的 所以在公用组件时要么不用switch而用exact精准匹配
            要么用switch 但把共用的组件 在自己指定的组件中使用 然后在route中用自己在指定的不同组件
           */}
          <Container>
            <Header />
            <Route path="/search" exact component={Search} />
            <Route path="/searchkey" exact component={Gallery} />
            <Route path="/pet" exact component={Gallery} />
            <Route path="/beauty" exact component={Gallery} />
            <Route path="/animation" exact component={Gallery} />
            <Route path="/star" exact component={Gallery} />
            <Route path="/wallpaper" exact component={Gallery} />
            <Redirect to={{ pathname: "/search" }} />
          </Container>
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default Routes;
