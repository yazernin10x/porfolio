<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <main class="flex-grow">
            <slot />
        </main>
        <Footer />
    </div>
</template> 

<script setup>
import Navbar from '~/components/navbar/Navbar.vue'
</script>

