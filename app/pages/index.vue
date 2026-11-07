<script setup>
useHead({
  title: 'My Web Developer Portfolio'
})

useSeoMeta({
  title: 'My Web Developer Portfolio',
  description: 'Welcome to my official developer portfolio built with Nuxt.',
  ogTitle: 'My Developer Portfolio'
})
</script>

<template>
  <div>
    <Navbar />
    <main class="min-h-screen p-8 text-center">
      <h1 class="text-4xl font-bold">Hello! Welcome to my Portfolio</h1>
      <p class="mt-4 text-lg">Built with Nuxt, Tailwind, and DaisyUI</p>
    </main>
    <Footer />
  </div>
</template>