import React from 'react'
import './Cell.css'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import querystring from 'query-string'
export default class Cell extends React.Component{
  clickHandler=()=>{
    if(this.props.linkApi){
      // this.props.history.push('/detail/'+this.props.item._id)
      this.props.history.push({
        pathname:`/detail/${this.props.item._id}`,
        search:querystring.stringify({
          dataName:this.props.dataName
        })
      })
    }
  }

  // 给Cell类添加一个noindex属性，如果传了就不显示内容左侧数字，默认不传noindex
  render(){
    let {item,index,dataName} = this.props
    return (
      <div className='Cell'>
        {
          this.props.link ?
          <Link to={`/detail/${item._id}?dataName=${dataName}`}>
            {
              this.props.noindex ? <h2>{item.title}</h2> : <h2>{index+1}.{item.title}</h2>
            }
            <p>{item.des}</p>
          </Link>
          :
          <div onClick={this.clickHandler}>
            {
              this.props.noindex ? <h2>{item.title}</h2> : <h2>{index+1}.{item.title}</h2>
            }
            <p>{item.des}</p>
          </div>
        }
         
          
      </div>
    )
  }

}
Cell.defaultProps={
  noindex:false,
  link:false,
  linkApi:false
}
Cell.propType={
  linkApi:propTypes.bool,
  link:propTypes.bool,
  noindex:propTypes.bool,
  item:propTypes.object.isRequired,
  dataName:propTypes.string
}