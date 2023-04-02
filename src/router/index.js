import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../components/login/login.vue'
import HomeView from '../views/HomeView.vue'
import generalFooter from "../components/footerfoolder/generalfooter.vue"

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
 
    component: loginPage
  },
  
  {
    path: '/footer',
    name: 'generalFooter',
 
    component: generalFooter
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
