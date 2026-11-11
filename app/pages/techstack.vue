<script setup>
import { ref } from 'vue'

useHead({
  title: 'Tech Stack | Harell Diaz'
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
    borderColor: '#3b82f6',
    titleClass: 'text-blue-500',
    gridType: 'grid-4',
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
    borderColor: '#22c55e',
    titleClass: 'text-green-500',
    gridType: 'grid-3',
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
          <!-- ICON / IMAGE -->
          <div class="keycap">
            <i v-if="item.iconType === 'boxicon'" :class="item.iconClass"></i>
            <img 
              v-else-if="item.iconType === 'image'" 
              :src="item.imageSrc" 
              :alt="item.imageAlt"
              class="c-img"
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
        >
          &times;
        </button>

        <div v-if="selectedItem" class="text-center mt-2">
          <div class="modal-icon-wrap">
            <i v-if="selectedItem.iconType === 'boxicon'" :class="[selectedItem.iconClass, 'text-5xl']"></i>
            <img 
              v-else-if="selectedItem.iconType === 'image'" 
              :src="selectedItem.imageSrc" 
              :alt="selectedItem.imageAlt"
              class="w-16 h-16 object-contain mx-auto"
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

/* --- ICON COLORS --- */
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

.c-img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
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
  font-size: 3.5rem;
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
  .keycap {
    font-size: 2.8rem;
  }
  .c-img {
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
  top: 0.5rem;
  right: 1rem;
  font-size: 1.875rem;
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