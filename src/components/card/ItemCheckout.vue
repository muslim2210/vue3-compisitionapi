<template>
  <div class="flex flex-col rounded-lg bg-white sm:flex-row">
    <img
      class="m-2 h-24 w-28 rounded-md border object-cover object-center"
      :src="item.media[0]"
      alt=""
    />
    <div class="flex w-full flex-col px-4 py-4">
      <span class="font-semibold">{{ item.title }}</span>
      <span class="float-right text-gray-400">Qty x {{ item.quantity }}</span>
      <p class="text-lg font-bold">
        Rp. {{ item.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useShoppingStore } from '@/stores'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

//get store
const data = useShoppingStore()

console.log(data.getCartItems)
</script>
