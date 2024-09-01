<template>
    <div class="cat__btn__container">
        <button class="categories__button" @click="onOpen">
            <span class="categories__button__text">Categories</span>
            <FontAwesomeIcon
                :icon="faAngleDown"
                class="icon"
                :rotation="isShow ? 180 : undefined"
                fixed-width
            />
        </button>
        <CustomDropDownList v-if="isShow" position="bottom-left" :closeDropDown="onClose">
            <CategoriesList :closeDropDown="onClose" />
        </CustomDropDownList>
    </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import useShow from '@/composable/useShow'
import CustomDropDownList from '../../UI/CustomDropDownList.vue'
import CategoriesList from '@/components/CategoriesList.vue'
import useCategoriesStore from '@/stores/categories'
import { onMounted } from 'vue'

const { isShow, onClose, onOpen } = useShow()

const categoriesStore = useCategoriesStore()

onMounted(() => {
    categoriesStore.getCategories()
})
</script>
<style scoped>
.cat__btn__container {
    position: relative;
}
.categories__button {
    font-weight: 500;
    font-size: 16px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon {
    transition: transform 0.4s ease;
}

.categories__button:hover .categories__button__text,
.categories__button:hover .icon {
    color: var(--semantic-red-r800);
}
</style>
