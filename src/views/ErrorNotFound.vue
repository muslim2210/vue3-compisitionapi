<template>
  <div class="h-screen flex flex-col gap-5 justify-center items-center">
    <div class="flex flex-col gap-5 items-center">
      <h1 class="text-8xl font-bold">404</h1>
      <h1 class="text-3xl font-bold">Page Not Found</h1>
    </div>
    <RouterLink to="/">
      <div
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-between items-center gap-4 max-w-[200px]"
      >
        <i class="pi pi-arrow-left"></i>
        <p>Back to Home</p>
      </div>
    </RouterLink>
  </div>
</template>
