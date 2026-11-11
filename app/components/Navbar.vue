<template>
  <header class="header">
    <NuxtLink to="/" class="logo font-orbitron">
      Harell <span class="text-[#ff00bb]">Diaz</span>
    </NuxtLink>

    <nav class="navbar">
      <NuxtLink to="/" class="nav-item">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-item">About</NuxtLink>
      <NuxtLink to="/techstack" class="nav-item">Tech Stack</NuxtLink>
      <NuxtLink to="/certifications" class="nav-item">Certifications</NuxtLink>
      <NuxtLink to="/contact" class="nav-item">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  background: rgba(11, 12, 16, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 0, 187, 0.2);
}

.logo {
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.navbar {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: #fff;
  background: linear-gradient(90deg, #ff007f, #ff00bb);
  box-shadow: 0 0 15px rgba(255, 0, 187, 0.6);
}
</style>