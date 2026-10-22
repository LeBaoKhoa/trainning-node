<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import SkillSection from './components/SkillSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import ContactSection from './components/ContactSection.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
@import './assets/main.css';
</style>
