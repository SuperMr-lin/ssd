exports.PageRouters = [
  // { path: '/', component: '../layouts/MainLayout' },
  { path: '/', component: '../layouts/UserLayout' },
  {
    path: "/main",
    component: '../layouts/MainLayout',
    routes: [
      { path: '/main/echarts/:id', component: '../pages/MainEcharts' },
      { path: '/main/cards/:id', component: '../pages/MainCards' },
      { path: '/main/gauge/:id', component: '../pages/MainGauge' }
    ]
  }
]
