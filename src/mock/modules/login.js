import { Random } from "mockjs"; // 导出随机函数

function login(req) {
  // req是一个请求对象，包含: url，type和body属性

  const body = JSON.parse(req.body);
  let code = 200;
  let msg = "登录成功";
  let data = {
    username: Random.cname(),
    token: Random.guid(),
    message: "Login successfully.",
  };

  if (body.username !== "admin" || body.password !== "123456") {
    code = 201;
    msg = "账号或密码错误";
    data = {};
  }

  return {
    code,
    data,
    msg,
  };
}

function logout(req) {
  return {
    code: 200,
    data: {
      message: "Logout successfully.",
    },
  };
}

export default {
  login,
  logout
};
