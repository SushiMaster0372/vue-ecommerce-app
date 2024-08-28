<template>
    <div class="discount__box">Get 25% OFF on your first order. <span>Order Now</span></div>
</template>
<style scoped>
.discount__box {
    width: 100%;
    height: 40px;
    background: var(--neutral-black-b900);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-white-w900);
}

.discount__box span {
    text-decoration: underline;
    cursor: pointer;
}

.discount__box span:hover {
    color: var(--semantic-red-r500);
}
</style>
