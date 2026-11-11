<script setup>
// --- Timing / copy (the legacy values lived in tech-stack-script.js) ---
const SPLASH_DURATION = 2500 // ms the splash stays fully visible
const FADE_DURATION = 800    // ms, matches .splash-screen opacity transition
const TYPE_SPEED = 90        // ms per character
const typewriterLines = {
  prefix: "Hi, I'm",
  name: 'Harell Diaz'
}

// --- Reactive state ---
const splashMounted = ref(true)
const splashFading = ref(false)
const showMain = ref(false)
const typewriterPrefix = ref('')
const typewriterName = ref('')

// body.hidden-scroll blocks scrolling while the splash screen is visible
useHead({
  title: 'Harell Diaz | Web Portfolio',
  bodyAttrs: {
    class: computed(() =>
      splashMounted.value
        ? 'hidden-scroll bg-[#0b0c10] text-white'
        : 'bg-[#0b0c10] text-white'
    )
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
  await sleep(SPLASH_DURATION)
  if (cancelled) return

  // Fade the splash out while the main content fades in
  splashFading.value = true
  showMain.value = true
  await sleep(FADE_DURATION)
  if (cancelled) return

  splashMounted.value = false

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

    <div id="mainContent" class="main-content" :class="{ 'show-main': showMain }">
      <section class="home" id="home">

        <div class="home-content-left typewriter-container animate-text" :class="{ show: showMain }">
          <h1 class="font-orbitron text-[2.2rem] min-h-[45px]">
            <span id="typewriter-prefix">{{ typewriterPrefix }}</span>
          </h1>
          <h1 class="name font-orbitron text-[3rem] text-[#ff00bb] min-h-[60px]">
            <span id="typewriter-name">{{ typewriterName }}</span>
          </h1>
        </div>

        <div class="home-img animate-text" :class="{ show: showMain }">
          <div class="img-frame">
            <img src="/images/harellmain.jpg" alt="Harell Diaz Profile">
          </div>
        </div>

        <div class="home-content-right animate-text" :class="{ show: showMain }">
          <h3 class="font-orbitron text-[2.5rem] font-bold">Future Web</h3>
          <h3 class="role font-orbitron text-[2.5rem] text-[#ff00bb] font-bold drop-shadow-[0_0_10px_rgba(255,0,187,0.6)]">
            Developer
          </h3>
          <div class="mt-6">
            <NuxtLink to="/about" class="btn">View My Work</NuxtLink>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<style scoped>
.font-orbitron { font-family: 'Orbitron', sans-serif; }

/* Transition classes used by the splash / reveal logic */
.main-content {
  opacity: 0;
  transition: opacity 0.8s ease;
}
.main-content.show-main {
  opacity: 1 !important;
}
</style>