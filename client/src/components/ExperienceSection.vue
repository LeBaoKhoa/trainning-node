<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Kinh nghiệm làm việc</h2>
      <div class="timeline">
        <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="exp-header">
              <div>
                <h3 class="position">{{ exp.position }}</h3>
                <p class="company">🏢 {{ exp.company }}</p>
              </div>
              <span class="period">
                {{ formatDate(exp.start_date) }} — {{ exp.end_date ? formatDate(exp.end_date) : 'Hiện tại' }}
              </span>
            </div>
            <p class="description">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getExperiences } from '../services/api';

const experiences = ref([
  { id:1, position:'Frontend Developer', company:'Công ty ABC', start_date:'2023-01-01', end_date:null, description:'Phát triển giao diện web với Vue.js và React.' },
]);

onMounted(async () => {
  try {
    const res = await getExperiences();
    if ((res.data.data || res.data).length) experiences.value = res.data.data || res.data;
  } catch (e) { console.warn('Experiences API not ready'); }
});

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('vi-VN', { year:'numeric', month:'short' });
};
</script>
<style scoped>
.timeline { position: relative; padding-left: 32px; }
.timeline::before {
  content: ''; position: absolute; left: 8px; top: 0; bottom: 0;
  width: 2px; background: #e2e8f0;
}
.timeline-item { position: relative; margin-bottom: 32px; }
.timeline-dot {
  position: absolute; left: -28px; top: 20px;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--primary); border: 3px solid #fff;
  box-shadow: 0 0 0 3px var(--primary-light);
}
.timeline-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary);
}
.exp-header {
  display: flex; justify-content: space-between;
  align-items: flex-start; flex-wrap: wrap; gap: 8px;
  margin-bottom: 12px;
}
.position { font-size: 1.1rem; font-weight: 700; }
.company { color: var(--gray); margin-top: 4px; }
.period {
  font-size: 0.85rem; color: var(--white);
  background: var(--primary); padding: 4px 12px;
  border-radius: 999px; white-space: nowrap;
}
.description { color: var(--gray); }
</style>
