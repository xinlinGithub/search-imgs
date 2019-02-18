import React, { Component } from "react";

class History extends Component {
  state = {
    hover: false
  };
  render() {
    const { item, index, upToInput, deleteOneHistory } = this.props;
    const Li = (
      <li
        key={item + index}
        onMouseEnter={this.addHover}
        onMouseLeave={this.removeHover}
        onClick={() => {
          upToInput(item);
        }}
      >
        {item}
        {this.state.hover ? (
          <span
            className="delete"
            onClick={(e) => {
              deleteOneHistory(e, index);
            }}
          >
            删除
          </span>
        ) : null}
      </li>
    );
    return Li;
  }

  addHover = () => {
    this.setState({
      hover: true
    });
  };
  removeHover = () => {
    this.setState({
      hover: false
    });
  };
}

export default History;
