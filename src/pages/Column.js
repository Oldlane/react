import React from 'react'
import './Column.css'
import Cell from '../components/cell/Cell'
import {Link} from 'react-router-dom'
export default class Column extends React.Component{
  // 外部声明式跳转
  state={
    list:[]
  }

  componentDidMount(){
    Column.axios({
      url:'/api/column',
      params:{_page:1,_limit:8}
    }).then(
      res=>this.setState({list:res.data.data})
    )
  }
  render(){
    let {list} = this.state
    return (
      <div className='Column'> 
        {/* 循环谁就给谁key */}
        {
          list.map((item,index)=>(
            <Link key={item._id} to={`detail/${item._id}?dataName=column`}><Cell noindex item={item} /></Link>
          ))
        }
      </div>
    )
  }
}