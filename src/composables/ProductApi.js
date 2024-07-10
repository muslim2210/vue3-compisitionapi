import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export default function useProductApi() {
  const url = 'https://techhaven-admin.vercel.app/api/products'
  const products = ref([])
  const error = ref(null)
  const statusCode = ref(null)
  const delError = ref(null)

  // get all products data
  const getAllUsers = async () => {
    products.value = []
    error.value = null
    try {
      const res = await axios.get(url)
      console.log(res.data)
      products.value = res.data
    } catch (err) {
      error.value = err.message
    }
  }

  // get single product data
  const getSingleProduct = async (id) => {
    productData.value = []
    error.value = null
    try {
      const res = await axios.get(`${url}/${id}`)
      console.log(res.data)
      productData.value = res.data
    } catch (err) {
      error.value = err.message
    }
  }

  // post / add product data
  const createProduct = async (formData) => {
    productData.value = []
    error.value = null
    try {
      const config = {
        method: 'POST',
        url: 'http://localhost:3000/api/products',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(formData)
      }
      const res = await axios(config)
      console.log(res)
      productData.value = res.data
      statusCode.value = res.status
    } catch (err) {
      error.value = err.message
      toast.error(err.message)
    }
  }

  // udate product data
  const updateProduct = async (id, data) => {
    productData.value = []
    error.value = null
    try {
      const config = {
        method: 'PUT',
        url: `${url}/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config)
      productData.value = res.data
      statusCode.value = res.status
    } catch (err) {
      error.value = err.message
    }
  }

  // delete product data
  const deleteProduct = async (id) => {
    productData.value = []
    error.value = null
    try {
      const config = {
        method: 'DELETE',
        url: `${url}/${id}`,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const res = await axios(config)
      console.log(res)
      statusCode.value = res.status
    } catch (err) {
      delError.value = err.message
    }
  }

  return {
    userData,
    error,
    statusCode,
    delError,
    getAllUsers,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }
}
