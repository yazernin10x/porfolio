<template>
  <nav class="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo et nom -->
        <Logo />
        <!-- Menu principal -->
        <Navigation />
        <!-- Boutons droite -->
        <NavButtons />
      </div>
    </div>

    <!-- Menu mobile -->
    <MobileMenu />
  </nav>
</template>

<script setup>
import Logo from '~/components/navbar/Logo.vue'
import Navigation from '~/components/navbar/Navigation.vue'
import NavButtons from '~/components/navbar/NavButtons.vue'
import MobileMenu from '~/components/navbar/MobileMenu.vue'
</script>

