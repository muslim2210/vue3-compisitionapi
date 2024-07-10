<template>
  <div
    className="transform overflow-hidden bg-white duration-200 hover:scale-105 flex flex-col gap-1"
    v-for="product in products"
  >
    <RouterLink to="/products/id">
      <div className="border border-slate-200 shadow-md">
        <img
          :src="product.media[0]"
          className="h-[180px] md:h-[250px] lg:h-[300px] md:w-[350px] bg-white"
        />
      </div>
    </RouterLink>
    <div class="flex justify-between items-end">
      <!-- title -->
      <div className="py-4 px-2 flex flex-col gap-2">
        <h2 className="text-sm md:text-xl font-medium text-primaryBlack">{{ product.title }}</h2>
        <span class="text-sm capitalize text-gray-500">{{ product.brand }}</span>

        <p className="mr-2 text-sm text-gray-500 font-semibold">
          Rp. {{ product.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,') }}
        </p>
      </div>

      <!-- button -->
      <button
        @click="data.addToCart(product)"
        className="py-2 px-4 flex items-center bg-blue-600 rounded-md hover:bg-blue-600/80"
      >
        <i className="pi pi-shopping-cart text-white"></i>
        <span className="ml-2 text-white">Add to cart</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import { defineProps } from 'vue'

import { useShoppingStore } from '@/stores'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

//get store
const data = useShoppingStore()

console.log(data.cartItems)
</script>
