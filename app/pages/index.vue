<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// --- Timing / copy ---
const SPLASH_DURATION = 2500 // ms the splash stays fully visible
const FADE_DURATION = 800    // ms, matches .splash-screen opacity transition
const TYPE_SPEED = 90        // ms per character
const typewriterLines = {
  prefix: "Hello! I'm",
  name: 'Harell Diaz'
}

// --- Reactive state ---
const splashMounted = ref(true)
const splashFading = ref(false)
const showMain = ref(false)
const typewriterPrefix = ref('')
const typewriterName = ref('')

// Set document title and CSS variables
useHead({
  title: 'Harell Diaz | Web Portfolio',
  bodyAttrs: {
    class: computed(() =>
      splashMounted.value ? 'hidden-scroll' : ''
    )
  },
  htmlAttrs: {
    style: '--nav-glow: #ff007f; --nav-secondary: #00d2ff;'
  }
})

let cancelled = false
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function typeText(target, text) {
  for (const char of text) {
    if (cancelled) return
    target.value += char
    await sleep(TYPE_SPEED)
  }
}

onMounted(async () => {
  // Check if splash screen was already watched in this session
  if (sessionStorage.getItem('splashWatched') === 'true') {
    splashMounted.value = false
    showMain.value = true
    await typeText(typewriterPrefix, typewriterLines.prefix)
    await sleep(200)
    await typeText(typewriterName, typewriterLines.name)
    return
  }

  await sleep(SPLASH_DURATION)
  if (cancelled) return

  // Fade the splash out while the main content fades in
  splashFading.value = true
  showMain.value = true
  await sleep(FADE_DURATION)
  if (cancelled) return

  splashMounted.value = false
  sessionStorage.setItem('splashWatched', 'true')

  // Typewriter intro
  await typeText(typewriterPrefix, typewriterLines.prefix)
  await sleep(200)
  await typeText(typewriterName, typewriterLines.name)
})

onBeforeUnmount(() => {
  cancelled = true
})
</script>

<template>
  <div>
    <!-- SPLASH SCREEN -->
    <div
      v-if="splashMounted"
      id="splashScreen"
      class="splash-screen"
      :class="{ 'fade-out': splashFading }"
    >
      <div class="splash-container">
        <h3 class="intro-heading">WELCOME TO MY</h3>
        <div class="main-text">
          <h1>Portfolio</h1>
          <h1 class="year-text">2026</h1>
        </div>
        <ul class="services-labels list-none p-0 m-0">
          <li class="label inline-block">Software Engineering</li>
          <li class="label inline-block">Web Development</li>
        </ul>
      </div>
      <div class="neon-ring ring-top"></div>
      <div class="neon-ring ring-bottom"></div>
    </div>

    <!-- MAIN HERO CONTENT -->
    <div id="mainContent" class="main-content" :class="{ 'show-main': showMain }">
      <section class="home" id="home">

        <div class="home-content-left typewriter-container animate-text" :class="{ show: showMain }">
          <h1>
            <span id="typewriter-prefix">{{ typewriterPrefix }}</span><br />
            <span id="typewriter-name" class="name">{{ typewriterName }}</span>
          </h1>
        </div>

        <div class="home-img animate-text" :class="{ show: showMain }">
          <div class="img-frame">
            <img src="/images/harellmain.jpg" alt="Harell Diaz Profile">
          </div>
        </div>

        <div class="home-content-right animate-text" :class="{ show: showMain }">
          <h3>Future Web</h3>
          <h3 class="role">Developer</h3>
          <div class="mt-6">
            <NuxtLink to="/techstack" class="btn">View My Work</NuxtLink>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<style>
/* Unscoped transitions to ensure main.css styles apply cleanly */
.main-content {
  opacity: 0;
  transition: opacity 0.8s ease;
}
.main-content.show-main {
  opacity: 1 !important;
}
</style>