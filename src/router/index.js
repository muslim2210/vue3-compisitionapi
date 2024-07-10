/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('../views/Homepage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
      meta: {
        notAuthed: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/category/:id',
      name: 'category.detail',
      component: () => import('../components/category/CategoryPage.vue')
    },
    {
      path: '/admin',
      name: 'products.index',
      component: () => import('../views/products/Index.vue')
    },
    {
      path: '/users',
      name: 'users.index',
      component: () => import('../views/platzi/IndexPlatzi.vue')
    },
    {
      path: '/createuser',
      name: 'users.create',
      component: () => import('../views/platzi/CreatePlatzi.vue')
    },
    {
      path: '/editeuser/:id',
      name: 'users.edit',
      component: () => import('../views/platzi/EditPlatzi.vue')
    },
    {
      path: '/cart',
      name: 'cart.product',
      component: () => import('../views/CartPage.vue')
    },
    {
      path: '/cart/checkout',
      name: 'checkout.product',
      component: () => import('../views/CheckoutPage.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create',
      name: 'products.create',
      component: () => import('../views/products/Create.vue')
    },
    {
      path: '/edit/:id',
      name: 'products.edit',
      component: () => import('../views/products/Edit.vue')
    },

    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/ErrorNotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (token) {
      // User is authenticated, proceed to the route
      next()
    } else {
      // User is not authenticated, redirect to login
      next('/login')
    }
  } else if (to.meta.notAuthed) {
    const token = localStorage.getItem('token')

    if (token) {
      // User is authenticated, proceed to the route
      next('/')
    } else {
      // User is not authenticated, redirect to login
      next()
    }
  } else {
    // Non-protected route, allow access
    next()
  }
})

export default router
