import React, { Component } from "react";
import "./Waterfull.less";

// 自己的一个辅助展示的函数组件 内部无逻辑操作
// 当重新渲染父级组件时 他会保留以前的布局
const MyImgList = props => {
  const { column, shareURL, objURL,objUrl,shareUrl, req_col, fromPageTitle } = props;
  return (
    <div className="waterfull-img-wrap" style={{ width: 95 / column + "%" }}>
      <img src={shareURL || objURL || shareUrl || objUrl} alt={req_col} />
      <p
        dangerouslySetInnerHTML={{ __html: fromPageTitle }}
        className="img-title"
      />
    </div>
  );
};

class Waterfull extends Component {
  waterfull = React.createRef();
  loader = React.createRef();
  
  componentDidMount() {
    // 挂载之后查看请求的图片是否加载完成
    this.allImgsCompleteLoaded();
  }
  componentWillUnmount() {
    this.waterfull.current.onscroll = null;
    this.loader.current.classList.remove("hidden");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 只要更改props或state都会默认自动重新渲染页面 所以能避免改变就避免改变 防止页面重复刷新
    const { changeRenderStatus } = this.props;
    if (nextProps.need_render) {
      changeRenderStatus();
      return true;
    }
    // 如果返回false实际上他的值已经改变了 只是不去渲染页面
    return false;
  }
  componentDidUpdate() {
    console.log("更新了");
    //  当组件改变props值时 并不会重新挂载 只是更新一下数据 原来渲染好的dom还是不变
    this.allImgsCompleteLoaded();
  }
  render() {
    const { totalNum, img_list, req_col, column } = this.props;
    console.log("我被渲染了");
    return (
      <div className="waterfull-container">
        <h2 className="waterfull-detail">
          为您找到约&nbsp;{totalNum}&nbsp;张有关
          <span>&nbsp;{req_col}&nbsp;</span>的图片
        </h2>
        <div className="waterfull-image" ref={this.waterfull}>
          {/* <div className="outer-wrap"> */}
            {img_list.map((item, index) => (
              <MyImgList
                key={item.fromURL + "" + index}
                {...item}
                req_col={req_col}
                column={column}
              />
            ))}
          {/* </div> */}
        </div>
        <div className="ret-top" onClick={this.backToTop()}>
          ♠
        </div>
        <div className="loader" ref={this.loader}>
          加载中<p className="loader-move">。。。。。。。</p>
        </div>
      </div>
    );
  }

  allImgsCompleteLoaded = () => {
    let imgs_list;
    try{
      imgs_list = this.waterfull.current.getElementsByTagName("img");
    }catch {
      console.log("有问题 1")
    }
    let isLoaded = true,
      timer;
    imgs_list = Array.from(imgs_list);

    timer = setInterval(() => {
      isLoaded = true;
      for (let i = 0; i < imgs_list.length; i++) {
        if (!imgs_list[i].complete) {
          isLoaded = false;
          break;
        }
      }
      if (isLoaded && imgs_list.length > 0) {
        console.log("加载完成");
        imgs_list = [];
        try {
          let wBox = this.waterfull.current.children;
          setTimeout(() => {
            this.layoutImgs(Array.from(wBox));
          }, 300);
          clearInterval(timer);
        } catch {
          console.log("有问题")
        }
      }
    }, 100);
  };

  layoutImgs = imgsBox => {
    // props的引用值在这里可以直接更改 更改后会保存记录 即使重新渲染
    let {
      heightArr,
      column,
      img_list,
      startIndex,
      endIndex,
      handleIndex
    } = this.props;
    // 返回一个最小值 以及最小值索引
    
    endIndex = img_list.length;
    // 只操作刚刚更新的部分  因为其余的布局已经在组件中布局好了 会保存  
    console.log("布局了");
    imgsBox.slice(startIndex, endIndex).forEach((item, index) => {
      let [min, ind] = this.getMinHeight(heightArr);
      item.style.top = min + 20 + "px";
      item.style.left = (100 / column).toFixed(2) * ind + "%";
      min += item.offsetHeight;
      heightArr[ind] = min + 20;
    });
    startIndex = endIndex;
    // 更改之后不会立刻渲染 因为此时的need_render 为false 
    // 只有再次请求图片时 让need_render为true时才一起渲染拿到数据 
    // 通过控制shouldComponentUpdate节省性能

    handleIndex(startIndex, endIndex, heightArr);
    this.waterfull.current.onscroll = this.scroll();
    this.loader.current.classList.add("hidden");
  };
  getMinHeight = heightArr => {
    let min = heightArr[0];
    let ind = 0;
    heightArr.forEach((item, index) => {
      [min, ind] = item < min ? [item, index] : [min, ind];
    });
    return [min, ind];
  };

  scroll = () => {
    // let wait = false;
    return () => {
      const [min, ind] = this.getMinHeight(this.props.heightArr);
      const { getPicData } = this.props;
      if (
        this.waterfull.current.scrollTop +
          this.waterfull.current.offsetHeight >=
        min - 10
      ) {
          console.log("请求新数据");
          getPicData();
          this.waterfull.current.onscroll = null;
          this.loader.current.classList.remove("hidden");
          //通过取消事件防止连续触发事件  也可以用节流处理 
          // setTimeout(() => {
            // wait = false;
          // }, 1000);
        }
    };
  };
  backToTop = () => {
    //   每次都让他在500ms左右的时间回到最顶端 控制速度
    // 而且 在上升期间 不让他再被触发 防止绑定多次timer
    let flag = false;
    // 以闭包的形式返回；
    return () => {
      if (flag) {
        return;
      }
      flag = true;
      let scrollTop = this.waterfull.current.scrollTop;
      let y = Math.round(scrollTop / 100);
      const timer = setInterval(() => {
        scrollTop -= y;
        if (scrollTop <= 0) {
          scrollTop = 0;
          clearInterval(timer);
          flag = false;
        }
        this.waterfull.current.scrollTo(0, scrollTop);
      }, 500 / 100);
    };
  };
}

export default Waterfull;
