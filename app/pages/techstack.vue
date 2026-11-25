<script setup>
import { ref } from 'vue'
import { Cpu, X } from 'lucide-vue-next'

useHead({
  title: 'Tech Stack | Harell Diaz'
})

useSeoMeta({
  title: 'Tech Stack | Harell Diaz',
  description: 'Programming languages, web technologies, databases, and developer tools used by Harell Diaz.',
  ogTitle: 'Tech Stack | Harell Diaz',
  ogDescription: 'Explore the technical skills and tools of Harell Diaz.'
})

const techCategories = ref([
  {
    name: 'Programming Languages',
    borderColor: '#ec4899',
    titleClass: 'text-pink-500',
    gridType: 'grid-3',
    items: [
      {
        id: 1,
        name: 'Java',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        subtitle: 'Robust backend logic',
        description: 'Used for object-oriented programming and building robust backend logic.'
      },
      {
        id: 2,
        name: 'Python',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        subtitle: 'Scripting & Data Analysis',
        description: 'Applied for scripting, data analysis, and simplifying complex automation tasks.'
      },
      {
        id: 3,
        name: 'C Language',
        logoSrc: '/images/c.png',
        subtitle: 'Memory management',
        description: 'Foundational knowledge in memory management and systems-level programming.'
      }
    ]
  },
  {
    name: 'Web & Database',
    borderColor: '#3b82f6',
    titleClass: 'text-blue-500',
    gridType: 'grid-4',
    items: [
      {
        id: 4,
        name: 'HTML',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        subtitle: 'Web Structure',
        description: 'Creating the structural foundation of responsive web pages.'
      },
      {
        id: 5,
        name: 'CSS',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        subtitle: 'Modern Layouts',
        description: 'Designing modern layouts with animations, flexbox, and grid.'
      },
      {
        id: 6,
        name: 'JavaScript',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        subtitle: 'Interactivity',
        description: 'Adding interactivity and dynamic functionality.'
      },
      {
        id: 7,
        name: 'PostgreSQL',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        subtitle: 'Relational DB',
        description: 'Advanced relational database management system.'
      }
    ]
  },
  {
    name: 'Tools & Version Control',
    borderColor: '#22c55e',
    titleClass: 'text-green-500',
    gridType: 'grid-3',
    items: [
      {
        id: 8,
        name: 'VS Code',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
        subtitle: 'Main Code Editor',
        description: 'Primary code editor for development.'
      },
      {
        id: 9,
        name: 'Android Studio',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
        subtitle: 'Mobile Dev',
        description: 'IDE for high-performance Android applications.'
      },
      {
        id: 10,
        name: 'SSMS',
        logoSrc: '/images/ssms.png',
        subtitle: 'SQL Server Admin',
        description: 'SQL Server Management Studio for database administration.'
      },
      {
        id: 11,
        name: 'Oracle APEX',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
        subtitle: 'Low-Code Platform',
        description: 'Low-code platform for building enterprise database apps.'
      },
      {
        id: 12,
        name: 'Git',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        subtitle: 'Version Control',
        description: 'Version control and tracking history of changes.'
      },
      {
        id: 13,
        name: 'GitHub',
        logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        invertDark: true,
        subtitle: 'Collaboration',
        description: 'Hosting repositories, cloud backup, and code collaboration.'
      }
    ]
  }
])

const isModalOpen = ref(false)
const selectedItem = ref(null)

function openModal(item) {
  selectedItem.value = item
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  selectedItem.value = null
}
</script>

<template>
  <section class="tech-section" id="tech">
    <h2 class="section-title">
      <Cpu class="w-8 h-8 md:w-9 md:h-9 text-[#ff00bb] inline-block mr-2 -mt-1" />
      My <span class="highlight-pink">Tech Stack</span>
    </h2>
    <p class="section-subtitle">Tap or click cards to view full details</p>

    <!-- CATEGORIES LOOP -->
    <div 
      v-for="category in techCategories" 
      :key="category.name" 
      class="category-block"
    >
      <h3 
        class="category-heading font-orbitron"
        :style="{ borderLeftColor: category.borderColor }"
      >
        {{ category.name }}
      </h3>

      <div class="tech-grid" :class="category.gridType">
        <div
          v-for="item in category.items"
          :key="item.id"
          class="key"
          @click="openModal(item)"
        >
          <!-- BRAND LOGO -->
          <div class="keycap">
            <img
              :src="item.logoSrc"
              :alt="`${item.name} Logo`"
              class="tech-logo"
              :class="{ 'invert-logo': item.invertDark }"
            />
          </div>

          <!-- MOBILE LABEL -->
          <div class="mobile-label font-orbitron">{{ item.name }}</div>

          <!-- HOVER OVERLAY (DESKTOP) -->
          <div class="key-overlay">
            <h3 class="font-bold font-orbitron" :class="category.titleClass">{{ item.name }}</h3>
            <p class="text-xs text-center mt-1 text-gray-300">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE / CLICK MODAL -->
    <div 
      v-if="isModalOpen" 
      class="modal-backdrop"
      @click.self="closeModal"
    >
      <div class="modal-box">
        <button 
          class="close-btn"
          @click="closeModal"
          aria-label="Close modal"
        >
          <X class="w-6 h-6" />
        </button>

        <div v-if="selectedItem" class="text-center mt-2">
          <div class="modal-icon-wrap">
            <img
              :src="selectedItem.logoSrc"
              :alt="`${selectedItem.name} Logo`"
              class="w-16 h-16 object-contain mx-auto"
              :class="{ 'invert-logo': selectedItem.invertDark }"
            />
          </div>
          <h3 class="text-2xl font-bold font-orbitron text-pink-500 my-2">{{ selectedItem.name }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{{ selectedItem.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-orbitron { font-family: "Orbitron", sans-serif; }

.tech-section {
  max-width: 1150px;
  margin: 0 auto;
  padding: 120px 1.5rem 4rem 1.5rem;
}

.section-title {
  font-family: "Orbitron", sans-serif;
  font-size: 2.25rem;
  text-align: center;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.highlight-pink {
  color: #ff00bb;
  filter: drop-shadow(0 0 10px rgba(255, 0, 187, 0.4));
}

.section-subtitle {
  text-align: center;
  color: #9ca3af;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
}

.category-block {
  margin-bottom: 3rem;
}

.category-heading {
  font-size: 1.35rem;
  color: #fff;
  border-left: 4px solid #ff007f;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

/* --- GRID LAYOUT EXPLICIT RULES --- */
.tech-grid {
  display: grid;
  gap: 1.25rem;
  width: 100%;
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.tech-logo {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.invert-logo {
  filter: invert(1) brightness(1.2);
}

/* --- KEYBOARD BOXES --- */
.key {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 1rem;
  height: 10rem;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 0.5rem;
}

.key:hover {
  border-color: #ec4899;
}

.keycap {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #e5e7eb;
  display: block;
}

.key-overlay { 
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(3, 7, 18, 0.95);
  opacity: 0; 
  transition: opacity 0.3s ease; 
  pointer-events: none;
}

/* Desktop Hover Effects */
@media (min-width: 769px) {
  .mobile-label { display: none; }
  .key:hover .key-overlay { opacity: 1; }
  .key:hover .keycap { opacity: 0.1; transform: scale(0.9); }
}

/* Responsive Mobile Screens */
@media (max-width: 768px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  .key {
    height: 8.5rem;
  }
  .tech-logo {
    width: 3.2rem;
    height: 3.2rem;
  }
  .key-overlay { display: none !important; }
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-box {
  background: #111827;
  border: 1px solid #ec4899;
  padding: 1.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 24rem;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
}

.close-btn:hover {
  color: #ec4899;
}

.modal-icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
}
</style>