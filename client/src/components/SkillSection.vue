<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <h2 class="section-title">Skills &amp; Technology</h2>
      <div v-for="(group, cat) in grouped" :key="cat" class="skill-group">
        <h3 class="category-title">{{ cat }}</h3>
        <div class="skills-grid">
          <div v-for="skill in group" :key="skill.id" class="skill-card">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { getSkills } from '../services/api';

const skills = ref([
  { id:1, name:'Vue.js', category:'Frontend', level:70 },
  { id:2, name:'Node.js', category:'Backend', level:65 },
  { id:3, name:'MySQL', category:'Database', level:60 },
]);

onMounted(async () => {
  try {
    const res = await getSkills();
    if ((res.data.data || res.data).length) skills.value = res.data.data || res.data;
  } catch (e) { console.warn('Skills API not ready'); }
});

const grouped = computed(() => {
  return skills.value.reduce((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});
});
</script>
<style scoped>
.skills-section { background: var(--white); }
.skill-group { margin-bottom: 40px; }
.category-title {
  font-size: 1.1rem; font-weight: 700;
  color: var(--primary); margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e2e8f0;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.skill-card {
  background: var(--bg);
  border-radius: var(--radius);
  padding: 16px 20px;
}
.skill-header {
  display: flex; justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 600;
}
.skill-level { color: var(--primary); }
.progress-bar {
  background: #e2e8f0;
  border-radius: 999px; height: 8px;
}
.progress-fill {
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
  height: 100%; border-radius: 999px;
  transition: width 0.8s ease;
}
</style>
