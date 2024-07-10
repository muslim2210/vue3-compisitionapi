<template>
  <div class="container mx-auto my-28">
    <div class="flex flex-col gap-y-4 md:flex-row md:justify-between items-end">
      <!-- title page -->
      <div class="lex flex-col gap-2">
        <h5 class="font-medium text-lg md:text-base">Category</h5>
        <h2 class="text-xl md:text-2xl lg:text-[29px] font-semibold leading-tight mt-3 capitalize">
          {{ categoryDetails.title }}
        </h2>
      </div>

      <!-- search -->
      <SearchInput />
    </div>

    <div class="mt-10">
      <RouterLink :to="`/`">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Products
        </button>
      </RouterLink>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-10">
      <ProductCard :products="categoryDetails.products" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'
import ProductCard from '@/components/products/ProductCard.vue'
import CategoryBar from '@/components/category/CategoryBar.vue'
import SearchInput from '@/components/crud/SearchInput.vue'

const $route = useRoute()

// reactive state
let categoryDetails = ref([])

onBeforeRouteUpdate(() => {
  axios
    .get('https://techhaven-admin.vercel.app/api/category/' + $route.params.id)
    .then((result) => {
      categoryDetails.value = result.data
    })
    .catch((err) => {
      console.log(err.response)
    })
})
onMounted(() => {
  console.log('onMounted')
  // get data from api endpoint
  axios
    .get('https://techhaven-admin.vercel.app/api/category/' + $route.params.id)
    .then((result) => {
      categoryDetails.value = result.data
    })
    .catch((err) => {
      console.log(err.response)
    })
})
</script>
