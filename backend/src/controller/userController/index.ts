// 写业务逻辑  导出一个一个的函数
import { UserLoginParams } from "./types"

export const login = async function(userLoginInfo: UserLoginParams) {
  console.log("userLoginInfo", userLoginInfo)

  // 1. 从数据库的用户表里把用户读出来 把我们的用户信息 传递给model层 然后model层交给
  // 数据库: Select matchUser from user where username == "xxx" and password === "xxx"
  // 下节课处理
  return new Promise((resolve) => {
    setTimeout(() => {
      // 
      const user = null
      resolve(user)
    }, 2000)
  })
}