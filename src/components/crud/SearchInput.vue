<template>
  <form @submit.prevent="handleSearch">
    <div
      class="relative hidden md:flex w-[300px] lg:w-[450px]"
      data-twe-input-wrapper-init
      data-twe-input-group-ref
    >
      <input
        type="search"
        v-model="query"
        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-blue-600 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-80"
        placeholder="Search..."
        aria-label="Search"
        id="exampleFormControlInput"
        aria-describedby="basic-addon1"
      />
      <button
        type="submit"
        class="relative z-[2] -ms-0.5 flex items-center rounded-e bg-blue-600 px-5 text-xs font-medium uppercase leading-normal text-white shadow-blue-600 transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-blue-600 focus:bg-blue-600 focus:shadow-blue-600 focus:outline-none focus:ring-0 active:bg-blue-600-600 active:shadow-blue-600"
      >
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'

const query = ref('')
const products = ref([])

const handleSearch = () => {
  if (query.value) {
    axios
      .get(`https://techhaven-admin.vercel.app/api/search/${query.value}`)
      .then((result) => {
        products.value = result.data
        console.log(products.value)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}
</script>
