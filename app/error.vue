<script setup>
import { AlertTriangle, Home } from 'lucide-vue-next'

const props = defineProps({
  error: Object
})

useHead({
  title: `${props.error?.statusCode || 404} | Page Not Found - Harell Diaz`
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center justify-center text-center p-4">
    <AlertTriangle class="w-16 h-16 text-[#ff00bb] mb-4 drop-shadow-[0_0_15px_rgba(255,0,187,0.7)]" />
    <h1 class="text-7xl md:text-8xl font-bold text-[#ff00bb] drop-shadow-[0_0_20px_rgba(255,0,187,0.6)]">
      {{ error?.statusCode || 404 }}
    </h1>
    <p class="text-xl md:text-2xl font-semibold mt-3">
      {{ error?.statusCode === 404 ? 'Oops! Page not found.' : (error?.message || 'Something went wrong.') }}
    </p>
    <p class="text-gray-400 text-sm max-w-md mt-2">
      The page you are looking for does not exist or may have been moved.
    </p>
    <button
      @click="handleClearError"
      class="btn bg-gradient-to-r from-[#ff007f] to-[#ff00bb] border-none text-white mt-6 px-6 shadow-[0_0_15px_rgba(255,0,187,0.4)] hover:shadow-[0_0_25px_rgba(255,0,187,0.8)]"
    >
      <Home class="w-4 h-4 mr-1" />
      Back to Home
    </button>
  </div>
</template>