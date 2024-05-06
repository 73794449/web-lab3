import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login page',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register page',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'About page',
    component: AboutView
  },
  {
    path: '/calculator',
    name: 'Calculator page',
    component: CalculatorView,
  },
  {
    path: '/profile',
    name: 'Profile page',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
