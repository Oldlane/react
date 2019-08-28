import React from 'react'
import './Home.css'
import Cell from "../components/cell/Cell";

import { Carousel } from 'antd-mobile';

export default class Home extends React.Component{
  // 内部声明式跳转
  state={
    list:[],
    banners:[],
    imgHeight:200
  };

  componentDidMount(){
    Home.axios({
      url:'/api/home',
      params:{_page:1,_limit:5}
    }).then(
      res=>this.setState({list:res.data.data})
    )
  }

  componentWillMount(){
    Home.axios({
      url:'/api/banner',
      params:{_page:1,_limit:3}
    }).then(
      res=>{
        // console.log(res.data.data)
        
        this.setState({banners:res.data.data})}
    )
  }

  clickHandler=(id,dataName,ev)=>{
    this.props.history.push({
      pathname:'/detail/'+id,
      search:'?dataName='+dataName
    })
  }

  render(){
    let {list,banners}=this.state
    return (
      <div className='Home'> 

        <Carousel
          autoplay={true}
          infinite
        >
          {banners.map(item => (
            <a
              key={item._id}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              onClick={this.clickHandler.bind(null,item._id, 'banner')}
            >
              <img
                src={`${Home.baseUrl}${item.banner}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              <div className="home-swiper__item__title">
                <h2>{item.title}</h2>
                <p>{item.sub_title}</p>
              </div>
            </a>
          ))}
        </Carousel>
        
        {
          list.map((item,index)=>{
            return <Cell key={index} link item={item} index={index} dataName='home'/>
          })
        }  

      </div>
    )
  }
}