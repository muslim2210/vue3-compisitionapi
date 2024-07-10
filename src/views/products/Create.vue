<template>
  <div class="container mx-auto my-24 py-10">
    <h1 class="text-2xl font-semibold">Create Product</h1>
    <hr class="my-4" />

    <form @submit.prevent="submitForm">
      <div class="flex gap-12">
        <!-- left side -->
        <div class="w-1/2 flex flex-col gap-y-6 mt-10">
          <div class="w-full">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">
              Title Product</label
            >
            <input
              v-model="product.title"
              type="text"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="title product.."
              required
            />
          </div>
          <div class="w-full">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900">
              Description</label
            >
            <textarea
              v-model="product.description"
              id="description"
              rows="4"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="description product.."
              required
            />
          </div>
          <div>
            <label for="images" class="block mb-2 text-sm font-medium text-gray-900"> Image</label>

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or JPEG (MAX 2MB)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" />
              </label>
            </div>
          </div>
        </div>

        <!-- right side -->
        <div class="w-1/2 flex flex-col gap-y-6 mt-10">
          <div class="flex gap-4">
            <div class="w-full">
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900">
                Select Category</label
              >

              <select
                v-model="product.category"
                placeholder="Select category.."
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option disabled selected>Choose a Category</option>
                <option v-for="category in categories" :key="category._id" :value="category._id">
                  {{ category.title }}
                </option>
              </select>
            </div>
            <div class="w-full">
              <label for="color" class="block mb-2 text-sm font-medium text-gray-900"> Color</label>
              <input
                v-model="product.color"
                type="text"
                id="color"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="insert color.."
              />
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-full">
              <label for="variant" class="block mb-2 text-sm font-medium text-gray-900"
                >Variant</label
              >
              <input
                v-model="product.brand"
                type="text"
                id="variant"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="variant.."
                required
              />
            </div>
            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Price</label>
              <input
                v-model="product.price"
                type="number"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="price.."
                required
              />
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-[50%]">
              <label for="tags" class="block mb-2 text-sm font-medium text-gray-900">Tags</label>
              <input
                v-model="product.tags"
                type="text"
                id="tags"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="tags.."
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-6">
        <RouterLink to="/admin">
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
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

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
})

const router = useRouter()

const toast = useToast()

// data binding
const product = reactive({
  title: '',
  description: '',
  category: '',
  images: '',
  brand: '',
  tags: '',
  color: '',
  price: 0
})
</script>
