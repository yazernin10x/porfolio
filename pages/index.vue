<template>
    <AnimatedSection>
        <Home />
    </AnimatedSection>

    <AnimatedSection>
        <ProfessionalExperience />
    </AnimatedSection>

    <AnimatedSection>
        <AcademicBackground />
    </AnimatedSection>

    <AnimatedSection>
        <Skills />
    </AnimatedSection>

    <AnimatedSection>
        <Projects />
    </AnimatedSection>

    <AnimatedSection>
        <Contact />
    </AnimatedSection>
</template>

<script setup lang="ts">
import Home from '~/components/sections/Home.vue'
import ProfessionalExperience from '~/components/sections/ProfessionalExperience.vue'
import AcademicBackground from '~/components/sections/AcademicBackground.vue'
import Skills from '~/components/sections/Skills.vue'
import Projects from '~/components/sections/Projects.vue'
import Contact from '~/components/sections/Contact.vue'
import AnimatedSection from '~/components/AnimatedSection.vue'
</script>
