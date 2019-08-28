import React from 'react'
import './Follow.css'
import Cell from '../components/cell/Cell'
export default class Follow extends React.Component{
  // 内部编程式跳转
  state={
    list:[]
  }

  componentDidMount(){
    Follow.axios({
      url:'/api/follow',
      params:{_page:1,_limit:8}
    }).then(
      res=>{
        // console.log(res.data)
        this.setState({list:res.data.data})
      }
    )
  }
  render(){
    let {list} = this.state
    return (
      <div className='Follow'> 
        {
          list.map((item,index)=>(
            <Cell linkApi item={item} key={index} history={this.props.history} dataName='follow' index={index}/>
          ))
        }
      </div>
    )
  }
}