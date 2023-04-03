
import userRouter from "./user"
import Koa from "koa"

/**
 * 
 * 把我们所有的路由集合注册一下
 */
export default function (ctx:  Koa<Koa.DefaultState, Koa.DefaultContext>) {
  ctx.use(userRouter)
}

