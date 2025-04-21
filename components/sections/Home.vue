<template>
  <section class="min-h-screen relative overflow-hidden bg-teal-950 dark:bg-teal-950 bg-teal-50">
    <!-- Effets d'arrière-plan -->
    <div class="absolute inset-0">
      <!-- Gradient de base -->
      <div class="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-50 to-emerald-100 dark:from-teal-900 dark:via-teal-800 dark:to-emerald-900"></div>

      <!-- Vagues animées gauche -->
      <div class="waves-container absolute inset-0 opacity-20">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>

      <!-- Vagues animées droite -->
      <div class="waves-container-right absolute inset-0 opacity-20">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>

      <!-- Particules flottantes gauche -->
      <div class="particles-container absolute inset-0">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Particules flottantes droite -->
      <div class="particles-container-right absolute inset-0">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
    </div>

    <div class="relative flex items-center justify-center min-h-[90vh] px-4">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Photo de profil -->
        <div class="mb-8">
          <img
            src="@/assets/images/profile.png" 
            alt="Ali YARO"
            class="w-48 h-48 rounded-full mx-auto border-4 border-teal-600 dark:border-white shadow-xl object-cover"
          />
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-teal-950 dark:text-white mb-8">
          <span class="block">Ali YARO</span>
          <span class="block text-teal-800 dark:text-white text-3xl md:text-4xl mt-4">Développeur Python, Django | Data Engineer </span>
        </h1>
        
        <p class="text-xl text-teal-800 dark:text-white mb-12">
          Excellence digitale et data, où chaque ligne de code compte.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="mailto:ali.yaro@hotmail.com" 
             class="flex items-center px-6 py-3 bg-teal-100/50 dark:bg-white/10 rounded-lg transition-all duration-300 hover:bg-teal-200/50 dark:hover:bg-white/20 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-600 dark:text-teal-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-teal-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300">ali.yaro@hotmail.com</span>
          </a>
          
          <a href="tel:+330768583010" 
             class="flex items-center px-6 py-3 bg-teal-100/50 dark:bg-white/10 rounded-lg transition-all duration-300 hover:bg-teal-200/50 dark:hover:bg-white/20 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-600 dark:text-teal-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-teal-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300">+33 07 68 58 30 10</span>
          </a>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            class="px-8 py-4 bg-teal-600 dark:bg-white text-white dark:text-teal-900 rounded-lg font-semibold transition-all duration-300 hover:bg-teal-700 dark:hover:bg-gray-100 hover:shadow-xl"
          >
            Découvrir mes projets
          </a>
          <a 
            href="#contact" 
            class="px-8 py-4 border-2 border-teal-600 dark:border-white text-teal-600 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:bg-teal-50 dark:hover:bg-white/10"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles pour les vagues gauches */
.waves-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: -50%;
}

/* Nouveau conteneur pour les vagues droites */
.waves-container-right {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  right: -50%;
  transform: scaleX(-1); /* Miroir horizontal */
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: rgba(13, 148, 136, 0.1);
  border-radius: 50%;
  animation: wave 20s linear infinite;
  @apply dark:bg-[rgba(20,184,166,0.1)];
}

.wave1 {
  animation-delay: 0s;
  transform: translate(-50%, 50%) rotate(0deg);
}

.wave2 {
  animation-delay: -5s;
  transform: translate(-50%, 48%) rotate(10deg);
}

.wave3 {
  animation-delay: -10s;
  transform: translate(-50%, 52%) rotate(-10deg);
}

/* Styles pour les particules gauches */
.particles-container {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 0;
}

/* Nouveau conteneur pour les particules droites */
.particles-container-right {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(13, 148, 136, 0.5);
  border-radius: 50%;
  animation: float 15s infinite, glow 2s infinite;
  @apply bg-teal-600/50 dark:bg-[rgba(20,184,166,0.5)];
}

/* Positionnement des particules gauches */
.particles-container .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particles-container .particle:nth-child(2) { left: 20%; animation-delay: -2s; }
.particles-container .particle:nth-child(3) { left: 30%; animation-delay: -4s; }
.particles-container .particle:nth-child(4) { left: 40%; animation-delay: -6s; }
.particles-container .particle:nth-child(5) { left: 45%; animation-delay: -8s; }

/* Positionnement des particules droites */
.particles-container-right .particle:nth-child(1) { right: 10%; animation-delay: -1s; }
.particles-container-right .particle:nth-child(2) { right: 20%; animation-delay: -3s; }
.particles-container-right .particle:nth-child(3) { right: 30%; animation-delay: -5s; }
.particles-container-right .particle:nth-child(4) { right: 40%; animation-delay: -7s; }
.particles-container-right .particle:nth-child(5) { right: 45%; animation-delay: -9s; }

@keyframes wave {
  0% {
    transform: translate(-50%, 50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, 50%) rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-100vh) scale(1.5);
    opacity: 0.2;
  }
}

@keyframes glow {
  0%, 100% {
    @apply shadow-[0_0_5px_theme(colors.teal.600),0_0_10px_theme(colors.teal.600),0_0_15px_theme(colors.teal.500),0_0_20px_theme(colors.teal.500)] dark:shadow-[0_0_5px_#14b8a6,0_0_10px_#14b8a6,0_0_15px_#0d9488,0_0_20px_#0d9488];
  }
  50% {
    @apply shadow-[0_0_10px_theme(colors.teal.600),0_0_20px_theme(colors.teal.600),0_0_30px_theme(colors.teal.500),0_0_40px_theme(colors.teal.500)] dark:shadow-[0_0_10px_#14b8a6,0_0_20px_#14b8a6,0_0_30px_#0d9488,0_0_40px_#0d9488];
  }
}
</style> 