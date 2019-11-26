import axios from 'axios'
import { getStore } from "../utils/common";

const base = 'http://cangdu.org:8001'

//获取用户信息
export const getUserInfo = () => {
	return axios.get(`${base}/v1/user`, { user_id: getStore('user_id')})
}

//手机登陆
//params = {code, mobile, validate_token}
export const mobileLogin = params => {
	return axios.post(`${base}/v1/login/app_mobile`, params)
}

//个人中心地址编辑
export const editAddress = user_id => {
	return axios.get(`${base}/v1/users/${user_id}/addresses`)
}

//个人中心搜索地址
//params = {keyword:keyword,type:'nearby'}
export const getSearchAddress = params => {
	return axios.get(`${base}/v1/pois`, params)
}

//删除个人中心地址
export const deletePersonAddress = (userid, addressid) => {
	return axios.delete(`${base}/v1/users/${userid}/addresses/${addressid}`)
}

//账号密码登陆
//params = {username, password, captcha_codes}
export const accountLogin = params => {
	return axios.post(`${base}/v2/login`, params)
}

//退出登陆
export const signOut = () => {
	return axios.get(`${base}/v2/signout`)
}

//修改密码
//params = {username, oldpassword, newpassword, configmpassword, captcha_code}
export const changePassword = params => {
	return axios.post(`${base}/v2/changepassword`, params)
}
