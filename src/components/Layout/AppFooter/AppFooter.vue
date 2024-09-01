<template>
    <footer class="footer__container">
        <div class="footer">
            <NewsletterForm v-if="!authStore.isLoggedIn" />
            <div class="footer__sections">
                <div class="logo__section">
                    <RouterLink :to="AppRoutes.MAIN_PAGE_URL">
                        <img
                            :src="logoWhite"
                            alt="Logo"
                            width="100"
                            height="55"
                            class="logo__image"
                        />
                    </RouterLink>
                    <span
                        >Onyx is a marketplace where {{ '\n' }} you can find everything that you
                        want.
                    </span>
                    <ul class="social__network__links">
                        <li v-for="item in socialNetworkLinks" :key="item.name">
                            <a :href="item.link" target="_blank">
                                <FontAwesomeIcon class="footer__icon" :icon="item.icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="footer__menu">
                    <li v-for="col in footerMenuLinks" :key="col.title" class="menu__columns">
                        <span class="menu__column__title">{{ col.title }}</span>
                        <ul class="menu__links">
                            <li v-for="menuItem in col.children" :key="menuItem.title">
                                <RouterLink :to="menuItem.link" class="menu__link__item">{{
                                    menuItem.title
                                }}</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="accepted__payments">
                    <span>Accepted Payments</span>
                    <div class="payment__icons">
                        <FontAwesomeIcon
                            class="payment__icon"
                            v-for="(item, index) in [faCcMastercard, faCcVisa, faCcPaypal]"
                            :icon="item"
                            :key="index"
                        />
                    </div>
                </div>
            </div>
            <span class="copyright">© 2024 Onyx. All rights reserved.</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import useAuthStore from '@/stores/auth'
import NewsletterForm from './NewsletterForm.vue'
import logoWhite from '@/assets/logo-white.png'
import { footerMenuLinks, socialNetworkLinks } from './constants'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { AppRoutes } from '@/router/routes'
import { faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()
</script>

<style scoped>
.footer__container {
    background-color: #000000;
    color: var(--neutral-white-w900);
    width: 100%;
    padding: 59px 0 27px;
}

.footer {
    max-width: var(--layout-max-width);
    margin: 0 auto;
    padding: var(--layout-paddings);
}

.footer__sections {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid var(--neutral-white-w100);
    padding-bottom: 104px;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b100);
    margin-bottom: 27px;
}

.logo__section {
    display: flex;
    flex-direction: column;
}

.logo__image {
    margin-bottom: 12px;
}

.logo__section span {
    font-weight: 400;
    white-space: pre-line;
    margin-bottom: 32px;
}

.social__network__links,
.payment__icons {
    display: flex;
    align-items: center;
    gap: 24px;
}

.footer__icon {
    font-size: 22px;
    color: var(--neutral-white-w100);
    transition: all 0.2s ease;
}
.footer__icon:hover {
    fill: var(--semantic-red-r800);
    color: var(--semantic-red-r800);
}

.footer__menu {
    display: flex;
    gap: 72px;
}

.menu__columns,
.accepted__payments {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.menu__column__title,
.accepted__payments span {
    text-transform: uppercase;
}

.menu__links {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.menu__link__item {
    color: inherit;
    transition: color 0.2s ease;
}

.menu__link__item:hover {
    color: var(--semantic-red-r800);
}

.payment__icon {
    font-size: 30px;
    color: var(--neutral-white-w100);
    fill: var(--neutral-white-w100);
}

.copyright {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    display: block;
}
</style>
