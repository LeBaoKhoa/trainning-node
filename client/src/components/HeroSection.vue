<template>
  <section id="about" class="section hero-section">
    <div class="container hero-container">
      <div class="hero-text">
        <p class="greeting">Xin chào! 👋 Tôi là</p>
        <h1>{{ profile.name || 'Tên của bạn' }}</h1>
        <p class="title">{{ profile.title || 'Fullstack Developer' }}</p>
        <p class="bio">{{ profile.bio || 'Giới thiệu ngắn về bản thân...' }}</p>
        <div class="hero-links">
          <a v-if="profile.github" :href="profile.github" target="_blank" class="btn btn-primary">GitHub</a>
          <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" class="btn btn-outline">LinkedIn</a>
        </div>
      </div>
      <div class="hero-image">
        <img :src="profile.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio'" :alt="profile.name" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getProfile } from '../services/api';

const profile = ref({});
onMounted(async () => {
  try {
    const res = await getProfile();
    profile.value = res.data.data || res.data;
  } catch (e) { console.warn('Profile API not ready', e); }
});
</script>
<style scoped>
.hero-section {
  background: linear-gradient(135deg, #f0f4ff 0%, #fff 60%);
  min-height: calc(100vh - 65px);
  display: flex;
  align-items: center;
}
.hero-container {
  display: flex;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}
.hero-text { flex: 1; min-width: 280px; }
.greeting { color: var(--primary); font-weight: 600; margin-bottom: 8px; }
h1 { font-size: 3rem; font-weight: 800; line-height: 1.1; margin-bottom: 12px; }
.title { font-size: 1.3rem; color: var(--primary); font-weight: 600; margin-bottom: 16px; }
.bio { color: var(--gray); font-size: 1.05rem; margin-bottom: 32px; max-width: 480px; }
.hero-links { display: flex; gap: 16px; flex-wrap: wrap; }
.btn {
  padding: 12px 28px; border-radius: 8px;
  font-weight: 600; font-size: 0.95rem;
  transition: all 0.2s; cursor: pointer;
  display: inline-block;
}
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: #3730a3; }
.btn-outline { border: 2px solid var(--primary); color: var(--primary); }
.btn-outline:hover { background: var(--primary); color: #fff; }
.hero-image { flex-shrink: 0; }
.hero-image img {
  width: 280px; height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid var(--primary);
  box-shadow: 0 8px 40px rgba(79,70,229,0.2);
}
</style>
