<template>
    <RouterLink class="cart__btn" :to="AppRoutes.CART_PAGE_URL">
        <FontAwesomeIcon :icon="faShoppingBag" class="bag__icon" />
        <div v-if="!!cartStore.cartItems.length" class="cart__tag">
            {{ cartStore.cartItems.length }}
        </div>
    </RouterLink>
</template>
<script setup lang="ts">
import { AppRoutes } from '@/router/routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from 'vue-router'
import useCartStore from '@/stores/cart/cart'
import { watch } from 'vue'
import useAuthStore from '@/stores/auth'

const cartStore = useCartStore()
const authStore = useAuthStore()

watch(
    () => authStore.isLoggedIn,
    () => {
        if (authStore.isLoggedIn) cartStore.getCartItems()
    }
)
</script>
<style scoped>
.cart__btn {
    display: flex;
    align-items: flex-end;
    gap: 9px;
    position: relative;
}

.bag__icon {
    font-size: 22px;
    color: var(--neutral-black-b700);
}

.cart__tag {
    position: absolute;
    top: -6px;
    left: 10px;
    width: 16px;
    height: 16px;
    background-color: #f93c00;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
}
</style>
