
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/refferal', component: () => import('../components/refferalAndTsa.vue') },
      { path: '/assesments', component: () => import('../components/assesments.vue') },
      { path: '/treatment', component: () => import('../components/treatment.vue') },
      { path: '/calender', component: () => import('../components/calender.vue') },
      { path: '/Analysis', component: () => import('../components/analysis.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
