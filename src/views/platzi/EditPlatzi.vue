<script setup>
import { reactive, onMounted, ref } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import axios from 'axios'

import { useToast } from 'vue-toastification'

const toast = useToast()

const router = useRouter()
const route = useRoute()

let formData = reactive({
  name: '',
  email: '',
  gender: '',
  departement: ''
})

const gender = ref([
  {
    genderName: 'Male',
    valueGender: 'male'
  },
  {
    genderName: 'Female',
    valueGender: 'female'
  }
])

const departements = ref([
  {
    dept: 'IT',
    valueDept: 'IT'
  },
  {
    dept: 'Finance',
    valueDept: 'finance'
  },
  {
    dept: 'HR',
    valueDept: 'HR'
  },
  {
    dept: 'Production',
    valueDept: 'production'
  }
])

const validation = ref([])

onMounted(() => {
  axios
    .get(`http://localhost:4000/users/${route.params.id}`)
    .then((result) => {
      formData.name = result.data.name
      formData.email = result.data.email
      formData.gender = result.data.gender
      formData.departement = result.data.departement
    })
    .catch((err) => {
      console.log(err.response.data)
    })
})

const handleUpdateUser = () => {
  axios
    .patch(`http://localhost:4000/users/${route.params.id}`, formData)
    .then(() => {
      toast.success('User Updated successfully')
      router.push({ name: 'users.index' })
    })
    .catch((err) => {
      toast.error(err.response.data.message)
      validation.value = err.response.data
    })
}
</script>

<template>
  <div class="container mx-auto my-24 py-10">
    <h1 class="text-2xl font-semibold">Update Users</h1>
    <hr class="my-4" />

    <form @submit.prevent="handleUpdateUser">
      <div class="flex gap-12">
        <!-- left side -->
        <div class="w-1/2 flex flex-col gap-y-6 mt-10">
          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">
              User Name</label
            >
            <input
              v-model="formData.name"
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="insert name.."
              required
            />
            <div v-if="validation.name" class="text-red-500">
              {{ validation.name[0] }}
            </div>
          </div>
          <div class="w-full">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900"> Email</label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="insert email.."
              required
            />
            <div v-if="validation.email" class="text-red-500">
              {{ validation.email[0] }}
            </div>
          </div>

          <div class="flex gap-5">
            <!-- gender -->
            <div class="w-[50%]">
              <label for="gender" class="block mb-2 text-sm font-medium text-gray-900">
                Gender</label
              >
              <select
                v-model="formData.gender"
                id="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option disabled selected>Choose a Gender</option>
                <option v-for="(gen, index) in gender" :key="index" :value="gen.valueGender">
                  {{ gen.genderName }}
                </option>
                <div v-if="validation.gender" class="text-red-500">
                  {{ validation.gender[0] }}
                </div>
              </select>
            </div>

            <!-- departement -->
            <div class="w-[50%]">
              <label for="departement" class="block mb-2 text-sm font-medium text-gray-900">
                Departement</label
              >
              <select
                v-model="formData.departement"
                id="departement"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option disabled selected>Choose a Departement</option>
                <option
                  v-for="(departement, index) in departements"
                  :key="index"
                  :value="departement.valueDept"
                >
                  {{ departement.dept }}
                </option>
              </select>
              <div v-if="validation.departement" class="text-red-500">
                {{ validation.departement[0] }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-6">
        <RouterLink to="/users">
          <button
            type="button"
            class="text-white bg-gray-700 hover:bg-gray-700/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-10"
          >
            Cancel
          </button>
        </RouterLink>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-10"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>
