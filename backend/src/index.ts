
import Koa from "koa"  // es的语法也是可以在服务端被识别 因为ts的存在 es和ts的结合是最好的
import routesInstaller from "./routes"
import bodyParser from "koa-bodyparser"
import KoaCORS from "@koa/cors"

const app = new Koa()

const port: number = 8080

// 也是监听一个请求 只不过当请求来的 时候 他帮你把这个请求体帮你解析出来
// app.use(KoaCORS())

app.use(bodyParser()) 

routesInstaller(app) // 如果是先执行他的话 

app.listen(port, () => {
  // 你派一个人去守门 保安 小区的西门给我守着 
  // 诶我到了 西门 
  console.log("listen success", port)
})


// 跨域问题
