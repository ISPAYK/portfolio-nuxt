<script setup>
import { ref } from 'vue'

useHead({
  title: 'Tech Stack | Harell Diaz'
})

useSeoMeta({
  title: 'Tech Stack | Harell Diaz',
  description: 'Technologies, programming languages, and development tools used by Harell Diaz.'
})

// Reactive Modal Control
const isModalOpen = ref(false)
const modalContent = ref({ title: '', description: '' })

const openModal = (title, description) => {
  modalContent.value = { title, description }
  isModalOpen.value = true
}

const closeModal = (event) => {
  if (event.target.classList.contains('modal-backdrop') || event.target.classList.contains('close-btn')) {
    isModalOpen.value = false
  }
}
</script>

<template>
  <div class="techstack-page">
    <!-- Shared Navbar Component -->
    <Navbar />

    <!-- Main Tech Stack Content -->
    <main>
      <section class="max-w-6xl mx-auto py-12 px-4 sm:px-6" id="tech">
        <h2 class="text-3xl md:text-4xl font-orbitron text-center mb-2">
          My <span class="text-[#ff00bb] drop-shadow-[0_0_10px_rgba(255,0,187,0.4)]">Tech Stack</span>
        </h2>
        <p class="text-center text-gray-400 mb-10 text-sm md:text-base">
          Tap or click cards to view full details
        </p>

        <!-- Programming Languages -->
        <h3 class="text-xl md:text-2xl font-orbitron mb-6 border-l-4 border-pink-500 pl-4">
          Programming Languages
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <div 
            class="key hover:border-pink-500" 
            @click="openModal('Java', 'Used for object-oriented programming and building robust backend logic.')"
          >
            <div class="keycap"><i class="bx bxl-java icon-java"></i></div>
            <div class="mobile-label font-orbitron">Java</div>
            <div class="key-overlay">
              <h3 class="font-bold text-pink-500 font-orbitron">Java</h3>
              <p class="text-xs text-center mt-1">Robust backend logic</p>
            </div>
          </div>

          <div 
            class="key hover:border-pink-500" 
            @click="openModal('Python', 'Applied for scripting, data analysis, and simplifying complex automation tasks.')"
          >
            <div class="keycap"><i class="bx bxl-python icon-python"></i></div>
            <div class="mobile-label font-orbitron">Python</div>
            <div class="key-overlay">
              <h3 class="font-bold text-pink-500 font-orbitron">Python</h3>
              <p class="text-xs text-center mt-1">Scripting & Data Analysis</p>
            </div>
          </div>

          <div 
            class="key hover:border-pink-500" 
            @click="openModal('C Language', 'Foundational knowledge in memory management and systems-level programming.')"
          >
            <div class="keycap">
              <img src="/images/c.png" class="w-14 h-14 md:w-16 md:h-16 object-contain" alt="C Language Logo" />
            </div>
            <div class="mobile-label font-orbitron">C Language</div>
            <div class="key-overlay">
              <h3 class="font-bold text-pink-500 font-orbitron">C Language</h3>
              <p class="text-xs text-center mt-1">Memory management</p>
            </div>
          </div>
        </div>

        <!-- Web & Database -->
        <h3 class="text-xl md:text-2xl font-orbitron mb-6 border-l-4 border-blue-500 pl-4">
          Web & Database
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div 
            class="key hover:border-blue-500" 
            @click="openModal('HTML', 'Creating the structural foundation of responsive web pages.')"
          >
            <div class="keycap"><i class="bx bxl-html5 icon-html"></i></div>
            <div class="mobile-label font-orbitron">HTML</div>
            <div class="key-overlay">
              <h3 class="font-bold text-blue-500 font-orbitron">HTML</h3>
              <p class="text-xs text-center mt-1">Web Structure</p>
            </div>
          </div>

          <div 
            class="key hover:border-blue-500" 
            @click="openModal('CSS', 'Designing modern layouts with animations, flexbox, and grid.')"
          >
            <div class="keycap"><i class="bx bxl-css3 icon-css"></i></div>
            <div class="mobile-label font-orbitron">CSS</div>
            <div class="key-overlay">
              <h3 class="font-bold text-blue-500 font-orbitron">CSS</h3>
              <p class="text-xs text-center mt-1">Modern Layouts</p>
            </div>
          </div>

          <div 
            class="key hover:border-blue-500" 
            @click="openModal('JavaScript', 'Adding interactivity and dynamic functionality.')"
          >
            <div class="keycap"><i class="bx bxl-javascript icon-javascript"></i></div>
            <div class="mobile-label font-orbitron">JavaScript</div>
            <div class="key-overlay">
              <h3 class="font-bold text-blue-500 font-orbitron">JavaScript</h3>
              <p class="text-xs text-center mt-1">Interactivity</p>
            </div>
          </div>

          <div 
            class="key hover:border-blue-500" 
            @click="openModal('PostgreSQL', 'Advanced relational database management system.')"
          >
            <div class="keycap"><i class="bx bxl-postgresql icon-postgresql"></i></div>
            <div class="mobile-label font-orbitron">PostgreSQL</div>
            <div class="key-overlay">
              <h3 class="font-bold text-blue-500 font-orbitron">PostgreSQL</h3>
              <p class="text-xs text-center mt-1">Relational DB</p>
            </div>
          </div>
        </div>

        <!-- Tools & Version Control -->
        <h3 class="text-xl md:text-2xl font-orbitron mb-6 border-l-4 border-green-500 pl-4">
          Tools & Version Control
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div 
            class="key hover:border-green-500" 
            @click="openModal('VS Code', 'Primary code editor for development.')"
          >
            <div class="keycap"><i class="bx bxl-visual-studio icon-vs"></i></div>
            <div class="mobile-label font-orbitron">VS Code</div>
            <div class="key-overlay">
              <h3 class="font-bold text-green-500 font-orbitron">VS Code</h3>
              <p class="text-xs text-center mt-1">Main Code Editor</p>
            </div>
          </div>

          <div 
            class="key hover:border-green-500" 
            @click="openModal('Android Studio', 'IDE for high-performance Android applications.')"
          >
            <div class="keycap"><i class="bx bxl-android icon-android"></i></div>
            <div class="mobile-label font-orbitron">Android Studio</div>
            <div class="key-overlay">
              <h3 class="font-bold text-green-500 font-orbitron">Android Studio</h3>
              <p class="text-xs text-center mt-1">Mobile Dev</p>
            </div>
          </div>

          <div 
            class="key hover:border-green-500" 
            @click="openModal('SSMS', 'SQL Server Management Studio for database administration.')"
          >
            <div class="keycap">
              <img src="/images/ssms.png" class="w-14 h-14 md:w-16 md:h-16 object-contain" alt="SSMS Logo" />
            </div>
            <div class="mobile-label font-orbitron">SSMS</div>
            <div class="key-overlay">
              <h3 class="font-bold text-green-500 font-orbitron">SSMS</h3>
              <p class="text-xs text-center mt-1">SQL Server Admin</p>
            </div>
          </div>

          <div 
            class="key hover:border-green-500" 
            @click="openModal('Oracle APEX', 'Low-code platform for building enterprise database apps.')"
          >
            <div class="keycap"><i class="bx bx-cloud icon-oracle"></i></div>
            <div class="mobile-label font-orbitron">Oracle APEX</div>
            <div class="key-overlay">
              <h3 class="font-bold text-green-500 font-orbitron">Oracle APEX</h3>
              <p class="text-xs text-center mt-1">Low-Code Platform</p>
            </div>
          </div>

          <div 
            class="key hover:border-green-500" 
            @click="openModal('Git', 'Version control and tracking history of changes.')"
          >
            <div class="keycap"><i class="bx bxl-git icon-git"></i></div>
            <div class="mobile-label font-orbitron">Git</div>
            <div class="key-overlay">
              <h3 class="font-bold text-green-500 font-orbitron">Git</h3>
              <p class="text-xs text-center mt-1">Version Control</p>
            </div>
          </div>

          <div 
            class="key hover:border-green-500" 
            @click="openModal('GitHub', 'Hosting repositories, cloud backup, and code collaboration.')"
          >
            <div class="keycap"><i class="bx bxl-github icon-github"></i></div>
            <div class="mobile-label font-orbitron">GitHub</div>
            <div class="key-overlay">
              <h3 class="font-bold text-green-500 font-orbitron">GitHub</h3>
              <p class="text-xs text-center mt-1">Collaboration</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Modal Popup Details -->
    <div 
      v-if="isModalOpen" 
      class="modal-backdrop fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
      @click="closeModal"
    >
      <div class="bg-gray-900 p-6 rounded-2xl w-full max-w-sm border border-pink-500 relative mx-4 text-center">
        <button 
          class="close-btn absolute top-2 right-4 text-3xl text-white hover:text-pink-500 transition" 
          @click="closeModal"
        >
          &times;
        </button>
        <div class="mt-4 space-y-2">
          <h3 class="font-bold text-2xl text-pink-500 font-orbitron">{{ modalContent.title }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{{ modalContent.description }}</p>
        </div>
      </div>
    </div>

    <!-- Shared Footer Component -->
    <Footer />
  </div>
</template>

<style scoped>
.font-orbitron { font-family: "Orbitron", sans-serif; }

.techstack-page {
  background-color: #0b0c10;
  color: #fff;
  min-height: 100vh;
}

/* LOGO COLORS */
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

/* KEYBOARD CARD STYLES */
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

@media (min-width: 769px) {
  .mobile-label { display: none; }
  .key:hover .key-overlay { opacity: 1; }
  .key:hover .keycap { opacity: 0.1; transform: scale(0.9); }
}

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