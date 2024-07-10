<script setup>
import { onMounted, ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

import { useToast } from 'vue-toastification'

const toast = useToast()

let formData = ref({
  name: '',
  email: '',
  gender: '',
  departement: ''
})

// reactive state
let users = ref([])

onMounted(() => {
  // get data from api endpoint
  axios
    .get('http://localhost:4000/users')
    .then((result) => {
      users.value = result.data
      console.log(users)
    })
    .catch((err) => {
      console.log(err.response)
    })
})

const handleDeleteUser = (_id, index) => {
  axios
    .delete(`http://localhost:4000/users/${_id}`)
    .then(() => {
      users.value.splice(index, 1)
      toast.success('User deleted successfully')
    })
    .catch((err) => {
      toast.error(err.response.data)
      console.log(err.response.data)
    })
}
</script>

<template>
  <div class="container mx-auto my-24 py-10">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Data Users From API</h1>
      <RouterLink to="/createuser">
        <div
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center gap-4"
        >
          <i class="pi pi-plus"></i>
          <p>Create User</p>
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
              <th scope="col" class="px-8 py-5 text-lg">Name</th>
              <th scope="col" class="px-8 py-5 text-lg">Email</th>
              <th scope="col" class="px-8 py-5 text-lg">Gender</th>
              <th scope="col" class="px-8 py-5 text-lg">Departement</th>
              <th scope="col" class="px-8 py-5 text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="index"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-8 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
              >
                {{ user.name }}
              </th>
              <td class="px-8 py-5 capitalize">{{ user.email }}</td>
              <td class="px-8 py-5 capitalize">{{ user.gender }}</td>
              <td class="px-8 py-5 capitalize">
                {{ user.departement }}
              </td>
              <td class="px-8 py-5 flex gap-2 items-center">
                <RouterLink
                  :to="{ name: 'users.edit', params: { id: user._id } }"
                  class="font-medium text-white bg-yellow-300 rounded-full py-2 px-3 hover:bg-yellow-300/80 shadow-md"
                >
                  <i class="pi pi-pencil"></i>
                </RouterLink>
                |
                <button
                  @click.prevent="handleDeleteUser(user._id, index)"
                  class="font-medium text-white bg-red-500 rounded-full py-2 px-3 hover:bg-red-500/80 shadow-md"
                >
                  <i class="pi pi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
