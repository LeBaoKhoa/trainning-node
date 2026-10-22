<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <h2 class="section-title">Dự án nổi bật</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-thumbnail">
            <img :src="project.thumbnail_url || 'https://via.placeholder.com/400x220?text=Project'" :alt="project.title" />
          </div>
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-tags">
              <span v-for="tech in (project.tech_stack || '').split(',')" :key="tech" class="tag">{{ tech.trim() }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github_url" :href="project.github_url" target="_blank" class="link-btn">GitHub</a>
              <a v-if="project.demo_url" :href="project.demo_url" target="_blank" class="link-btn link-demo">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getProjects } from '../services/api';

const projects = ref([
  { id:1, title:'Portfolio Website', description:'Website giới thiệu bản thân với Vue.js + Node.js.', tech_stack:'Vue.js, Node.js, MySQL', github_url:'#', demo_url:'#' },
]);

onMounted(async () => {
  try {
    const res = await getProjects();
    if ((res.data.data || res.data).length) projects.value = res.data.data || res.data;
  } catch (e) { console.warn('Projects API not ready'); }
});
</script>
<style scoped>
.projects-section { background: var(--bg); }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}
.project-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
.project-thumbnail { overflow: hidden; height: 200px; }
.project-thumbnail img { width: 100%; height: 100%; object-fit: cover; }
.project-body { padding: 20px; }
.project-body h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 10px; }
.project-body p { color: var(--gray); font-size: 0.95rem; margin-bottom: 16px; }
.tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.tag {
  background: #ede9fe; color: var(--primary);
  padding: 4px 10px; border-radius: 999px;
  font-size: 0.8rem; font-weight: 600;
}
.project-links { display: flex; gap: 12px; }
.link-btn {
  padding: 8px 20px; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  border: 2px solid var(--primary); color: var(--primary);
  transition: all 0.2s;
}
.link-btn:hover { background: var(--primary); color: #fff; }
.link-demo { background: var(--primary); color: #fff; }
.link-demo:hover { background: #3730a3; }
</style>
