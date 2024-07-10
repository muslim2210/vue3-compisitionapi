<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700 mt-10">
    <ul
      class="flex flex-wrap flex-row -mb-px text-sm font-medium text-center gap-3"
      id="default-tab"
      data-tabs-toggle="#default-tab-content"
      role="tablist"
    >
      <li
        class="inline-block p-4 rounded-t-lg text-lg text-gray-900 capitalize hover:bg-slate-500 hover:text-white cursor-pointer"
        role="presentation"
        v-for="category in categories"
        :key="category._id"
        @click="router.push(`/category/${category._id}`)"
      >
        {{ category.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// reactive state
let categories = ref([])

onMounted(() => {
  // get data from api endpoint
  axios
    .get('https://techhaven-admin.vercel.app/api/category')
    .then((result) => {
      categories.value = result.data
    })
    .catch((err) => {
      console.log(err.response)
    })

  return {
    categories
  }
})
</script>
