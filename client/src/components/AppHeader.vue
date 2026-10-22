<template>
  <header class="header">
    <div class="container nav-container">
      <div class="logo">Portfolio</div>
      <nav>
        <a href="#about">Giới thiệu</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Kinh nghiệm</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Liên hệ</a>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  padding: 16px 0;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
}
nav { display: flex; gap: 32px; }
nav a {
  font-weight: 500;
  color: var(--gray);
  transition: color 0.2s;
}
nav a:hover { color: var(--primary); }
</style>
