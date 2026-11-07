<script setup>
defineProps({
  error: Object
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-4">
    <h1 class="text-6xl font-bold text-red-500">404</h1>
    <p class="text-xl mt-2">Oops! Page not found.</p>
    <NuxtLink to="/" class="btn btn-primary mt-4">Back to Home</NuxtLink>
  </div>
</template>