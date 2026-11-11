<script setup>
useHead({
  title: 'About Me | Harell Diaz'
})
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <h2 class="about-title font-orbitron">
        About <span class="highlight-me">Me</span>
      </h2>

      <div class="about-text-content">
        <p>
          I am a highly motivated aspiring web developer with a strong focus on creating interactive and user-friendly digital experiences. Even outside of my formal education, I actively dedicate my time to learning modern design principles and mastering new programming tools. I believe that being a developer requires a mix of logical thinking and creative problem-solving skills. My goal is to build a solid foundation in the tech industry through hard work and continuous self-improvement.
        </p>

        <p>
          I aspire to become a professional Full-Stack Developer who can lead innovative projects in a fast-paced corporate environment. My dream is to work with international teams where I can apply my technical knowledge to build applications that make a difference. I am committed to staying updated with the latest industry standards to ensure high-quality work in my future career.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

.about-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 1.5rem 4rem 1.5rem;
  box-sizing: border-box;
}

.about-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.about-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 3rem;
  letter-spacing: 2px;
}

.highlight-me {
  color: #ff00bb;
  text-shadow: 0 0 15px rgba(255, 0, 187, 0.8), 0 0 30px rgba(255, 0, 187, 0.5);
}

.about-text-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #d1d5db;
  font-size: 1.125rem;
  line-height: 1.8;
  text-align: justify;
}

.about-text-content p {
  transition: color 0.3s ease;
}

.about-text-content p:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .about-section {
    padding-top: 140px;
  }
  .about-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  .about-text-content {
    font-size: 1rem;
    text-align: left;
  }
}
</style>