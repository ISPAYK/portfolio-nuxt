<script setup>
useHead({
  title: 'Contact | Harell Diaz'
})

useSeoMeta({
  title: 'Contact | Harell Diaz',
  description: 'Have a question or want to collaborate on a project? Send a message to Harell Diaz.'
})

// Form Handler Function
const handleSubmit = () => {
  alert("Message Sent! (Integrate your mail carrier logic here)")
}
</script>

<template>
  <div class="contact-page">
    <!-- Shared Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main>
      <section class="contact-section">
        <div class="contact-container">
          <h2 class="text-3xl md:text-5xl font-orbitron font-bold mb-3">
            Get In <span class="text-[#ff00bb]">Touch</span>
          </h2>
          <p class="text-gray-400 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
            Have a question or want to collaborate on a project? Send me a message!
          </p>

          <div class="contact-wrapper">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="input-box">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div class="input-box">
                <input type="number" placeholder="Mobile Number" />
                <input type="text" placeholder="Email Subject" />
              </div>
              <textarea name="message" placeholder="Your Message" required></textarea>
              
              <button type="submit" class="btn-send font-orbitron">Send Message</button>
            </form>

            <div class="contact-info text-left">
              <h3 class="font-orbitron font-bold text-xl border-l-4 border-[#ff00bb] pl-3">
                Connect with me
              </h3>
              <div class="social-icons">
                <a 
                  href="https://www.linkedin.com/in/harell-diaz-78494b40a" 
                  class="linkedin" 
                  target="_blank"
                >
                  <div class="icon text-blue-400"><i class="bx bxl-linkedin"></i></div>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/ISPAYK" 
                  class="github" 
                  target="_blank"
                >
                  <div class="icon text-white"><i class="bx bxl-github"></i></div>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Shared Footer Component -->
    <Footer />
  </div>
</template>

<style scoped>
.font-orbitron { font-family: "Orbitron", sans-serif; }

.contact-page {
  background-color: #0b0c10;
  color: #fff;
  min-height: 100vh;
}

.contact-section {
  padding: 60px 10% 4rem 10%;
  max-width: 1300px; 
  margin: 0 auto;
}
.contact-container {
  width: 100%;
}
.contact-wrapper {
  display: flex;
  gap: 5rem; 
  margin-top: 3rem;
  align-items: flex-start;
}
.contact-form {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}
.input-box {
  display: flex;
  gap: 1.5rem;
  width: 100%;
}
.input-box input, .contact-form textarea {
  width: 100%;
  padding: 1.2rem;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}
.input-box input:focus, .contact-form textarea:focus {
  border-color: #ff00bb;
  box-shadow: 0 0 15px rgba(255, 0, 187, 0.5);
}
.contact-form textarea {
  resize: none;
  height: 200px;
}
.btn-send {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(90deg, #ff007f, #ff00bb);
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 0, 187, 0.4);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  align-self: flex-start;
}
.btn-send:hover {
  box-shadow: 0 0 25px rgba(255, 0, 187, 0.8);
  transform: scale(1.02);
}

.contact-info {
  flex: 1; 
  width: 100%;
}
.contact-info h3 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
}

.social-icons {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
  width: 100%;
}
.social-icons a {
  display: flex;
  align-items: center;
  gap: 2rem; 
  color: #fff;
  padding: 1.2rem 2rem; 
  background: #111827;
  border: 1px solid #374151;
  border-radius: 16px; 
  transition: all 0.3s ease;
  width: 100%; 
  box-sizing: border-box;
  text-decoration: none;
}

.social-icons .icon {
  font-size: 2.2rem; 
  display: flex;
  align-items: center;