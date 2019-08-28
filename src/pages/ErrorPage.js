import React from 'react'
import './Error.css'
export default class ErrorPage extends React.Component{
  render(){
    return (
     
      <div className="notfoud-container">
        <div className="img-404">
        </div>
        <p className="notfound-p">哎呀迷路了...</p>
        <div className="notfound-reason">
            <p>可能的原因：</p>
            <ul>
                <li>原来的页面不存在了</li>
                <li>我们的服务器被外星人劫持了</li>
            </ul>
        </div>
        <div className="notfound-btn-container">
            <a className="notfound-btn" href="##" onClick={()=>{this.props.history.push('/home')}}>返回首页</a>
        </div>
    </div>
    )
  }
}