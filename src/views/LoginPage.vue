<!-- eslint-disable no-unused-vars -->
<template>
  <div
    class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-[200px]"
  >
    <div class="w-full">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
        <p class="mt-2 text-gray-500">Sign in below to access your account</p>
      </div>
      <div class="mt-5">
        <form @submit.prevent="handleLogin">
          <div class="relative mt-6">
            <input
              v-model="formLogin.email"
              type="email"
              id="email"
              placeholder="Email Address"
              class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              autocomplete="NA"
            />
            <label
              for="email"
              class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >Email Address</label
            >
          </div>
          <div class="relative mt-6">
            <input
              v-model="formLogin.password"
              type="password"
              id="password"
              placeholder="Password"
              class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
            />
            <label
              for="password"
              class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >Password</label
            >
          </div>
          <div class="my-6">
            <button
              type="submit"
              class="w-full rounded-md bg-orange-500 hover:opacity-75 px-3 py-4 text-white focus:bg-orange-500 focus:outline-none"
            >
              Sign in
            </button>
          </div>
          <p class="text-center text-sm text-gray-500">
            Don&#x27;t have an account yet?
            <RouterLink
              :to="{ name: 'register' }"
              class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >Sign up </RouterLink
            >.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const toast = useToast()

const formLogin = reactive({
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log(formLogin)
  axios
    .post('https://api.escuelajs.co/api/v1/auth/login', formLogin)
    .then((response) => {
      console.log(response)
      response && localStorage.setItem('token', response.data.token)
      toast.success('Login success')
      window.location.href = '/'
      router.push({ name: 'homepage' })
    })
    .catch((error) => {
      console.log(error)
      toast.error('Login failed')
    })
}
</script>
