<template>
  <div className="container mx-auto md:py-20">
    <!-- {/* HEADING AND PARAGRAPH START */} -->
    <div className="text-center max-w-[800px] mx-auto mt-12">
      <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
        Shopping Cart
      </div>
    </div>
    <!-- {/* HEADING AND PARAGRAPH END */} -->

    <!-- {/* CART CONTENT START */} -->
    <div className="flex flex-col lg:flex-row gap-12 py-10">
      <!-- {/* CART ITEMS START */} -->
      <div className="flex-[2]">
        <div
          v-if="data.cartItems.length === 0"
          className="flex-[2] flex flex-col items-center mt-[80px] pb-[50px] text-center justify-center"
        >
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <RouterLink
            to="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </RouterLink>
        </div>

        <CardItem :item="item" v-for="item in data.getCartItems" :key="item._id" />
      </div>
      <!-- {/* CART ITEMS END */} -->

      <!-- {/* SUMMARY START */} -->
      <div className="flex-[1]">
        <div className="text-lg font-bold">
          Summary
          <span>{{ data.cartItems.length }} items</span>
        </div>

        <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
          <div className="flex justify-between">
            <div className="uppercase text-md md:text-lg font-medium text-black">Subtotal</div>
            <div className="text-md md:text-lg font-medium text-black">
              Rp.
              {{
                data.cartItems
                  .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
              }}
            </div>
          </div>
          <div className="text-sm md:text-md py-5 border-t mt-5">
            The subtotal reflects the total price of your order, including duties and taxes, before
            any applicable discounts. It does not include delivery costs and international
            transaction fees.
          </div>
        </div>

        <!-- {/* BUTTON START */} -->
        <RouterLink :to="{ name: 'checkout.product' }">
          <button
            className="bg-orange-500 w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
          >
            Checkout
          </button>
        </RouterLink>
        <!-- {/* BUTTON END */} -->
      </div>
      <!-- {/* SUMMARY END */} -->
    </div>
    <!-- {/* CART CONTENT END */} -->
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useShoppingStore } from '@/stores'
import CardItem from '@/components/card/CardItem.vue'

//get store
const data = useShoppingStore()

console.log(data.getCartItems)
</script>
