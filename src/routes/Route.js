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
          <Switch>
          {/* switch组件必须写到外面 否则在Container内不起作用 */}
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
