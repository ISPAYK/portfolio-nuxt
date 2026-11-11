<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Tech Stack | Harell Diaz',
  htmlAttrs: {
    style: '--nav-glow: #ff007f; --nav-secondary: #00d2ff;'
  }
})

// Dynamic categories batay sa orihinal mong techstack.html
const techCategories = ref([
  {
    name: 'Programming Languages',
    borderColor: 'border-pink-500',
    hoverColor: 'hover:border-pink-500',
    titleColor: 'text-pink-500',
    gridClass: 'grid-cols-2 md:grid-cols-3',
    items: [
      {
        id: 1,
        name: 'Java',
        iconType: 'boxicon',
        iconClass: 'bx bxl-java icon-java',
        subtitle: 'Robust backend logic',
        description: 'Used for object-oriented programming and building robust backend logic.'
      },
      {
        id: 2,
        name: 'Python',
        iconType: 'boxicon',
        iconClass: 'bx bxl-python icon-python',
        subtitle: 'Scripting & Data Analysis',
        description: 'Applied for scripting, data analysis, and simplifying complex automation tasks.'
      },
      {
        id: 3,
        name: 'C Language',
        iconType: 'image',
        imageSrc: '/images/c.png',
        imageAlt: 'C Language Logo',
        subtitle: 'Memory management',
        description: 'Foundational knowledge in memory management and systems-level programming.'
      }
    ]
  },
  {
    name: 'Web & Database',
    borderColor: 'border-blue-500',
    hoverColor: 'hover:border-blue-500',
    titleColor: 'text-blue-500',
    gridClass: 'grid-cols-2 md:grid-cols-4',
    items: [
      {
        id: 4,
        name: 'HTML',
        iconType: 'boxicon',
        iconClass: 'bx bxl-html5 icon-html',
        subtitle: 'Web Structure',
        description: 'Creating the structural foundation of responsive web pages.'
      },
      {
        id: 5,
        name: 'CSS',
        iconType: 'boxicon',
        iconClass: 'bx bxl-css3 icon-css',
        subtitle: 'Modern Layouts',
        description: 'Designing modern layouts with animations, flexbox, and grid.'
      },
      {
        id: 6,
        name: 'JavaScript',
        iconType: 'boxicon',
        iconClass: 'bx bxl-javascript icon-javascript',
        subtitle: 'Interactivity',
        description: 'Adding interactivity and dynamic functionality.'
      },
      {
        id: 7,
        name: 'PostgreSQL',
        iconType: 'boxicon',
        iconClass: 'bx bxl-postgresql icon-postgresql',
        subtitle: 'Relational DB',
        description: 'Advanced relational database management system.'
      }
    ]
  },
  {
    name: 'Tools & Version Control',
    borderColor: 'border-green-500',
    hoverColor: 'hover:border-green-500',
    titleColor: 'text-green-500',
    gridClass: 'grid-cols-2 md:grid-cols-3',
    items: [
      {
        id: 8,
        name: 'VS Code',
        iconType: 'boxicon',
        iconClass: 'bx bxl-visual-studio icon-vs',
        subtitle: 'Main Code Editor',
        description: 'Primary code editor for development.'
      },
      {
        id: 9,
        name: 'Android Studio',
        iconType: 'boxicon',
        iconClass: 'bx bxl-android icon-android',
        subtitle: 'Mobile Dev',
        description: 'IDE for high-performance Android applications.'
      },
      {
        id: 10,
        name: 'SSMS',
        iconType: 'image',
        imageSrc: '/images/ssms.png',
        imageAlt: 'SSMS Logo',
        subtitle: 'SQL Server Admin',
        description: 'SQL Server Management Studio for database administration.'
      },
      {
        id: 11,
        name: 'Oracle APEX',
        iconType: 'boxicon',
        iconClass: 'bx bx-cloud icon-oracle',
        subtitle: 'Low-Code Platform',
        description: 'Low-code platform for building enterprise database apps.'
      },
      {
        id: 12,
        name: 'Git',
        iconType: 'boxicon',
        iconClass: 'bx bxl-git icon-git',
        subtitle: 'Version Control',
        description: 'Version control and tracking history of changes.'
      },
      {
        id: 13,
        name: 'GitHub',
        iconType: 'boxicon',
        iconClass: 'bx bxl-github icon-github',
        subtitle: 'Collaboration',
        description: 'Hosting repositories, cloud backup, and code collaboration.'
      }
    ]
  }
])

// Modal State
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
  <section class="max-w-6xl mx-auto py-12 px-4 sm:px-6 pt-28" id="tech">
    <h2 class="text-3xl md:text-4xl font-orbitron text-center mb-2">
      My <span class="text-[#ff00bb] drop-shadow-[0_0_10px_rgba(255,0,187,0.4)]">Tech Stack</span>
    </h2>
    <p class="text-center text-gray-400 mb-10 text-sm md:text-base">Tap or click cards to view full details</p>

    <!-- CATEGORIES LOOP -->
    <div 
      v-for="category in techCategories" 
      :key="category.name" 
      class="mb-12"
    >
      <h3 
        class="text-1xl md:text-2xl font-orbitron mb-6 border-l-4 pl-4"
        :class="category.borderColor"
      >
        {{ category.name }}
      </h3>

      <div class="grid gap-4 md:gap-6" :class="category.gridClass">
        <div
          v-for="item in category.items"
          :key="item.id"
          class="key"
          :class="category.hoverColor"
          @click="openModal(item)"
        >
          <!-- ICON / IMAGE -->
          <div class="keycap">
            <i v-if="item.iconType === 'boxicon'" :class="item.iconClass"></i>
            <img 
              v-else-if="item.iconType === 'image'" 
              :src="item.imageSrc" 
              :alt="item.imageAlt"
              class="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
          </div>

          <!-- MOBILE LABEL -->
          <div class="mobile-label font-orbitron">{{ item.name }}</div>

          <!-- HOVER OVERLAY (DESKTOP) -->
          <div class="key-overlay">
            <h3 class="font-bold font-orbitron" :class="category.titleColor">{{ item.name }}</h3>
            <p class="text-xs text-center mt-1 text-gray-300">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE / CLICK MODAL -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div class="bg-gray-900 p-6 rounded-2xl w-full max-w-sm border border-pink-500 relative mx-4">
        <button 
          class="absolute top-2 right-4 text-3xl text-white hover:text-pink-500 transition cursor-pointer"
          @click="closeModal"
        >
          &times;
        </button>

        <div v-if="selectedItem" class="mt-4 text-center">
          <div class="flex justify-center mb-4">
            <i v-if="selectedItem.iconType === 'boxicon'" :class="[selectedItem.iconClass, 'text-6xl']"></i>
            <img 
              v-else-if="selectedItem.iconType === 'image'" 
              :src="selectedItem.imageSrc" 
              :alt="selectedItem.imageAlt"
              class="w-16 h-16 object-contain"
            />
          </div>
          <h3 class="text-2xl font-bold font-orbitron text-pink-500 mb-2">{{ selectedItem.name }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{{ selectedItem.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-orbitron { font-family: "Orbitron", sans-serif; }

/* --- TECH STACK LOGO COLORS --- */
.icon-java { color: #f89820; }
.icon-python { color: #3776ab; }
.icon-html { color: #e34f26; }
.icon-css { color: #1572b6; }
.icon-javascript { color: #f7df1e; }
.icon-postgresql { color: #336791; }
.icon-vs { color: #007acc; }
.icon-android { color: #3ddc84; }
.icon-oracle { color: #f80000; }
.icon-git { color: #f05032; }
.icon-github { color: #fff; }

/* --- KEYBOARD STYLE BOXES --- */
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
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 0.5rem;
}

.keycap {
  font-size: 3.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-label {
  font-size: 1rem;
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
  .key {
    height: 8.5rem;
  }
  .keycap {
    font-size: 2.8rem;
  }
  .key-overlay { display: none !important; }
}
</style>