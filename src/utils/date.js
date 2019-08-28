import fillzero from './fillzero'

export default (time)=>{
  let d = new Date()
  d.setTime(time)  //获取传进来的时间，不获取就显示当前时间
  let year=d.getFullYear()
  let month=d.getMonth()+1
  let date=d.getDate()
  let hour=d.getHours()
  let min=d.getMinutes()
  let sec=d.getSeconds()

  return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
}