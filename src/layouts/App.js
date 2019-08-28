import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Loading from '../components/loading/Loding'

import Auth from '../guard/Auth'

import PubSub from 'pubsub-js'

import {Switch,Route,Redirect} from 'react-router-dom'

import {connect} from 'react-redux'

export default class App extends React.Component{
  state={
    bNav:false,
    bFoot:false,
    bLoading:false
  }

  constructor(){
    super()

    // 订阅方
    this.token=PubSub.subscribe('VIEW_LOADING',(msg,data)=>{
      this.setState({bLoading:data})
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)   //取消订阅
  }

  componentWillReceiveProps(nextprops){
    let path=nextprops.location.pathname
    this.checkPath(path)
  }

  componentDidMount(){
    let path=this.props.location.pathname
    this.checkPath(path)
  }

  checkPath=(path)=>{
    
    let {viewFoot,viewNav} = this.props
    if(/home|follow|column|/.test(path)){
      this.setState({bNav:true,bFoot:true})
     
    }
    if(/login|reg|detail/.test(path)){

      this.setState({bNav:false,bFoot:false})
      
    }
    if(/user/.test(path)){
      this.setState({bNav:false,bFoot:true})
      
    }
  }
  
  render(){
    let {bFoot,bLoading,bNav} =this.state
    return (
      <div className='App'>
        {bLoading && <Loading/>}
        {bNav && <Header/>}
        
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Auth path='/user' component={User} />
          <Route path='/follow' component={Follow} />
          <Route path='/column' component={Column} />
          <Route path='/reg' component={Reg} />
          <Route path='/detail/:id' component={Detail} />
          <Route exact path='/' component={Home} />
          {/* <Redirect exact from='/' to='/home' /> */}
          <Route component={ErrorPage} />
        </Switch>



        {bFoot && <Footer/>}
      </div>
    )
  }
}

