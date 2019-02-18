import React, { Component } from "react";
import "./Search.less";
import History from "./History/History";
// 单独把历史记录这一块拆分成一个组件 便于操作
// props.location中有一个key是每个路由对应页面的标志 路由不同key不同 同一个页面key不变

// 不需要用connect去连接数据管理库 因为用不到里面的数据 都是自己内部的一些逻辑操作

class Search extends Component {
  // 创建一个获取dom元素的名称 非受控组件
  inpCon = React.createRef();
  state = {
    focus: true,
    history_list: [],
    storageName: "search"
  };
  componentDidMount() {
    const { storageName } = this.state;
    const storage = localStorage.getItem(storageName);
    if(storage === "" || storage === null){
      localStorage.setItem(storageName, "[]");
    }else {
      this.setState({history_list: JSON.parse(storage)});
    }
    this.inpCon.current.focus();
  }
  render() {
    return (
      //如果点击的是历史记录列表 就不让input框blur
      <div className="search" onClick={this.selectTarget}>
        <div className="search-content">
          <div className="search-box">
            <input
              onKeyDown={this.handleKeyDown}
              onFocus={this.changeFocus}
              onChange={this.handleChange}
              ref={this.inpCon}
              type="text"
              className="search-inp"
            />
            {/* 点击跳转到瀑布流页面 */}
            <span onClick={this.handleSubmit} className="search-button">
              图片搜索
            </span>
          </div>
          {/* 这是搜索框负责展示历史记录的那一部分 */}
          {this.state.focus && this.state.history_list.length > 0 ? (
            <ul className="history">
              {this.state.history_list.map((item, index) => (
                <History key={item+index} deleteOneHistory={this.deleteOneHistory} upToInput={this.upToInput} item={item} index={index}/>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
  handleKeyDown = (e) => {
    const event = window.event || e;
    if(event.keyCode=== 13) {
      this.handleSubmit();
    }
  }
  setLocalStorage = () => {
    const { storageName, history_list} = this.state;
    localStorage.setItem(storageName, JSON.stringify(history_list))
  }
  deleteOneHistory = (e, index) => {
    // 取消事件冒泡 防止触发父级
    e.stopPropagation();
    let history_list = this.state.history_list;
    history_list.splice(index, 1);
    this.setState({ history_list, focus: true });
    this.setLocalStorage();
  };
    //   如果点击区域不是历史记录区 就让他隐藏 否则就让他展示
  selectTarget = e => {
    const classname = e.target.className;
    if (classname === "search" || classname === "search-button") {
      this.changeBlur();
    }
  };
  changeFocus = () => {
    this.setState({
      focus: true
    });
  };
  changeBlur = () => {
    this.setState({
      focus: false
    });
  };
  // 点击搜索 提交数据
  handleSubmit = () => {
    const value = this.inpCon.current.value;
    const h_list = this.state.history_list;
    if (value === "") {
      return;
    }
    // 内容已经在历史中存在则直接跳转即可
    if(h_list.includes(value)){
      this.jumpToWaterfull(value);
      return;
    }
    // 使用异步 当更改完state后再 存储到本地
    new Promise((resolve,reject) => {
      this.setState({
        history_list: [value, ...h_list]
      });
      resolve(value);
    }).then((value) => {
      // 因为下一步要用到state值 所以必须等他更改完才能用
      this.setLocalStorage();
      this.jumpToWaterfull(value);
    })
  };
  // 点击搜索后跳转页面
  jumpToWaterfull = (value) => {
    this.props.history.push({pathname: "/searchkey", search: value, state: {req_col:value, req_title: value}});
  }  
  upToInput = item => {
    this.inpCon.current.value = item;
  };
}

export default Search;
