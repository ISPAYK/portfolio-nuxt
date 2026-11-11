<script setup>
import { ref } from 'vue'

useHead({
  title: 'Certifications | Harell Diaz'
})

// Data list para sa mga sertipikasyon
const certs = ref([
  {
    id: 1,
    title: 'CS302: Software Engineering',
    issuer: 'Saylor University',
    grade: '80.65%',
    hours: '36 Hours',
    image: '/images/cs302.png', // Siguraduhing tama ang path ng image sa public/images/
    verifyUrl: 'https://learn.saylor.org/mod/customcert/verify_certificate.php',
    verifyId: '3096369185HD',
    projectUrl: '/techstack'
  },
  {
    id: 2,
    title: 'Web Development Fundamentals',
    issuer: 'Saylor University',
    grade: 'Passed',
    hours: '40 Hours',
    image: '/images/webdev.png',
    verifyUrl: '#',
    verifyId: 'VERIFY-ID-HERE',
    projectUrl: '/techstack'
  }
])

const activePageIndex = ref(0)

function setPage(index) {
  activePageIndex.value = index
}
</script>

<template>
  <section class="cert-section">
    <div class="cert-container">
      <h2 class="section-title font-orbitron">
        My <span class="highlight-pink">Certifications</span>
      </h2>
      <p class="section-subtitle">
        A showcase of my credentials, academic achievements, and professional verifications.
      </p>

      <!-- CERTIFICATE CARD CONTAINER -->
      <div v-if="certs[activePageIndex]" class="cert-card">
        <div class="cert-preview-box">
          <img 
            :src="certs[activePageIndex].image" 
            :alt="certs[activePageIndex].title" 
            class="cert-img"
            @error="(e) => e.target.src = 'https://via.placeholder.com/600x420/111827/ff00bb?text=Certificate+Preview'"
          />
        </div>

        <div class="cert-details">
          <h3 class="cert-title font-orbitron">{{ certs[activePageIndex].title }}</h3>
          <p class="cert-meta">
            Issued by: <span class="font-semibold text-white">{{ certs[activePageIndex].issuer }}</span>
          </p>
          <p class="cert-meta">
            Grade: <span class="font-bold text-white">{{ certs[activePageIndex].grade }}</span> 
            <span class="mx-2 text-gray-500">|</span> 
            <span class="font-bold text-white">{{ certs[activePageIndex].hours }}</span>
          </p>

          <div class="cert-actions">
            <NuxtLink :to="certs[activePageIndex].projectUrl" class="btn-primary font-orbitron">
              View Work
            </NuxtLink>
            <a 
              :href="certs[activePageIndex].verifyUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-outline font-orbitron"
            >
              Verify ID: {{ certs[activePageIndex].verifyId }}
            </a>
          </div>
        </div>
      </div>

      <!-- PAGINATION BUTTONS -->
      <div class="pagination-box">
        <button 
          v-for="(cert, index) in certs" 
          :key="cert.id"
          class="page-btn font-orbitron"
          :class="{ active: activePageIndex === index }"
          @click="setPage(index)"
        >
          Page {{ index + 1 }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

.cert-section {
  min-height: 100vh;
  padding: 120px 1.5rem 4rem 1.5rem;
  box-sizing: border-box;
}

.cert-container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.highlight-pink {
  color: #ff00bb;
  filter: drop-shadow(0 0 12px rgba(255, 0, 187, 0.6));
}

.section-subtitle {
  color: #9ca3af;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
}

/* CARD CONTAINER */
.cert-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
}

.cert-preview-box {
  flex: 1.1;
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(255, 0, 187, 0.15);
}

.cert-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.cert-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cert-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
}

.cert-meta {
  color: #9ca3af;
  font-size: 1.05rem;
}

.cert-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.btn-primary {
  padding: 0.75rem 1.75rem;
  background: linear-gradient(90deg, #ff007f, #ff00bb);
  color: #fff;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 0, 187, 0.4);
}

.btn-primary:hover {
  box-shadow: 0 0 25px rgba(255, 0, 187, 0.8);
  transform: translateY(-2px);
}

.btn-outline {
  padding: 0.75rem 1.5rem;
  border: 1px solid #ff00bb;
  color: #ff00bb;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: rgba(255, 0, 187, 0.05);
}

.btn-outline:hover {
  background: #ff00bb;
  color: #fff;
  box-shadow: 0 0 20px rgba(255, 0, 187, 0.6);
  transform: translateY(-2px);
}

/* PAGINATION */
.pagination-box {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}

.page-btn {
  padding: 0.5rem 1.5rem;
  background: #1e293b;
  border: 1px solid #334155;
  color: #9ca3af;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.page-btn.active,
.page-btn:hover {
  background: #ff00bb;
  color: #fff;
  border-color: #ff00bb;
  box-shadow: 0 0 15px rgba(255, 0, 187, 0.5);
}

/* RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .cert-card {
    flex-direction: column;
    padding: 1.5rem;
  }
  .cert-preview-box, .cert-details {
    width: 100%;
  }
  .cert-title {
    font-size: 1.5rem;
  }
  .btn-primary, .btn-outline {
    width: 100%;
    text-align: center;
  }
}
</style>