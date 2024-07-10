<template>
  <nav
    class="bg-white border-gray-300 dark:bg-gray-900 dark:border-gray-700 shadow-sm fixed py-5 h-20 w-full right-0 left-0 top-0 z-50"
  >
    <div class="flex flex-wrap items-center justify-between container mx-auto">
      <RouterLink to="/">
        <img src="@/assets/logo-black.svg" class="h-8" alt="Flowbite Logo" />
      </RouterLink>

      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white items-center"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:hover:text-blue-700 text-lg"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/admin"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg"
              >Admin</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/users"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg"
              >Users</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/cart"
              class="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-lg md:p-0 mr-4"
            >
              <div class="flex relative">
                <i class="pi pi-shopping-cart text-xl"></i>
                <span class="text-sm font-bold absolute top-[-6px] left-5"
                  >({{ data.cartItems.length }})</span
                >
              </div>
            </RouterLink>
          </li>

          <li v-if="!token">
            <RouterLink to="/login" class="bg-gray-900 text-white py-2 px-4 rounded"
              >Login</RouterLink
            >
          </li>
          <li v-if="token">
            <button @click="logout()" to="/login" class="bg-gray-900 text-white py-2 px-4 rounded">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useShoppingStore } from '@/stores'

//get store
const data = useShoppingStore()

//get token
const token = localStorage.getItem('token')

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/login'
  router.push({ name: 'login' })
}
</script>
