<script setup>
import { ref } from 'vue'

useHead({
  title: 'Certifications | Harell Diaz'
})

// Reactive State para sa Image Switcher (Saylor Certificate) & Modal
const currentSaylorImg = ref('/images/cert-page1.jpg')
const currentSaylorAlt = ref('Software Engineering Certificate - Page 1')
const activePage = ref(1)

const isModalOpen = ref(false)
const modalImgSrc = ref('')

const switchPage = (imageSrc, pageName, pageNum) => {
  currentSaylorImg.value = imageSrc
  currentSaylorAlt.value = `Software Engineering Certificate - ${pageName}`
  activePage.value = pageNum
}

const openModal = (imageSrc) => {
  modalImgSrc.value = imageSrc
  isModalOpen.value = true
}

const closeModal = (event) => {
  if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
    isModalOpen.value = false
  }
}
</script>

<template>
  <div class="certifications-page">
    <main>
      <section class="certifications">
        <h2 class="section-title font-orbitron">
          My <span class="highlight-pink">Certifications</span>
        </h2>
        <p class="section-subtitle">
          A showcase of my credentials, academic achievements, and professional verifications.
        </p>

        <div class="cert-container">
          <!-- Cert Box 1: Saylor -->
          <div class="cert-box">
            <div class="cert-img-container">
              <img 
                :src="currentSaylorImg" 
                :alt="currentSaylorAlt" 
                @click="openModal(currentSaylorImg)"
              />
              
              <div class="page-controls">
                <button 
                  @click="switchPage('/images/cert-page1.jpg', 'Page 1', 1)" 
                  :class="['page-btn', { active: activePage === 1 }]"
                >
                  Page 1
                </button>
                <button 
                  @click="switchPage('/images/cert-page2.jpg', 'Page 2', 2)" 
                  :class="['page-btn', { active: activePage === 2 }]"
                >
                  Page 2
                </button>
              </div>
            </div>

            <div class="cert-label">
              <h3 class="font-orbitron">CS302: Software Engineering</h3>
              <p>Issued by: <strong>Saylor University</strong></p>
              <p>Grade: <strong>80.65%</strong> | <strong>36 Hours</strong></p>
              
              <div class="cert-buttons">
                <button @click="openModal(currentSaylorImg)" class="btn-small fill font-orbitron">
                  View Work
                </button>
                <a 
                  href="https://learn.saylor.org/admin/tool/certificate/index.php" 
                  target="_blank" 
                  class="btn-small outline font-orbitron"
                >
                  Verify ID: 3096369185HD
                </a>
              </div>
            </div>
          </div>

          <!-- Cert Box 2: Microsoft -->
          <div class="cert-box">
            <div class="cert-img-container">
              <img 
                src="/images/cert-word-page1.jpg" 
                alt="Microsoft Office Specialist" 
                @click="openModal('/images/cert-word-page1.jpg')"
              />
            </div>

            <div class="cert-label">
              <h3 class="font-orbitron">Word Associate (Microsoft 365)</h3>
              <p>Issued by: <strong>Microsoft</strong></p>
              <p>Date: <strong>February 20, 2025</strong></p>
              
              <div class="cert-buttons">
                <button @click="openModal('/images/cert-word-page1.jpg')" class="btn-small fill font-orbitron">
                  View Work
                </button>
                <a 
                  href="https://www.credly.com/badges/e0c78ca6-54ba-4a0b-85a7-2dafb314b203/public_url" 
                  target="_blank" 
                  class="btn-small outline font-orbitron"
                >
                  Verify on Credly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Modal View -->
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content" :src="modalImgSrc" alt="Full View Certificate" />
    </div>
  </div>
</template>

<style scoped>
.font-orbitron { font-family: 'Orbitron', sans-serif; }

.certifications-page {
  background-color: #0b0c10;
  color: #fff;
  min-height: 100vh;
}

.certifications {
  padding: 120px 10% 4rem 10%;
  max-width: 1250px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.highlight-pink {
  color: #ff00bb;
  filter: drop-shadow(0 0 15px rgba(255, 0, 187, 0.6));
}

.section-subtitle {
  color: #9ca3af;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.cert-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
}

.cert-box {
  display: flex;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 20px;
  padding: 2rem;
  gap: 3rem;
  align-items: center;
  transition: all 0.3s ease;
}

.cert-box:hover {
  border-color: #ff00bb;
  box-shadow: 0 0 25px rgba(255, 0, 187, 0.25);
}

.cert-img-container {
  flex: 0 0 380px;
  position: relative;
  width: 380px;
}

.cert-img-container img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
}

.cert-img-container img:hover {
  transform: scale(1.02);
}

.page-controls {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
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
  box-shadow: 0 0 10px rgba(255, 0, 187, 0.5);
}

.cert-label {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
}

.cert-label h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

.cert-label p {
  color: #9ca3af;
  font-size: 1.05rem;
}

.cert-label strong {
  color: #fff;
}

.cert-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
}

.btn-small {
  padding: 0.75rem 1.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-small.fill {
  background: linear-gradient(90deg, #ff007f, #ff00bb);
  color: #fff;
  border: none;
  box-shadow: 0 0 12px rgba(255, 0, 187, 0.4);
}

.btn-small.fill:hover {
  box-shadow: 0 0 25px rgba(255, 0, 187, 0.8);
  transform: translateY(-2px);
}

.btn-small.outline {
  background: transparent;
  color: #ff00bb;
  border: 1px solid #ff00bb;
  box-shadow: 0 0 8px rgba(255, 0, 187, 0.2);
}

.btn-small.outline:hover {
  background: rgba(255, 0, 187, 0.1);
  box-shadow: 0 0 18px rgba(255, 0, 187, 0.6);
  transform: translateY(-2px);
}

/* Modal View */
.modal {
  display: flex;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.modal-content {
  max-width: 90%;
  max-height: 85vh;
  border-radius: 8px;
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
}

.close:hover {
  color: #ff00bb;
}

@media (max-width: 900px) {
  .certifications {
    padding: 100px 5% 3rem 5%;
  }
  .cert-box {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  .cert-img-container {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
  .cert-label {
    text-align: center;
  }
  .cert-buttons {
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .btn-small {
    width: 100%;
  }
}
</style>