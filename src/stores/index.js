import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const toast = useToast()

const setCartItem = (item) => {
  localStorage.setItem('data.cartItems', JSON.stringify(item))
}

export const useShoppingStore = defineStore('shopping', {
  state: () => {
    return {
      products: [],
      cartItems: JSON.parse(localStorage.getItem('data.cartItems')) || []
    }
  },
  getters: {
    countCartItems() {
      return this.cartItems.length
    },
    getCartItems() {
      return this.cartItems
    }
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id)
      if (index !== -1) {
        this.products[index].quantity += 1
        toast.success('Item added to cart')
      } else {
        item.quantity = 1
        this.cartItems.push(item)
        setCartItem(this.cartItems)
        toast.success('Your item has been saved')
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id)
      if (index !== -1) {
        this.cartItems[index].quantity += 1
        setCartItem(this.cartItems)
        toast.success('Your item has been updated')
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id)
      if (index !== -1) {
        this.cartItems[index].quantity -= 1
        setCartItem(this.cartItems)
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter((product) => product.id !== item.id)
          setCartItem(this.cartItems)
        }
        toast.success('Your item has been updated')
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter((product) => product.id !== item.id)
      setCartItem(this.cartItems)
      toast.success('Your item has been removed')
    }
  }
})
