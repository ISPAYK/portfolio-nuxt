<script setup>
useHead({
  title: 'About Me | Harell Diaz',
  bodyAttrs: { class: 'about-page' }
})
</script>

<template>
  <section class="max-w-4xl mx-auto py-20 px-6 text-center" id="about">
    <h2 class="text-5xl md:text-6xl font-orbitron font-bold mb-12 tracking-wide">
      About <span class="text-pink-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(255,0,187,0.6)]">Me</span>
    </h2>

    <div class="about-container space-y-6 text-gray-300 text-base md:text-lg leading-relaxed text-justify max-w-3xl mx-auto">
      <p class="transition-all hover:text-white duration-300">
        I am a highly motivated aspiring web developer with a strong focus on creating interactive and user-friendly digital experiences. Even outside of my formal education, I actively dedicate my time to learning modern design principles and mastering new programming tools. I believe that being a developer requires a mix of logical thinking and creative problem-solving skills. My goal is to build a solid foundation in the tech industry through hard work and continuous self-improvement.
      </p>

      <p class="transition-all hover:text-white duration-300">
        I aspire to become a professional Full-Stack Developer who can lead innovative projects in a fast-paced corporate environment. My dream is to work with international teams where I can apply my technical knowledge to build applications that make a difference. I am committed to staying updated with the latest industry standards to ensure high-quality work in my future career.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Global main.css gives every <section> min-height:100vh and a flex column layout.
   The legacy About page didn't load that file, so restore normal block flow here. */
#about {
  min-height: auto;
  display: block;
}
</style>