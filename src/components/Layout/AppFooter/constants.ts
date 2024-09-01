import { AppRoutes } from '@/router/routes'
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const socialNetworkLinks = [
    {
        name: 'Github',
        icon: faGithub,
        link: 'https://github.com/SushiMaster0372/vue-ecommerce-app'
    },
    {
        name: 'Instagram',
        icon: faInstagram,
        link: 'https://instagram.com/'
    },
    {
        name: 'Youtube',
        icon: faYoutube,
        link: 'https://youtube.com/'
    }
]

// todo: add rest links
export const footerMenuLinks = [
    {
        title: 'Support',
        children: [
            {
                title: 'FAQ',
                link: ''
            },
            {
                title: 'Terms of use',
                link: ''
            },
            {
                title: 'Privacy Policy',
                link: ''
            }
        ]
    },
    {
        title: 'Company',
        children: [
            {
                title: 'About us',
                link: AppRoutes.ABOUT_PAGE_URL
            },
            {
                title: 'Contact',
                link: AppRoutes.CONTACT_PAGE_URL
            },
            {
                title: 'Careers',
                link: ''
            }
        ]
    },
    {
        title: 'Shop',
        children: [
            {
                title: 'My Account',
                link: AppRoutes.PROFILE_PAGE_URL
            },
            {
                title: 'Checkout',
                link: ''
            },
            {
                title: 'Cart',
                link: AppRoutes.CART_PAGE_URL
            }
        ]
    }
]
