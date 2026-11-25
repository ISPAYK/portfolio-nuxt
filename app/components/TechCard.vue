<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  titleClass: {
    type: String,
    default: 'text-pink-500'
  }
})

defineEmits(['select'])
</script>

<template>
  <div
    class="card bg-[#111827] border border-[#374151] hover:border-[#ec4899] transition-all duration-300 cursor-pointer relative overflow-hidden h-40 flex items-center justify-center group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,127,0.3)]"
    @click="$emit('select', item)"
  >
    <div class="card-body items-center justify-center p-4 transition-all duration-300 group-hover:opacity-10 group-hover:scale-90">
      <component
        :is="item.icon"
        v-if="item.icon"
        class="w-12 h-12"
        :class="item.colorClass"
      />
      <span class="font-orbitron text-sm font-semibold text-gray-200 md:hidden mt-2">
        {{ item.name }}
      </span>
    </div>

    <div class="hidden md:flex absolute inset-0 bg-[#030712]/95 flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <h3 class="font-bold font-orbitron text-base" :class="titleClass">{{ item.name }}</h3>
      <p class="text-xs text-center mt-1 text-gray-300">{{ item.subtitle }}</p>
    </div>
  </div>
</template>