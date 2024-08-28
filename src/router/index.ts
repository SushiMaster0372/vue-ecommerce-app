import MainPage from '@/views/MainPage/MainPage.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { AppRoutes } from './routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: AppRoutes.MAIN_PAGE_URL,
            name: 'home',
            component: MainPage
        },
        {
            path: AppRoutes.ABOUT_PAGE_URL,
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutPage.vue')
        },
        {
            path: AppRoutes.CONTACT_PAGE_URL,
            name: 'contacts',
            component: () => import('../views/ContactsPage.vue')
        }
    ]
})

export const HOME_PAGE = '/'

export default router
