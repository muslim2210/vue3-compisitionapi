<template>
  <div className="flex justify-around items-center py-3 gap-5 md:gap-10 border-b max-w-[800px]">
    <!-- image -->
    <div className="shrink-0 aspect-square w-[120px] md:w-[120px]">
      <img :src="item.media[0]" alt="item.title" width="150" height="150" />
    </div>

    <!-- title and price -->
    <div className="flex flex-col gap-2">
      <div className="text-lg md:text-xl font-medium text-black capitalize">
        {{ item.title }}
      </div>
      <div className="text-lg md:text-sm font-medium text-black/55">{{ item.brand }}</div>
      <div className="text-lg md:text-sm font-medium text-black/55">
        Rp. {{ item.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,') }}
      </div>
    </div>

    <!-- quantity -->
    <div className="text-lg md:text-xl font-medium text-black/75 flex gap-5 items-center">
      <i @click="data.incrementQ(item)" class="pi pi-plus-circle cursor-pointer"></i>
      <span class="text-xl">
        {{ item.quantity }}
      </span>
      <i @click="data.decrementQ(item)" class="pi pi-minus-circle cursor-pointer"></i>
    </div>

    <!-- delete item -->
    <div>
      <i
        @click="data.removeFromCart(item)"
        class="pi pi-trash cursor-pointer text-2xl text-red-500"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { useShoppingStore } from '@/stores'
import 'primeicons/primeicons.css'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

//get store
const data = useShoppingStore()
</script>
