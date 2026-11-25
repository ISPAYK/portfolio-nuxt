<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap'
    }
  ]
})
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>