import * as types from './types'
export default (state,{type,payload})=>{
  switch(type){
    case types.VIEW_NAV :
      // return 拷贝+更新+返回
      return {...state,bNav:payload};
    case types.VIEW_FOOT :
      return {...state,bFoot:payload};
    case types.VIEW_LOADING :
      return {...state,bLoading:payload};
    case types.UPDATE_HOME :
      return {...state,home:payload};  
    case types.UPDATE_FOLLOW :
      return {...state,follow:payload};
    case types.UPDATE_BANNER :
      return {...state,banner:payload};
    case types.UPDATE_COLUMN :
      return {...state,column:payload};
    case types.UPDATE_USER:
      return {...state,user:payload};  
    case types.UPDATE_DETAIL:
      return {...state,detail:payload};   
    default:
      return state  
  }
}