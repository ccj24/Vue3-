import http from '../utils/http.js'
// 定义后台接口
const login = (data) => {
    return http.post("/user/login", data)
}
const getUserList = (data) => {
    return http.get("/user/list", data)
}
const saveUser = (data) => {
    return http.post("/user/save", data)
}
const delUser = (data) => {
    return http.del("/user/delete", data)
}
const getUserDetail = (data) => {
    return http.del("/user/detail", data)
}
// 导出
export default {
    login, getUserList, saveUser, delUser, getUserDetail
}