// axios 的二次封装
import ajax from './ajax'

// 获取沸点导航栏数据
export const reqRecommentTopPic = () => ajax.get('/getrecommentTopPic')
// 获取沸点推荐页数据
export const reqRecommented = () => ajax.get('/getrecommented')
// 获取沸点热门页数据
export const reqHot = () => ajax.get('/gethot')

// 获取沸点导航栏topic数据
export const reqTopicList = ({topic_id})=>{
    return ajax.get(`/getToppicList/${topic_id}`)
}
