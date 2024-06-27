import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/AboutSection.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/components/ResumeSection.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/components/SkillsSection.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router