<template>
    <RouterLink class="cart__btn" :to="AppRoutes.CART_PAGE_URL">
        <CartIcon />
        <span>Cart</span>
        <div v-if="!!cartItemsLength" class="cart__tag">
            {{ cartItemsLength }}
        </div>
    </RouterLink>
</template>
<script setup lang="ts">
import CartIcon from '@/components/Icons/CartIcon.vue'
import { AppRoutes } from '@/router/routes'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const cartItemsLength = ref(1)
</script>
<style scoped>
.cart__btn {
    display: flex;
    align-items: flex-end;
    gap: 9px;
    position: relative;
}

.cart__btn span {
    font-size: 12px;
    color: #000000;
    font-weight: 500;
    line-height: 20px;
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
