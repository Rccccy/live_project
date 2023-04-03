import { useEffect } from "react"
import { useNavigate, useRoutes, Outlet } from "react-router-dom"
console.log("helloworld")

export default function RouteGuard() {
  // 跟路由
  const navigate = useNavigate()

  // 导航的 

  useEffect(() => {
    // 在这个useEffect里 我们需要判断当前的用户有没有登录
    const isLogin = true
    if (!isLogin) {
      navigate("/login")
    }
  }, [])

  return (
  //  router-view 
    <Outlet />
  )
}