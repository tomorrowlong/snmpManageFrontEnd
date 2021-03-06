import Vue from 'vue'
import Router from 'vue-router'
// @是/src的别名，但是我还没找到在哪个文件中定义的
import Welcome from '@/pages/Welcome'
import Monitor from '@/pages/Monitor'
import Interface from '@/pages/Interface'
import RoutingTable from '@/pages/RoutingTable'
import System from '@/pages/System'
import Trap from '@/pages/Trap'
import Login from '@/pages/Login'

Vue.use(Router)

// 路由路径配置，主要是path和component的对应
export default new Router({
  // 加了这个就不会出现地址栏多/#
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/devList',
      name: 'Monitor',
      component: Monitor
    },
    {
      path: '/interface',
      name: 'Interface',
      component: Interface
    },
    {
      path: '/routingTable',
      name: 'RoutingTable',
      component: RoutingTable
    },
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/trap',
      name: 'Trap',
      component: Trap
    }
  ]
})
