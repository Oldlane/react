import React from 'react'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'
export default class Header extends React.Component{
  render(){
    return (
      <div className={style["nav"]}>
      <ul>
        <li><NavLink to='/home' activeClassName='{style["active"]}'>首页</NavLink></li>
        <li><NavLink to='/follow' activeClassName='{style["active"]}'>关注</NavLink></li>
        <li><NavLink to='/column' activeClassName='{style["active"]}'>栏目</NavLink></li>
        
      </ul>
    </div>
    )
  }
}