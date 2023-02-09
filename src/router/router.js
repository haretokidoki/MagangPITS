import createApp from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'
import DocumentPage from '../views/DocumentPage'
import LoginPage from '../views/LoginPage'

createApp.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/document',
      name: 'document',
      component: DocumentPage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
      }
  ]
})
