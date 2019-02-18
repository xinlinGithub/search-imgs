import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Routes from "./routes/Route";
import store from "./stores/index";
import "./index.css";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  window.root
);

// 返回值类型
// data:
// abs
// :
// "刘亦菲 (21).jpg"
// album_di
// album_obj_num
// :
// "0"
// app_id
// can_album_id
// children_vote
// collect_num
// :
// 0
// colum
// :
// "明星"
// date
// :
// "2016-10-25"
// desc
// :
// "刘亦菲 (21).jpg"
// desc_info
// dislike_num
// download_num
// :
// 0
// download_url
// :
// "http://h.hiphotos.baidu.com/image/pic/item/0df431adcbef7609a4842f9e2cdda3cc7cd99e20.jpg"
// dress_buy_link
// dress_discount
// dress_extend_name
// dress_extend_type
// dress_id
// dress_num
// dress_other
// dress_price
// dress_tag
// fashion_id
// from_name
// :
// 0
// from_url
// :
// "http://xiangce.baidu.com/picture/detail/cf9439d8d0ed07bc26e6b384826c7ade7e0f5e85"
// fushi_obj_array
// :
// "null"
// fushi_obj_num
// hostname
// :
// "xiangce.baidu.com"
// id
// :
// "9420649199"
// image_height
// :
// 500
// image_url
// :
// "http://h.hiphotos.baidu.com/image/pic/item/0df431adcbef7609a4842f9e2cdda3cc7cd99e20.jpg"
// image_width
// :
// 329
// isAdapted
// :
// 1
// is_album
// :
// 0
// is_single
// is_vip
// :
// 0
// like_num
// obj_url
// :
// "http://d.hiphotos.baidu.com/album/s%3D1600%3Bq%3D90/sign=112af898b80e7bec27da07e71f1e8249/42a98226cffc1e17a2a960a64a90f603738de917.jpg"
// other_urls
// :
// []
// parent_tag
// photo_id
// :
// "9420649199"
// pn
// :
// 0
// return_number
// :
// 5
// setId
// :
// "-1"
// share_url
// :
// "http://h.hiphotos.baidu.com/image/s%3D550%3Bc%3Dwantu%2C8%2C95/sign=bb55b5e02d2eb938e86d7af7e559e608/0df431adcbef7609a4842f9e2cdda3cc7cd99e20.jpg?referer=0f4c1a14be315c601a825fdfdafe"
// site_logo
// site_name
// site_url
// :
// "http://xiangce.baidu.com"
// start_index
// :
// 0
// tag
// :
// "全部"
// tags
// :
// ["刘亦菲"]
// thumb_large_height
// :
// 471
// thumb_large_url
// :
// "http://imgt7.bdstatic.com/it/u=2,830714607&fm=19&gp=0.jpg"
// thumb_large_width
// :
// 310
// thumbnail_height
// :
// 349
// thumbnail_url
// :
// "http://imgt6.bdstatic.com/it/u=2,830714607&fm=25&gp=0.jpg"
// thumbnail_width
// :
// 230
// user_id
// :
// "854767340"
// // return_number:5
// // start_index:0
// // tag1:"明星"
// // tag:"全部"
// // totalNum:18461
