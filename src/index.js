import React from 'react'
import ReactDom from 'react-dom'
import App from './layouts/App'

import './assets/css/base.css'
import './assets/js/font'

import {BrowserRouter,Route} from 'react-router-dom'

import './plugins/axios'

React.Component.baseUrl='http://localhost:3333'

import * as utils from './utils'
// for(let key in utils){
//   React.Component[key]=utils[key]
// }

// let obj={a:1,b:2}   //[a,b]  [1,2]
// let obj=['aa','bb','cc']    //[0,1,2] ['aa','bb','cc']
// let obj='a b c'   //[0,1,2,3,4]  ['a', ,'b', ,'c' ]
// let obj=10  //不能循环数字

// console.log(Object.keys(obj))  //返回数组，[key1,key2]
// console.log(Object.value(obj)) //返回数组,[value1,value2]

Object.keys(utils).forEach(key=>React.Component[key]=utils[key])



// Route包裹APP，让App可以获得路由上下文，方便在App中获取props里面的pathname，以此来判断当前是哪个页面
ReactDom.render(
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  ,
  document.querySelector('#root')
)