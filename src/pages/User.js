import React from 'react'
import './User.css'
export default class User extends React.Component{

  logout=()=>{
    
    User.axios({
      url:'/api/logout',
      method:'delete'
    }).then(
      res=>res.data.err===0 && this.props.history.push('/login')
    )
  }

  render(){
    let {fans,follow,icon,nikename} = this.props.data
    return (
      <div className="User">
      <div className="User--header">
        <h2><img src={`${User.baseUrl}${icon}`} alt=""/></h2>
        <div className="user-box">
          <a >{nikename}</a>
          <a href="##" onClick={this.logout}>注销</a>
        </div>
        <ul className="clear">
          <li>
            <span>{follow}</span>
            <p>关注</p>
          </li>
          <li>
            <span>{fans}</span>
            <p className="end">粉丝</p>
          </li>
        </ul>
      </div>
      <div className="docList">
        <ul>
          <li className="gk-text">
            <i></i>
            <p>公开博文</p>
            <b></b>
            <span>0</span>
          </li>
          <li className="mm-text">
            <i></i>
            <p>秘密博文</p>
            <b></b>
            <span>0</span>
          </li>
          <li className="cg-text">
            <i></i>
            <p>草稿箱</p>
            <b></b>
            <span>0</span>
          </li>
          <li className="sc-text">
            <i></i>
            <p>收藏夹</p>
            <b></b>
            <span>0</span>
          </li>
          <li className="my_cz">
            <i></i>
            <p>收藏夹</p>
          </li>
        </ul>
      </div>
    </div>
    )
  }
}