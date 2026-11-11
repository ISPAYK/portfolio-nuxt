<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// --- 1. TYPEWRITER SETTINGS ---
const prefixText = "Hello! I'm"
const nameText = 'Harell Diaz'

const typewriterPrefix = ref('')
const typewriterName = ref('')
let isTyping = false
let typeTimeouts = []
let pageTimeouts = [] // splash/animation timers, cleared on unmount

function typeEffect(targetRef, text, speed = 100, callback = null) {
  let i = 0
  targetRef.value = ''

  function typing() {
    if (i < text.length) {
      targetRef.value += text.charAt(i)
      i++
      typeTimeouts.push(setTimeout(typing, speed))
    } else if (callback) {
      // After the first text (prefix), run the next one (name)
      callback()
    }
  }
  typing()
}

function deleteEffect(targetRef, speed = 40) {
  let text = targetRef.value

  function deleting() {
    if (text.length > 0) {
      text = text.substring(0, text.length - 1)
      targetRef.value = text
      typeTimeouts.push(setTimeout(deleting, speed))
    } else {
      targetRef.value = ''
    }
  }
  deleting()
}

function clearAllTimeouts() {
  typeTimeouts.forEach((t) => clearTimeout(t))
  typeTimeouts = []
}

function startHomeAnimations() {
  if (isTyping) return // avoid running the typing effect twice
  isTyping = true

  clearAllTimeouts()
  typewriterPrefix.value = ''
  typewriterName.value = ''

  // Type the prefix first, then the name
  typeEffect(typewriterPrefix, prefixText, 100, () => {
    typeTimeouts.push(
      setTimeout(() => {
        typeEffect(typewriterName, nameText, 120)
      }, 300)
    )
  })
}

// --- 2. SPLASH SCREEN ---
const splashVisible = ref(true)   // controls display of #splashScreen
const splashFadingOut = ref(false) // adds the .fade-out class
const mainShown = ref(false)       // adds .show-main and opacity: 1

// Replaces document.body.classList.remove('hidden-scroll')
useHead({
  bodyAttrs: {
    class: computed(() => (splashVisible.value ? 'hidden-scroll' : ''))
  },
  // Replaces document.documentElement.style.setProperty(...)
  htmlAttrs: {
    style: '--nav-glow: #ff007f; --nav-secondary: #00d2ff;'
  }
})

function revealMain() {
  splashVisible.value = false
  mainShown.value = true
}

function handleSplashScreen() {
  if (sessionStorage.getItem('splashWatched') === 'true') {
    revealMain()
    // Delay so the DOM is fully rendered before typing starts
    isTyping = false // force reset for page returns
    pageTimeouts.push(setTimeout(startHomeAnimations, 500))
  } else {
    pageTimeouts.push(
      setTimeout(() => {
        splashFadingOut.value = true
        pageTimeouts.push(
          setTimeout(() => {
            revealMain()
            sessionStorage.setItem('splashWatched', 'true')

            // Start typing after the splash has fully faded out
            isTyping = false
            pageTimeouts.push(setTimeout(startHomeAnimations, 300))
          }, 800)
        )
      }, 2500)
    )
  }
}

// --- 3. TECH STACK KEYS + MOBILE MODAL ---
const techKeys = ref([
  { id: 1, icon: '<i class="fab fa-html5"></i>', title: 'HTML5', description: 'Semantic markup for structured, accessible pages.' },
  { id: 2, icon: '<i class="fab fa-css3-alt"></i>', title: 'CSS3', description: 'Styling, layouts, and animations.' },
  { id: 3, icon: '<i class="fab fa-js"></i>', title: 'JavaScript', description: 'Interactivity and application logic.' },
  { id: 4, icon: '<i class="fab fa-vuejs"></i>', title: 'Vue 3', description: 'Reactive UI with the Composition API.' }
])

const isMobileModalOpen = ref(false)
const selectedKey = ref(null)

const hasSelectedKey = computed(() => !!selectedKey.value)

function openKeyModal(key) {
  if (!key || !key.title || !key.description) return
  selectedKey.value = key
  isMobileModalOpen.value = true
}

function closeMobileModal() {
  isMobileModalOpen.value = false
}

// --- 4. CONTACT FORM ---
const contactForm = reactive({
  name: '',
  email: '',
  message: ''
})

function handleContactSubmit() {
  alert('Message Sent!')
}

// --- 5. CERTIFICATE VIEWER (switchPage) ---
const certPages = ref([
  { label: '1', src: '/images/cert-page1.jpg' },
  { label: '2', src: '/images/cert-page2.jpg' }
])

const activeCertIndex = ref(0)
const certDisplaySrc = ref(certPages.value[0]?.src ?? '')

const activeCert = computed(() => certPages.value[activeCertIndex.value] ?? null)

function switchPage(imageSrc, index) {
  certDisplaySrc.value = imageSrc
  activeCertIndex.value = index
}

// --- 6. CERTIFICATE LIGHTBOX (openModal / closeModal) ---
const isCertModalOpen = ref(false)
const fullImgSrc = ref('')

function openModal(imageSrc) {
  fullImgSrc.value = imageSrc
  isCertModalOpen.value = true
}

function closeModal() {
  isCertModalOpen.value = false
}

// --- 7. FLOATING IMAGE ANIMATION ---
const homeImg = ref(null)

async function startFloatAnimation() {
  if (!homeImg.value) return
}

// --- LIFECYCLE ---
onMounted(async () => {
  handleSplashScreen()
  await nextTick()
  pageTimeouts.push(setTimeout(startFloatAnimation, 3000))
})

onBeforeUnmount(() => {
  clearAllTimeouts()
  pageTimeouts.forEach((t) => clearTimeout(t))
  pageTimeouts = []
})
</script>

<template>
  <!-- SPLASH SCREEN -->
  <div
    v-show="splashVisible"
    id="splashScreen"
    :class="{ 'fade-out': splashFadingOut }"
  >
  </div>

  <!-- MAIN CONTENT -->
  <div id="mainContent" :class="{ 'show-main': mainShown }" :style="{ opacity: mainShown ? 1 : 0 }">

    <!-- TYPEWRITER -->
    <h1>
      <span id="typewriter-prefix">{{ typewriterPrefix }}</span>
      <span id="typewriter-name">{{ typewriterName }}</span>
    </h1>

    <!-- FLOATING IMAGE -->
    <img ref="homeImg" class="home-img" src="/images/harellmain.jpg" alt="Home" />

    <!-- TECH KEYS -->
    <div class="keyboard">
      <div
        v-for="key in techKeys"
        :key="key.id"
        class="key"
        @click="openKeyModal(key)"
      >
        <div class="keycap" v-html="key.icon"></div>
        <div class="key-info">
          <h3>{{ key.title }}</h3>
          <p>{{ key.description }}</p>
        </div>
      </div>
    </div>

    <!-- MOBILE MODAL -->
    <div
      v-show="isMobileModalOpen"
      id="mobileModal"
      class="modal"
      :style="{ display: isMobileModalOpen ? 'flex' : 'none' }"
      @click.self="closeMobileModal"
    >
      <div class="modal-content">
        <span class="close-modal" @click="closeMobileModal">&times;</span>
        <div id="modalBody" v-if="hasSelectedKey">
          <div style="text-align: center; margin-bottom: 15px;">
            <div style="font-size: 5rem; display: inline-block;" v-html="selectedKey.icon"></div>
          </div>
          <h3 style="color: var(--nav-glow); font-size: 2.2rem; margin-bottom: 10px; text-align: center; font-family: inherit;">
            {{ selectedKey.title }}
          </h3>
          <p style="color: #fff; line-height: 1.6; font-size: 1.6rem; text-align: center; font-family: inherit;">
            {{ selectedKey.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- CERTIFICATE VIEWER -->
    <div class="cert-viewer">
      <img id="certDisplay" :src="certDisplaySrc" alt="Certificate" @click="openModal(certDisplaySrc)" />
      <div class="page-buttons">
        <button
          v-for="(page, index) in certPages"
          :key="page.src"
          class="page-btn"
          :class="{ 'page-active': activeCertIndex === index }"
          @click="switchPage(page.src, index)"
        >
          {{ page.label }}
        </button>
      </div>
    </div>

    <!-- CERT LIGHTBOX -->
    <div
      v-show="isCertModalOpen"
      id="certModal"
      class="modal"
      :style="{ display: isCertModalOpen ? 'flex' : 'none' }"
      @click.self="closeModal"
    >
      <span class="close" @click="closeModal">&times;</span>
      <img id="imgFull" :src="fullImgSrc" alt="Certificate full view" />
    </div>

    <!-- CONTACT FORM -->
    <form class="contact-form" @submit.prevent="handleContactSubmit">
      <input v-model="contactForm.name" type="text" placeholder="Name" required />
      <input v-model="contactForm.email" type="email" placeholder="Email" required />
      <textarea v-model="contactForm.message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
.home-img {
  max-width: 320px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}
</style>