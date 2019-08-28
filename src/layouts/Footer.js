import React from 'react'
import style from './Footer.module.css'
import {NavLink} from 'react-router-dom'
export default class Footer extends React.Component{
  render(){
    return (
      <div className={style['foot-btn']}>
      <ul>
        <li className={style['home']}>
          <NavLink activeClassName={style['home--active']} to='/home'></NavLink>
        </li>
        <li className={style["write"]}>
        <NavLink activeClassName={style['write--active']} to='/buycar'></NavLink>
        </li>
        <li className={style["my"]}>
        <NavLink activeClassName={style['my--active']} to='/user'></NavLink>
        </li>
      </ul>
    </div>
    )
  }
}