import Mock from "mockjs";
// 引入模板函数类
import login from "./modules/login";

const { mock } = Mock; // Mock函数
window.alert('sss');
// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
mock("/api/users/login", "post", login.login);