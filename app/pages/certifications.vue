<script setup>
useHead({
  title: 'Certifications | Harell Diaz'
})

// --- Certificate 1 (multi-page image switcher) ---
const certPages = [
  { label: 'Page 1', src: '/images/cert-page1.jpg' },
  { label: 'Page 2', src: '/images/cert-page2.jpg' }
]

const certSrc = ref(certPages[0].src)
const certAlt = ref('Software Engineering Certificate - Page 1')
const activePage = ref(certPages[0].label)

// --- Certificate 2 (single image) ---
const wordSrc = '/images/cert-word-page1.jpg'

// --- Full screen modal viewer ---
const modalOpen = ref(false)
const modalSrc = ref('')

// Updates the displayed image, its alt text (accessibility), and the active button
function switchPage(page) {
  certSrc.value = page.src
  certAlt.value = `Software Engineering Certificate - ${page.label}`
  activePage.value = page.label
}

function openModal(imageSrc) {
  modalSrc.value = imageSrc
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}
</script>

<template>
  <div>
    <section class="certifications">
      <h2 class="text-3xl md:text-5xl font-orbitron font-bold mb-2 text-center md:text-left">My <span class="text-[#ff00bb]">Certifications</span></h2>
      <p class="text-gray-400 text-sm md:text-base text-center md:text-left mb-6">A showcase of my credentials, academic achievements, and professional verifications.</p>

      <div class="cert-container">
        <div class="cert-box">
          <div class="cert-img-container">
            <img
              :src="certSrc"
              id="certDisplay"
              :alt="certAlt"
              @click="openModal(certSrc)"
            >

            <div class="page-controls">
              <button
                v-for="page in certPages"
                :key="page.label"
                type="button"
                class="page-btn"
                :class="{ active: activePage === page.label }"
                @click="switchPage(page)"
              >
                {{ page.label }}
              </button>
            </div>
          </div>

          <div class="cert-label text-left">
            <h3 class="font-orbitron">CS302: Software Engineering</h3>
            <p>Issued by: <strong>Saylor University</strong></p>
            <p>Grade: <strong>80.65%</strong> | <strong>36 Hours</strong></p>

            <div class="cert-buttons">
              <button type="button" class="btn-small fill font-orbitron" @click="openModal(certSrc)">View Work</button>
              <a href="https://learn.saylor.org/admin/tool/certificate/index.php" target="_blank" rel="noopener noreferrer" class="btn-small outline font-orbitron text-xs sm:text-sm">Verify ID: 3096369185HD</a>
            </div>
          </div>
        </div>

        <div class="cert-box">
          <div class="cert-img-container">
            <img
              :src="wordSrc"
              id="wordDisplay"
              alt="Microsoft Office Specialist"
              @click="openModal(wordSrc)"
            >
          </div>

          <div class="cert-label text-left">
            <h3 class="font-orbitron">Word Associate (Microsoft 365)</h3>
            <p>Issued by: <strong>Microsoft</strong></p>
            <p>Date: <strong>February 20, 2025</strong></p>

            <div class="cert-buttons">
              <button type="button" class="btn-small fill font-orbitron" @click="openModal(wordSrc)">View Work</button>
              <a href="https://www.credly.com/badges/e0c78ca6-54ba-4a0b-85a7-2dafb314b203/public_url" target="_blank" rel="noopener noreferrer" class="btn-small outline font-orbitron">Verify on Credly</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- display is set inline because the global .modal rule has display:none,
         which v-show could not override -->
    <div
      id="certModal"
      class="modal"
      :style="{ display: modalOpen ? 'flex' : 'none' }"
      @click.self="closeModal"
    >
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content" id="imgFull" :src="modalSrc || undefined" alt="Full View Certificate">
    </div>
  </div>
</template>

<style scoped>
.font-orbitron { font-family: 'Orbitron', sans-serif; }

/* --- CERTIFICATIONS LAYOUT CODES --- */
.certifications {
  padding: 100px 10% 4rem 10%;
  max-width: 1200px; /* was the invalid property "max-w" in the legacy file */
  margin: 0 auto;
  /* reset global section rule (min-height:100vh + flex column) */
  min-height: auto;
  display: block;
}
.cert-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;
}
.cert-box {
  display: flex;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 20px;
  padding: 2rem;
  gap: 2.5rem;
  align-items: center;
  transition: all 0.3s ease;
  /* reset leaked global .cert-box rules */
  flex-direction: row;
  max-width: none;
  text-align: inherit;
}
.cert-box:hover {
  border-color: #ff00bb;
  box-shadow: 0 0 20px rgba(255, 0, 187, 0.2);
  transform: none; /* reset leaked global hover lift */
}
.cert-img-container {
  flex: 1;
  position: relative;
  max-width: 400px;
  width: 100%;
  /* reset leaked global .cert-img-container rules */
  height: auto;
  overflow: visible;
  border: none;
  border-radius: 0;
  background: transparent;
  margin-bottom: 0;
}
.cert-img-container img {
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
.cert-img-container img:hover {
  transform: scale(1.02);
}
.page-controls {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
  /* reset leaked global .page-controls overlay rules */
  position: static;
  bottom: auto;
  left: auto;
  transform: none;
  background: transparent;
  padding: 0;
  border-radius: 0;
  z-index: auto;
}
.page-btn {
  padding: 0.4rem 1.2rem;
  background: #1f2937;
  border: 1px solid #4b5563;
  color: #fff;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s;
}
.page-btn.active, .page-btn:hover {
  background: #ff00bb;
  border-color: #ff00bb;
}
.cert-label {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.cert-label h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
}
.cert-label p {
  color: #9ca3af;
  font-size: 1rem;
}
.cert-label strong {
  color: #fff;
}
.cert-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: flex-start; /* reset leaked global center alignment */
}
.btn-small {
  padding: 0.8rem 1.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}
.btn-small.fill {
  background: linear-gradient(90deg, #ff007f, #ff00bb);
  color: #fff;
  border: none;
  box-shadow: 0 0 10px rgba(255, 0, 187, 0.3);
}
.btn-small.fill:hover {
  box-shadow: 0 0 20px rgba(255, 0, 187, 0.6);
  transform: scale(1.03);
}
.btn-small.outline {
  background: transparent;
  color: #ff00bb;
  border: 2px solid #ff00bb;
}
.btn-small.outline:hover {
  background: rgba(255, 0, 187, 0.1);
}

/* --- FULL SCREEN MODAL IMAGE VIEWER --- */
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}
.modal .modal-content {
  max-width: 90%;
  max-height: 85vh;
  border-radius: 8px;
  border: none; /* reset leaked global pink border */
  box-shadow: 0 0 30px rgba(255,0,187,0.3);
}
.close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}
.close:hover {
  color: #ff00bb;
}

/* --- RESPONSIVE LAYOUT SETUP PARA SA CELLPHONE --- */
@media (max-width: 768px) {
  .certifications {
    padding: 140px 5% 3rem 5%;
    text-align: center;
  }
  .cert-box {
    flex-direction: column;
    padding: 1.2rem;
    gap: 1.5rem;
  }
  .cert-img-container {
    max-width: 100%;
  }
  .cert-label h3 {
    font-size: 1.4rem;
  }
  .cert-buttons {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }
  .btn-small {
    width: 100%;
  }
  .close {
    top: 15px;
    right: 20px;
    font-size: 35px;
  }
}
</style>