<template>
  <div class="container mx-auto my-24 py-10">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Data Product From API</h1>
      <RouterLink to="/create">
        <div
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center gap-4"
        >
          <i class="pi pi-plus"></i>
          <p>Create Product</p>
        </div>
      </RouterLink>
    </div>
    <hr class="my-4" />
    <div class="mt-10 shadow-sm">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-8 py-5 text-lg">Product name</th>
              <th scope="col" class="px-8 py-5 text-lg">Variant</th>
              <th scope="col" class="px-8 py-5 text-lg">Category</th>
              <th scope="col" class="px-8 py-5 text-lg">Price</th>
              <th scope="col" class="px-8 py-5 text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(product, index) in products"
              :key="index"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-8 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ product.title }}
              </th>
              <td class="px-8 py-5">{{ product.brand }}</td>
              <td class="px-8 py-5 capitalize">{{ product.category.title }}</td>
              <td class="px-8 py-5">
                Rp. {{ product.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,') }}
              </td>
              <td class="px-8 py-5 flex gap-2 items-center">
                <RouterLink
                  :to="`/edit/${product._id}`"
                  class="font-medium text-white bg-yellow-300 rounded-full py-2 px-3 hover:bg-yellow-300/80 shadow-md"
                >
                  <i class="pi pi-pencil"></i>
                </RouterLink>
                |
                <RouterLink
                  :to="`/delete/${product._id}`"
                  class="font-medium text-white bg-red-500 rounded-full py-2 px-3 hover:bg-red-500/80 shadow-md"
                >
                  <i class="pi pi-trash"></i>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
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
})
</script>
