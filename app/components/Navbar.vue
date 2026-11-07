<template>
  <div class="navbar bg-base-100 shadow-md px-4 border-b border-base-200">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost text-xl font-bold">My Portfolio</NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 font-medium gap-2">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/certifications">Certifications</NuxtLink></li>
        <li><NuxtLink to="/techstack">Tech Stack</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>