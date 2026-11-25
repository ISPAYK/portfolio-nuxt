<script setup>
import { ref } from 'vue'
import { Eye, ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  details: { type: String, required: true },
  pages: { type: Array, required: true },
  verifyUrl: { type: String, required: true },
  verifyLabel: { type: String, required: true }
})

defineEmits(['open-modal'])

const activePageIndex = ref(0)
</script>

<template>
  <div class="card lg:card-side bg-[#111827] border border-[#374151] hover:border-[#ff00bb] hover:shadow-[0_0_20px_rgba(255,0,187,0.2)] transition-all duration-300 p-6 gap-8 items-center">
    <figure class="flex-1 flex flex-col max-w-[400px] w-full">
      <img
        :src="pages[activePageIndex].src"
        :alt="`${title} - ${pages[activePageIndex].label}`"
        class="w-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-lg"
        @click="$emit('open-modal', pages[activePageIndex].src)"
      />

      <div v-if="pages.length > 1" class="flex justify-center gap-3 mt-4">
        <button
          v-for="(page, idx) in pages"
          :key="page.label"
          @click="activePageIndex = idx"
          class="btn btn-sm font-orbitron border"
          :class="activePageIndex === idx
            ? 'bg-[#ff00bb] border-[#ff00bb] text-white'
            : 'bg-[#1f2937] border-[#4b5563] text-white hover:bg-[#ff00bb] hover:border-[#ff00bb]'"
        >
          {{ page.label }}
        </button>
      </div>
    </figure>

    <div class="card-body flex-[1.2] p-0 text-left gap-3">
      <h3 class="card-title font-orbitron text-2xl md:text-3xl text-white">{{ title }}</h3>
      <p class="text-gray-400 text-base">Issued by: <strong class="text-white">{{ issuer }}</strong></p>
      <p class="text-gray-400 text-base" v-html="details"></p>

      <div class="card-actions mt-4 flex flex-wrap gap-3">
        <button
          @click="$emit('open-modal', pages[activePageIndex].src)"
          class="btn bg-gradient-to-r from-[#ff007f] to-[#ff00bb] border-none text-white font-orbitron hover:shadow-[0_0_20px_rgba(255,0,187,0.6)]"
        >
          <Eye class="w-4 h-4 mr-1" />
          View Work
        </button>
        <a
          :href="verifyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline border-2 border-[#ff00bb] text-[#ff00bb] hover:bg-[#ff00bb]/10 hover:border-[#ff00bb] hover:text-[#ff00bb] font-orbitron text-xs sm:text-sm"
        >
          <ExternalLink class="w-4 h-4 mr-1" />
          {{ verifyLabel }}
        </a>
      </div>
    </div>
  </div>
</template>