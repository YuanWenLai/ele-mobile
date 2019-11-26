import axios from 'axios'
const base = 'http://cangdu.org:8001'

//获取首页默认城市
export const getDefaultCity = params => {
	return axios.get(`${base}/v1/cities`, params)
}

export const getHotCity = params => {
	return axios.get(`${base}/v1/cities`, params)
}

//获取所以选项城市
export const getGroupCity = params => {
	return axios.get(`${base}/v1/cities`, params)
}

//获取当前城市
export const getCurrentCity = number => {
	return axios.get(`${base}/v1/cities`+number)
}

//获取搜索地址
export const searchPlace = params => {
	return axios.get(`${base}/v1/pois`,params)
}

//获取msite页面地址信息
export const getMsiteAddress = geohash => {
	return axios.get(`${base}/v2/pois`+geohash)
}

//获取msite页面食品分类
export const getMsiteTypes = params => {
	return axios.get(`${base}/v2/index_entry`, params)
}

