import CategoriesButton from '@/components/CategoriesButton.vue'
import { AppRoutes } from '@/router/routes'

const navItems = [
    { label: 'Home', link: AppRoutes.MAIN_PAGE_URL },
    { label: 'Categories', component: CategoriesButton },
    { label: 'About', link: AppRoutes.ABOUT_PAGE_URL },
    { label: 'Contact', link: AppRoutes.CONTACT_PAGE_URL }
]

export default navItems
