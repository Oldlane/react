import React from 'react'
import './Reg.css'
import { Link } from 'react-router-dom'
export default class Reg extends React.Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:'',
      mess:''
    }
  }

  changeMess=(ev)=>{
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  send=()=>{
    let formData = new FormData() 
    formData.append('username',this.state.username)
    formData.append('password',this.state.password)
    formData.append('icon',this.refs.f1.files[0])
    Reg.axios({
      url:'/api/reg',
      method:'post',
      data:formData
    }).then(
      res=>res.data.err===0 ? this.props.history.push('/login') : this.setState({mess:res.data.msg})
    )
  }
  render(){
    let {username,password} = this.state
    return (
      <div className="content">
        <p className="fhbtn"><a href="##" onClick={()=>{this.props.history.go(-1)}}></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to='/login'>登录</Link>
            <span></span>
            <Link to='/reg'>注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" name='username' value={username} onChange={this.changeMess} />
            <span>帐号</span>
          </li>
          <li>
            <input type="text" name='password' value={password} onChange={this.changeMess} />
            <span>密码</span>
          </li>
          <li>
            <input type="file" ref='f1' />
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="注 册" className="login-btn" onClick={this.send} />
          <a href="" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
}