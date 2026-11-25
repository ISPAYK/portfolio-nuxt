<script setup>
import { ref } from 'vue'
import { Home, User, Cpu, Award, Mail, Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="logo font-orbitron" @click="isMenuOpen = false">
      Harell <span class="text-[#ff00bb]">Diaz</span>
    </NuxtLink>

    <button
      type="button"
      class="menu-toggle"
      @click="isMenuOpen = !isMenuOpen"
      aria-label="Toggle navigation"
    >
      <X v-if="isMenuOpen" class="w-7 h-7" />
      <Menu v-else class="w-7 h-7" />
    </button>

    <nav class="nav-links" :class="{ open: isMenuOpen }">
      <NuxtLink to="/" class="nav-item" @click="isMenuOpen = false">
        <Home class="w-4 h-4" />
        <span>Home</span>
      </NuxtLink>
      <NuxtLink to="/about" class="nav-item" @click="isMenuOpen = false">
        <User class="w-4 h-4" />
        <span>About</span>
      </NuxtLink>
      <NuxtLink to="/techstack" class="nav-item" @click="isMenuOpen = false">
        <Cpu class="w-4 h-4" />
        <span>Tech Stack</span>
      </NuxtLink>
      <NuxtLink to="/certifications" class="nav-item" @click="isMenuOpen = false">
        <Award class="w-4 h-4" />
        <span>Certifications</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="nav-item" @click="isMenuOpen = false">
        <Mail class="w-4 h-4" />
        <span>Contact</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

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

.nav-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 1.05rem;
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

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 960px) {
  .header {
    padding: 1.1rem 6%;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: rgba(11, 12, 16, 0.97);
    padding: 1.25rem 6%;
    gap: 0.75rem;
    border-bottom: 1px solid rgba(255, 0, 187, 0.3);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-item {
    width: 100%;
    justify-content: center;
  }
}
</style>