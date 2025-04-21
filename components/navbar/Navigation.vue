<template>
  <div class="hidden md:flex items-center space-x-12">
    <NuxtLink 
      v-for="item in menuItems" 
      :key="item.path"
      :to="item.path" 
      class="text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-300 transition-all duration-300 font-medium relative py-2 group"
    >
      {{ item.name }}
      <span class="absolute -bottom-1 left-1/2 w-2 h-2 bg-teal-400 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      <span class="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-teal-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
    </NuxtLink>
  </div>
</template>

<script setup>
const menuItems = [
  { path: '/#professional-experience', name: 'Expérience professionnelle' },
  { path: '/#academic-background', name: 'Parcours académique' },
  { path: '/#skills', name: 'Compétences' },
  { path: '/#projects', name: 'Projets' },
  { path: '/#contact', name: 'Contact' }
]
</script> 