import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default class Login extends React.Component{
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
    Login.axios({
      url:'/api/login',
      method:'post',
      data:{username:this.state.username,password:this.state.password}
    }).then(
      res=>{
        if(res.data.err===0){
          this.props.history.push('/user')
        }else{
          this.setState({mess:res.data.msg})
        }
      }
    )
  }
  render(){
    let {username,password}=this.state
    return (
      <div className="content">
        <p className="fhbtn"><a href="##" onClick={()=>{this.props.history.goBack()}}></a></p>
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
            <input type="text" name='username' value={username} onChange={this.changeMess}/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" name='password' value={password} onChange={this.changeMess}/>
            <span>密码</span>
          </li>
          <li>{this.state.mess}</li>
        </ul>
        <div className="footbox">
          <input type="button" value="登 录" className="login-btn" onClick={this.send}/>
          <a href="" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
}