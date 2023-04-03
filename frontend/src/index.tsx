import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom"
import routes from './router.config';

// 单独点名要听着 路由权限
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 这一块 我们要控制 用户的权限 
      if (用户没有登录) return <Login />

      else return <Home 
    
    */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// useRoutes --> 得到元数据 


// router的hooks 
// 注册路由 
