 //index.js
 // 引入: mockjs 模块;
 import Mock from 'mockjs'
 // 设置拦截Ajax请求的响应时间，模拟网络延迟
 Mock.setup({
     timeout:'200-600'
 })
 Mock.mock('/api/users/login', {
     code: "0",
     data: {}
   })
 export default Mock