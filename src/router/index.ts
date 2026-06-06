import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Portfolio from '@/pages/Portfolio.vue'
import About from '@/pages/About.vue'
import Assets from '@/pages/Assets.vue'
import Contact from '@/pages/Contact.vue'
import Log from '@/pages/Log.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/portfolio/:id', name: 'PortfolioItem', component: () => import('@/pages/PortfolioItem.vue')},
  { path: '/assets', component: Assets },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  { path: '/log', component: Log }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔥 Add this block — this is the GA page tracking
router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title,
    })
  }
})
