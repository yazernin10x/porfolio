<template>
  <section id="skills" class="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative">
    <!-- Éléments décoratifs (visibles uniquement en mode sombre) -->
    <div class="absolute inset-0 hidden dark:block">
      <!-- Cercles flous -->
      <div class="absolute inset-0 opacity-[0.07]">
        <div class="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
      </div>

      <!-- Points décoratifs -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div v-for="i in 50" :key="i" 
             class="absolute w-2 h-2 bg-blue-400 rounded-full"
             :style="{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`
             }">
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Nouveau style de titre aligné avec ProfessionalExperience -->
      <div class="mb-20 text-center">
        <h2 class="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
          Mes Compétences
        </h2>
        <div class="h-1 w-24 bg-blue-500 mx-auto"></div>
      </div>
      <!-- <p 
        class="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="400"
      >
        Technologies et expertises professionnelles
      </p> -->
      
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="300 + (index * 100)"
          class="group"
        >
          <!-- Carte avec couleurs plus sombres -->
          <div class="h-full p-6 bg-gray-100/70 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <!-- Titre avec icône intégrée -->
            <div class="flex items-center gap-3 mb-4">
              <i :class="skill.icon" class="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"></i>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {{ skill.title }}
              </h3>
            </div>

            <!-- Description encore plus sombre -->
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ skill.description }}
            </p>

            <!-- Technologies avec nouveau style plus sombre -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in skill.technologies" 
                :key="tech"
                class="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-700 rounded-full group-hover:bg-gray-300/50 dark:group-hover:bg-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Ligne horizontale bleue modifiée -->
            <div class="mt-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transform scale-x-0 group-hover:scale-x-100 group-hover:opacity-60 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  {
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateur modernes et réactives",
    icon: "i-mdi-code-tags",
    technologies: ["Vue.js", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Développement Backend",
    description: "Construction d'APIs robustes et évolutives",
    icon: "i-mdi-server",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Outils de Développement",
    description: "Maîtrise des outils de développement modernes",
    icon: "i-mdi-tools",
    technologies: ["Git", "Docker", "VS Code", "Webpack"]
  },
  {
    title: "Design UI/UX",
    description: "Création d'expériences utilisateur intuitives",
    icon: "i-mdi-palette",
    technologies: ["Figma", "Adobe XD", "Responsive Design"]
  },
  {
    title: "Tests et Déploiement",
    description: "Assurance qualité et déploiement continu",
    icon: "i-mdi-test-tube",
    technologies: ["Jest", "Cypress", "CI/CD", "AWS"]
  },
  {
    title: "Performance Web",
    description: "Optimisation et amélioration des performances",
    icon: "i-mdi-speedometer",
    technologies: ["SEO", "Lighthouse", "Web Vitals"]
  },
  {
    title: "Data Engineering",
    description: "Conception et maintenance de pipelines de données robustes",
    icon: "i-mdi-database-cog",
    technologies: ["Apache Spark", "Airflow", "Kafka", "ETL", "Data Warehousing", "Snowflake"]
  },
  {
    title: "Python Development",
    description: "Développement d'applications et scripts Python",
    icon: "i-mdi-language-python",
    technologies: ["Python", "Django", "FastAPI", "Pandas", "NumPy", "SQLAlchemy"]
  },
  {
    title: "Data Analysis",
    description: "Analyse et visualisation de données",
    icon: "i-mdi-chart-box",
    technologies: ["Jupyter", "Tableau", "Power BI", "Matplotlib", "Scikit-learn"]
  }
])
</script>

<style scoped>
/* Suppression des styles de fond existants car maintenant gérés par les classes Tailwind */
section {
  position: relative;
  overflow: hidden;
}

.dark section {
  position: relative;
  overflow: hidden;
}
</style>