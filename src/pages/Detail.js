import React from 'react'
import './Detail.css'
import zan from '../assets/img/zan.png'
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'
import querystring from 'query-string'
export default class Detail extends React.Component{
  state={
    data:{}
  }
  componentDidMount(){
    let id=this.props.match.params.id
    let dataName=querystring.parse(this.props.location.search).dataName
    // console.log(id,dataName)
    Detail.axios({
      url:`/api/${dataName}/${id}`
    }).then(
      res=>{
        // console.log(res.data.data)
        this.setState({data:res.data.data})
      }
    )
  }
  render(){
    let {title,time,detail}=this.state.data
    // if(detail) console.log(`${Detail.baseUrl}${detail.auth_icon}`)
    return (
      <div className="Detail">
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={()=>{this.props.history.go(-1)}}></li>
          </ul>
        </div>
        {
          detail &&
        <div className="content">
          <div className="header clear"><h2><img src={`${Detail.baseUrl}${detail.auth_icon}`} alt=""/></h2><p>{detail.auth}</p></div>
          <div className="cont">
            <h3>{title}</h3>
            <div className="time"><p>{Detail.date(time)} <span><img src={zan} alt=""/></span></p>
            </div>
            {/* dangerouslySetInnerHTML={{__html:detail.content}}解析数据的html格式，类似vue的v-html指令 */}
            <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}></div>
          </div>
        </div>
        }
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}