<template>
  <div class="container mx-auto my-28">
    <div class="flex flex-col gap-y-4 md:flex-row md:justify-between items-end">
      <!-- title page -->
      <div class="text-primaryBlack flex flex-col gap-2">
        <h5 class="font-medium text-xs md:text-base">Products</h5>
        <h2 class="text-xl md:text-2xl lg:text-[29px] font-semibold leading-tight mt-3">
          All Products ({{ products.length }})
        </h2>
      </div>

      <!-- search -->
      <SearchInput />
    </div>

    <CategoryBar />

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-10">
      <ProductCard :products="products" />
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/crud/SearchInput.vue'
import ProductCard from '@/components/products/ProductCard.vue'
import CategoryBar from '@/components/category/CategoryBar.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue'

import 'primeicons/primeicons.css'

// reactive state
let products = ref([])

onMounted(() => {
  // get data from api endpoint
  axios
    .get('https://techhaven-admin.vercel.app/api/products')
    .then((result) => {
      products.value = result.data
    })
    .catch((err) => {
      console.log(err.response)
    })

  return {
    products
  }
})
</script>
