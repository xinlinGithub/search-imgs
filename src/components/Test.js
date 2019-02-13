import React, { Component } from 'react';
import "./test.less"
class Test extends Component {
  state={
    list: [1,2,3]
  }
  render () {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e,2)}>点击我</button>
        {
          this.state.list.map((item, index) => (
            <li key={item+index}>{item}</li>
          ))
        }
      </div>
    )
  }
  handleClick = (e,num) => {
    console.log(e.target);
    console.log(num)
  }

}

export default Test;