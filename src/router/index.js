exports.PageRouters = [
  // { path: '/', component: '../layouts/MainLayout' },
  { path: '/', component: '../layouts/UserLayout' },
  {
    path: "/main",
    component: '../layouts/MainLayout',
    routes: [
      { path: '/main/cards/:id', component: '../pages/MainCards' },
      { path: '/main/bar/:id', component: '../pages/MainBar' },
      { path: '/main/pie/:id', component: '../pages/MainPie' },
      { path: '/main/gauge/:id', component: '../pages/MainGauge' },
      { path: '/main/line/:id', component: '../pages/MainLine' },
      { path: '/main/table/:id', component: '../pages/MainTable' },
      { path: '/main/simple/:id', component: '../pages/MainSimple' },
      { path: '/main/lineStack/:id', component: '../pages/MainLineStack' },
      { path: '/main/source/:id', component: '../pages/Mainsource' }
    ]
  }
]
