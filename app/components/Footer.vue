<script setup>
import { Github, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer footer-center p-6 bg-[#0b0c10] text-gray-400 border-t border-gray-800">
    <aside class="flex flex-col sm:flex-row items-center gap-3">
      <p>© 2026 <span class="text-white font-semibold">Harell Diaz</span>. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a
          href="https://github.com/ISPAYK"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="text-gray-400 hover:text-[#ff00bb] transition-colors"
        >
          <Github class="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/harell-diaz-78494b40a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="text-gray-400 hover:text-[#00d2ff] transition-colors"
        >
          <Linkedin class="w-5 h-5" />
        </a>
      </div>
    </aside>
  </footer>
</template>